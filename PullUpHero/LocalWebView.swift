import Foundation
import SwiftUI
import WebKit
import UIKit
import UserNotifications
import AVFoundation

struct LocalWebView: UIViewRepresentable {
    func makeCoordinator() -> Coordinator {
        Coordinator()
    }

    func makeUIView(context: Context) -> WKWebView {
        let controller = WKUserContentController()
        controller.add(context.coordinator, name: Coordinator.bridgeName)

        let configuration = WKWebViewConfiguration()
        configuration.userContentController = controller
        configuration.websiteDataStore = .default()
        configuration.defaultWebpagePreferences.allowsContentJavaScript = true

        let webView = WKWebView(frame: .zero, configuration: configuration)
        webView.navigationDelegate = context.coordinator
        webView.scrollView.contentInsetAdjustmentBehavior = .automatic
        webView.scrollView.bounces = false
        webView.isOpaque = false
        webView.backgroundColor = UIColor(red: 7 / 255, green: 15 / 255, blue: 35 / 255, alpha: 1)
        webView.scrollView.backgroundColor = webView.backgroundColor
        context.coordinator.webView = webView

        guard let indexURL = Bundle.main.url(forResource: "index", withExtension: "html", subdirectory: "Web") else {
            assertionFailure("Bundled Web/index.html is missing")
            return webView
        }
        webView.loadFileURL(indexURL, allowingReadAccessTo: indexURL.deletingLastPathComponent())
        return webView
    }

    func updateUIView(_ uiView: WKWebView, context: Context) {}

    static func dismantleUIView(_ uiView: WKWebView, coordinator: Coordinator) {
        uiView.configuration.userContentController.removeScriptMessageHandler(forName: Coordinator.bridgeName)
    }

    final class Coordinator: NSObject, WKScriptMessageHandler, WKNavigationDelegate {
        static let bridgeName = "nativeBridge"
        weak var webView: WKWebView?
        private let soundPlayer = SoundPlayer()

        func userContentController(_ userContentController: WKUserContentController, didReceive message: WKScriptMessage) {
            guard message.name == Self.bridgeName,
                  let body = message.body as? [String: Any],
                  let type = body["type"] as? String else { return }

            switch type {
            case "setCompleted":
                UIImpactFeedbackGenerator(style: .medium).impactOccurred()
                soundPlayer.playSetTone()
            case "workoutCompleted":
                UINotificationFeedbackGenerator().notificationOccurred(.success)
                soundPlayer.playSuccessTone()
            case "rewardEarned":
                UINotificationFeedbackGenerator().notificationOccurred(.success)
                soundPlayer.playRewardTone()
            case "scheduleReminder":
                let hour = body["hour"] as? Int ?? 18
                let minute = body["minute"] as? Int ?? 0
                scheduleReminder(hour: hour, minute: minute)
            case "cancelReminder":
                cancelReminder()
            case "requestNotificationStatus":
                sendNotificationStatus()
            default:
                break
            }
        }

        func webView(_ webView: WKWebView, decidePolicyFor navigationAction: WKNavigationAction, decisionHandler: @escaping (WKNavigationActionPolicy) -> Void) {
            guard let url = navigationAction.request.url else {
                decisionHandler(.cancel)
                return
            }
            if url.isFileURL {
                decisionHandler(.allow)
                return
            }
            if navigationAction.navigationType == .linkActivated {
                UIApplication.shared.open(url)
                decisionHandler(.cancel)
                return
            }
            decisionHandler(.allow)
        }

        private func scheduleReminder(hour: Int, minute: Int) {
            let center = UNUserNotificationCenter.current()
            center.requestAuthorization(options: [.alert, .sound]) { [weak self] granted, _ in
                guard let self else { return }
                guard granted else {
                    self.sendToJavaScript(["status": "denied"])
                    return
                }

                center.removePendingNotificationRequests(withIdentifiers: ["davyd-daily-training"])

                let content = UNMutableNotificationContent()
                content.title = "Час для місії героя 💪"
                content.body = "Давиде, сьогодні достатньо одного короткого завдання. Готовий стати сильнішим?"
                content.sound = .default

                var components = DateComponents()
                components.hour = min(max(hour, 0), 23)
                components.minute = min(max(minute, 0), 59)
                let trigger = UNCalendarNotificationTrigger(dateMatching: components, repeats: true)
                let request = UNNotificationRequest(identifier: "davyd-daily-training", content: content, trigger: trigger)
                center.add(request) { error in
                    if error == nil {
                        self.sendToJavaScript([
                            "status": "scheduled",
                            "time": String(format: "%02d:%02d", components.hour ?? 18, components.minute ?? 0)
                        ])
                    } else {
                        self.sendToJavaScript(["status": "denied"])
                    }
                }
            }
        }

        private func cancelReminder() {
            UNUserNotificationCenter.current().removePendingNotificationRequests(withIdentifiers: ["davyd-daily-training"])
            sendToJavaScript(["status": "cancelled"])
        }

        private func sendNotificationStatus() {
            UNUserNotificationCenter.current().getNotificationSettings { [weak self] settings in
                let status: String
                switch settings.authorizationStatus {
                case .authorized, .provisional, .ephemeral:
                    status = "authorized"
                case .denied:
                    status = "denied"
                case .notDetermined:
                    status = "notDetermined"
                @unknown default:
                    status = "notDetermined"
                }
                self?.sendToJavaScript(["status": status])
            }
        }

        private func sendToJavaScript(_ payload: [String: String]) {
            guard let data = try? JSONSerialization.data(withJSONObject: payload),
                  let json = String(data: data, encoding: .utf8) else { return }
            DispatchQueue.main.async { [weak self] in
                self?.webView?.evaluateJavaScript("window.App && App.onReminderResult(\(json));")
            }
        }
    }
}

private final class SoundPlayer {
    private var player: AVAudioPlayer?

    func playSetTone() {
        play(named: "set-complete")
    }

    func playSuccessTone() {
        play(named: "workout-complete")
    }

    private func play(named name: String) {
        guard let url = Bundle.main.url(forResource: name, withExtension: "wav") else { return }
        do {
            player = try AVAudioPlayer(contentsOf: url)
            player?.prepareToPlay()
            player?.play()
        } catch {
            // Haptic feedback remains available even if audio playback fails.
        }
    }
}
