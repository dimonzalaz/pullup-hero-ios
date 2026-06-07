const PLAYER_NAME = 'Давид';
const PLAYER_NAME_VOCATIVE = 'Давиде';


// Native iPhone/iPad bridge. The browser version keeps working without it.
const NativeBridge = {
  available() {
    return Boolean(window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.nativeBridge);
  },
  send(type, payload = {}) {
    if (!this.available()) return false;
    window.webkit.messageHandlers.nativeBridge.postMessage({ type, ...payload });
    return true;
  }
};

// ======= 8-WEEK ASSISTED PULLUP PROGRAM FOR A 7-YEAR-OLD =======
// Starting point: 3 sets × 2 clean pull-ups with an assistance band.
// The goal is calm, technically clean progress — not training to failure.
const PROGRAM = [
  {
    week: 1, title: "База героя 🌱", desc: "Закріплюємо 3 × 2 з резинкою",
    days: [
      { day: 1, type: "train", title: "3 × 2 з резинкою", note: "Підтягуйся плавно: без ривків і розгойдування.", sets: [{reps: "2 з резинкою"}, {reps: "2 з резинкою"}, {reps: "2 з резинкою"}], rest: 90, xp: 40 },
      { day: 2, type: "rest", title: "Відпочинок або активна гра 😴" },
      { day: 3, type: "train", title: "Повторюємо 3 × 2", note: "Залишай сили в запасі. Не треба підтягуватись через силу.", sets: [{reps: "2 з резинкою"}, {reps: "2 з резинкою"}, {reps: "2 з резинкою"}], rest: 90, xp: 40 },
      { day: 4, type: "rest", title: "Відпочинок або активна гра 😴" },
      { day: 5, type: "train", title: "Технічний день", note: "Мета — три однаково акуратні підходи.", sets: [{reps: "2 з резинкою"}, {reps: "2 з резинкою"}, {reps: "2 з резинкою"}], rest: 90, xp: 45 },
      { day: 6, type: "rest", title: "Відпочинок 😴" },
      { day: 7, type: "rest", title: "Відпочинок 😴" },
    ]
  },
  {
    week: 2, title: "Ще один крок 💪", desc: "Додаємо лише одне повторення",
    days: [
      { day: 1, type: "train", title: "Стабільні 3 × 2", note: "Якщо легко — чудово. Все одно не поспішай.", sets: [{reps: "2 з резинкою"}, {reps: "2 з резинкою"}, {reps: "2 з резинкою"}], rest: 90, xp: 45 },
      { day: 2, type: "rest", title: "Відпочинок або активна гра 😴" },
      { day: 3, type: "train", title: "Перший бонусний повтор", note: "Третє повторення робимо тільки у першому підході.", sets: [{reps: "3 з резинкою"}, {reps: "2 з резинкою"}, {reps: "2 з резинкою"}], rest: 90, xp: 50 },
      { day: 4, type: "rest", title: "Відпочинок або активна гра 😴" },
      { day: 5, type: "train", title: "Закріплюємо 3–2–2", note: "Якщо третє повторення виходить із ривком — зроби 2–2–2.", sets: [{reps: "3 з резинкою"}, {reps: "2 з резинкою"}, {reps: "2 з резинкою"}], rest: 90, xp: 50 },
      { day: 6, type: "rest", title: "Відпочинок 😴" },
      { day: 7, type: "rest", title: "Відпочинок 😴" },
    ]
  },
  {
    week: 3, title: "Сила росте ⭐", desc: "Переходимо до 3–3–2",
    days: [
      { day: 1, type: "train", title: "3–2–2 з резинкою", note: "Зберігай однаковий темп у кожному повторенні.", sets: [{reps: "3 з резинкою"}, {reps: "2 з резинкою"}, {reps: "2 з резинкою"}], rest: 90, xp: 55 },
      { day: 2, type: "rest", title: "Відпочинок або активна гра 😴" },
      { day: 3, type: "train", title: "Додаємо повтор", note: "Другий підхід стає трішки сильнішим.", sets: [{reps: "3 з резинкою"}, {reps: "3 з резинкою"}, {reps: "2 з резинкою"}], rest: 90, xp: 60 },
      { day: 4, type: "rest", title: "Відпочинок або активна гра 😴" },
      { day: 5, type: "train", title: "Закріплюємо 3–3–2", note: "Не женемось за рекордом. Акуратні повторення важливіші.", sets: [{reps: "3 з резинкою"}, {reps: "3 з резинкою"}, {reps: "2 з резинкою"}], rest: 90, xp: 60 },
      { day: 6, type: "rest", title: "Відпочинок 😴" },
      { day: 7, type: "rest", title: "Відпочинок 😴" },
    ]
  },
  {
    week: 4, title: "Перша вершина 🏔️", desc: "Виходимо на 3 × 3",
    days: [
      { day: 1, type: "train", title: "Легкий день 2–2–2", note: "Трошки відпочиваємо, щоб стати сильнішими.", sets: [{reps: "2 з резинкою"}, {reps: "2 з резинкою"}, {reps: "2 з резинкою"}], rest: 90, xp: 50 },
      { day: 2, type: "rest", title: "Відпочинок або активна гра 😴" },
      { day: 3, type: "train", title: "Повертаємось до 3–3–2", note: "Підборіддя вище перекладини, плечі не підтискай до вух.", sets: [{reps: "3 з резинкою"}, {reps: "3 з резинкою"}, {reps: "2 з резинкою"}], rest: 100, xp: 65 },
      { day: 4, type: "rest", title: "Відпочинок або активна гра 😴" },
      { day: 5, type: "train", title: "3 × 3 з резинкою!", note: "Нова вершина: три чисті повторення у кожному підході.", sets: [{reps: "3 з резинкою"}, {reps: "3 з резинкою"}, {reps: "3 з резинкою"}], rest: 100, xp: 75 },
      { day: 6, type: "rest", title: "Відпочинок 😴" },
      { day: 7, type: "rest", title: "Відпочинок 😴" },
    ]
  },
  {
    week: 5, title: "Новий рівень 🔥", desc: "Обережно додаємо четверте повторення",
    days: [
      { day: 1, type: "train", title: "Закріплюємо 3 × 3", note: "Якщо минулого тижня було складно — повтори цей день кілька разів.", sets: [{reps: "3 з резинкою"}, {reps: "3 з резинкою"}, {reps: "3 з резинкою"}], rest: 100, xp: 70 },
      { day: 2, type: "rest", title: "Відпочинок або активна гра 😴" },
      { day: 3, type: "train", title: "Перші 4 повторення", note: "Четверте повторення додаємо лише в першому підході.", sets: [{reps: "4 з резинкою"}, {reps: "3 з резинкою"}, {reps: "3 з резинкою"}], rest: 110, xp: 80 },
      { day: 4, type: "rest", title: "Відпочинок або активна гра 😴" },
      { day: 5, type: "train", title: "Закріплюємо 4–3–3", note: "Якщо техніка псується — повернись до 3–3–3. Це нормально.", sets: [{reps: "4 з резинкою"}, {reps: "3 з резинкою"}, {reps: "3 з резинкою"}], rest: 110, xp: 80 },
      { day: 6, type: "rest", title: "Відпочинок 😴" },
      { day: 7, type: "rest", title: "Відпочинок 😴" },
    ]
  },
  {
    week: 6, title: "Міцні крила 🦸", desc: "Виходимо на 3 × 4",
    days: [
      { day: 1, type: "train", title: "4–3–3 з резинкою", note: "Починай кожен підхід після повного відпочинку.", sets: [{reps: "4 з резинкою"}, {reps: "3 з резинкою"}, {reps: "3 з резинкою"}], rest: 110, xp: 85 },
      { day: 2, type: "rest", title: "Відпочинок або активна гра 😴" },
      { day: 3, type: "train", title: "Додаємо ще один повтор", note: "Тепер два підходи по чотири.", sets: [{reps: "4 з резинкою"}, {reps: "4 з резинкою"}, {reps: "3 з резинкою"}], rest: 120, xp: 90 },
      { day: 4, type: "rest", title: "Відпочинок або активна гра 😴" },
      { day: 5, type: "train", title: "3 × 4 з резинкою!", note: "Якщо все виходить чисто — ти готовий до фінальних тижнів.", sets: [{reps: "4 з резинкою"}, {reps: "4 з резинкою"}, {reps: "4 з резинкою"}], rest: 120, xp: 100 },
      { day: 6, type: "rest", title: "Відпочинок 😴" },
      { day: 7, type: "rest", title: "Відпочинок 😴" },
    ]
  },
  {
    week: 7, title: "Перед фіналом 🚀", desc: "Готуємось до п'яти повторень",
    days: [
      { day: 1, type: "train", title: "Закріплюємо 3 × 4", note: "Головне — не поспішати і не тренуватись до відмови.", sets: [{reps: "4 з резинкою"}, {reps: "4 з резинкою"}, {reps: "4 з резинкою"}], rest: 120, xp: 95 },
      { day: 2, type: "rest", title: "Відпочинок або активна гра 😴" },
      { day: 3, type: "train", title: "Перші 5 повторень", note: "П'яте повторення додаємо лише у першому підході.", sets: [{reps: "5 з резинкою"}, {reps: "4 з резинкою"}, {reps: "4 з резинкою"}], rest: 120, xp: 105 },
      { day: 4, type: "rest", title: "Відпочинок або активна гра 😴" },
      { day: 5, type: "train", title: "Закріплюємо 5–4–4", note: "Якщо важко — зроби 4–4–4. Це теж перемога.", sets: [{reps: "5 з резинкою"}, {reps: "4 з резинкою"}, {reps: "4 з резинкою"}], rest: 120, xp: 105 },
      { day: 6, type: "rest", title: "Відпочинок 😴" },
      { day: 7, type: "rest", title: "Відпочинок 😴" },
    ]
  },
  {
    week: 8, title: "ФІНАЛ! 👑", desc: "Три чисті підходи по п'ять",
    days: [
      { day: 1, type: "train", title: "Легкий день 4–4–4", note: "Збираємо сили перед фіналом.", sets: [{reps: "4 з резинкою"}, {reps: "4 з резинкою"}, {reps: "4 з резинкою"}], rest: 120, xp: 100 },
      { day: 2, type: "rest", title: "Відпочинок або активна гра 😴" },
      { day: 3, type: "train", title: "Майже фінал 5–5–4", note: "Залишилось зовсім трішки. Рухайся плавно.", sets: [{reps: "5 з резинкою"}, {reps: "5 з резинкою"}, {reps: "4 з резинкою"}], rest: 120, xp: 120 },
      { day: 4, type: "rest", title: "Відпочинок або активна гра 😴" },
      { day: 5, type: "train", title: "🏆 Фінал: 3 × 5 з резинкою!", note: "Після чистих 3 × 5 можна спробувати новий цикл із легшою резинкою. Без поспіху.", sets: [{reps: "5 з резинкою"}, {reps: "5 з резинкою"}, {reps: "5 з резинкою"}], rest: 120, xp: 200 },
      { day: 6, type: "rest", title: "Відпочинок 😴" },
      { day: 7, type: "rest", title: "Відпочинок 😴" },
    ]
  }
];

// ======= ADAPTIVE TRAINING LEVELS =======
// For Davyd's current ability: 3 sets × 2 pull-ups with an assistance band.
// Progress is intentionally slow: 5 successful training days before moving up.
const ADAPTIVE_LEVELS = [
  { level: 1, title: "Рівень 1 · База героя 🌱", sets: 3, reps: 2, rest: 90, xp: 45, note: "3 × 2. Плавно і без ривків." },
  { level: 2, title: "Рівень 2 · Більше сили 💪", sets: 3, reps: 3, rest: 90, xp: 55, note: "3 × 3. Повільно і рівно." },
  { level: 3, title: "Рівень 3 · Стійкий герой ⚡", sets: 4, reps: 3, rest: 105, xp: 65, note: "4 × 3. Не поспішай." },
  { level: 4, title: "Рівень 4 · Сильні руки 🔥", sets: 4, reps: 4, rest: 120, xp: 80, note: "4 × 4. Якщо важко — скажи." },
  { level: 5, title: "Рівень 5 · Майстер турніка 🏆", sets: 5, reps: 4, rest: 120, xp: 100, note: "5 × 4. Фінальна місія." }
];

const ADAPTIVE_SUCCESS_TO_LEVEL_UP = 5;
const ADAPTIVE_FAILURES_TO_EASE = 2;

function getAdaptiveLevel() {
  const level = Math.min(Math.max(Number(state.trainingLevel || 1), 1), ADAPTIVE_LEVELS.length);
  return ADAPTIVE_LEVELS[level - 1];
}

function adaptiveSets(level) {
  return Array.from({ length: level.sets }, () => ({ reps: `${level.reps} з резинкою`, target: level.reps }));
}

function buildAdaptiveTraining() {
  const level = getAdaptiveLevel();
  return {
    week: (state.trainingLevel || 1) - 1,
    day: 0,
    data: {
      type: "train",
      title: `${level.title}: ${level.sets} × ${level.reps}`,
      note: level.note,
      sets: adaptiveSets(level),
      rest: level.rest,
      xp: level.xp,
      adaptive: true,
      level: level.level
    }
  };
}

function normalizeAdaptiveState() {
  state.trainingLevel = Math.min(Math.max(Number(state.trainingLevel || 1), 1), ADAPTIVE_LEVELS.length);
  state.levelSuccessCount = Number(state.levelSuccessCount || 0);
  state.consecutiveMisses = Number(state.consecutiveMisses || 0);
  state.lastDifficulty = state.lastDifficulty || null;
}

// ======= BADGES =======
const BADGES = [
  { id: "first_workout",  emoji: "🥇", name: "Перше тренування!",  desc: "Зробив перше тренування", check: s => s.totalWorkouts >= 1 },
  { id: "three_days",     emoji: "🔥", name: "3 тренування!",      desc: "Завершив 3 тренування", check: s => s.totalWorkouts >= 3 },
  { id: "week1_done",     emoji: "🌱", name: "Тиждень 1!",         desc: "Завершив перший тиждень", check: s => s.weeksCompleted >= 1 },
  { id: "steady_progress",emoji: "💪", name: "Стабільний герой!",   desc: "Завершив 9 тренувань із резинкою", check: s => s.totalWorkouts >= 9 },
  { id: "xp100",          emoji: "⭐", name: "100 XP!",            desc: "Набрав 100 очок досвіду", check: s => s.totalXp >= 100 },
  { id: "streak5",        emoji: "🌟", name: "5 тренувань!",      desc: "Завершив 5 тренувань", check: s => s.totalWorkouts >= 5 },
  { id: "week4_done",     emoji: "🥈", name: "Місяць героя!",      desc: "Завершив 4 тижні", check: s => s.weeksCompleted >= 4 },
  { id: "xp500",          emoji: "💎", name: "500 XP!",            desc: "Набрав 500 очок досвіду", check: s => s.totalXp >= 500 },
  { id: "week8_done",     emoji: "👑", name: "ЧЕМПІОН!",           desc: "Завершив всю програму!", check: s => s.weeksCompleted >= 8 },
  { id: "early_bird",     emoji: "🌅", name: "Ранній птах",        desc: "Зробив 5 тренувань", check: s => s.totalWorkouts >= 5 },
  { id: "ironkid",        emoji: "🦾", name: "Залізний герой!",   desc: "Завершив 15 тренувань", check: s => s.totalWorkouts >= 15 },
  { id: "xp1000",         emoji: "🚀", name: "1000 XP!!",          desc: "Набрав 1000 очок досвіду!", check: s => s.totalXp >= 1000 },
];

// ======= LEVEL SYSTEM =======
const LEVELS = [0, 50, 150, 300, 500, 800, 1200, 1700, 2300, 3000];
function getLevel(xp) {
  for (let i = LEVELS.length - 1; i >= 0; i--) {
    if (xp >= LEVELS[i]) return { level: i + 1, next: LEVELS[i + 1] || LEVELS[i] + 500, cur: LEVELS[i] };
  }
  return { level: 1, next: 50, cur: 0 };
}

// ======= STATE =======
function getLocalDateKey(date = new Date()) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

let state = loadState();
function defaultState() {
  return {
    started: false,
    currentWeek: 0,
    currentDay: 0,
    completedDays: [],
    totalXp: 0,
    totalWorkouts: 0,
    streak: 0,
    maxStreak: 0,
    lastWorkoutDate: null,
    lastCompletedTaskDate: null,
    weeksCompleted: 0,
    history: [],
    earnedBadges: [],
    trainingLevel: 1,
    levelSuccessCount: 0,
    consecutiveMisses: 0,
    lastDifficulty: null,
  };
}
function loadState() {
  try { return JSON.parse(localStorage.getItem('pullup_hero') || '{}'); } catch { return {}; }
}
function saveState() {
  Object.assign(state, state);
  localStorage.setItem('pullup_hero', JSON.stringify(state));
}
function ensureDefaults() {
  const def = defaultState();
  for (const k in def) if (state[k] === undefined) state[k] = def[k];
  normalizeAdaptiveState();
}
ensureDefaults();

// ======= APP =======
const App = {
  workoutSets: [],
  activeRestToast: null,
  activeRestInterval: null,
  activeRestTimeout: null,

  start() {
    document.getElementById('screen-intro').classList.remove('active');
    document.getElementById('screen-app').classList.add('active');
    state.started = true;
    saveState();
    this.switchTab('today');
    this.renderAll();
  },

  renderAll() {
    this.renderToday();
    this.renderProgram();
    this.renderBadges();
    this.renderStats();
    this.renderXP();
    this.renderStreak();
  },

  switchTab(name) {
    document.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
    document.getElementById('tab-' + name).classList.add('active');
    document.querySelector(`[data-tab="${name}"]`).classList.add('active');
  },

  hasCompletedTaskToday() {
    const todayKey = getLocalDateKey();
    // lastWorkoutDate is kept as a compatibility fallback for progress saved
    // by older versions of the app.
    return state.lastCompletedTaskDate === todayKey || state.lastWorkoutDate === new Date().toDateString();
  },

  getCurrentTraining() {
    normalizeAdaptiveState();
    return buildAdaptiveTraining();
  },

  renderToday() {
    this.renderJourney();
    document.getElementById('today-card').style.display = '';
    const t = this.getCurrentTraining();
    if (!t) {
      document.getElementById('today-title').textContent = `🏆 ${PLAYER_NAME}, ти завершив програму!`;
      document.getElementById('today-sets').innerHTML = `<p style="color:var(--text2);text-align:center;padding:1rem;">${PLAYER_NAME_VOCATIVE}, ти справжній герой!</p>`;
      const note = document.getElementById('today-note');
      if (note) note.textContent = 'Наступний крок — легша резинка, але тільки коли 3 × 5 виходить легко і акуратно.';
      document.getElementById('btn-train').style.display = 'none';
      return;
    }
    if (this.hasCompletedTaskToday()) {
      document.getElementById('today-title').textContent = '✅ Місію на сьогодні виконано!';
      document.getElementById('today-sets').innerHTML = `<p style="color:var(--text2);text-align:center;padding:1rem;line-height:1.55;">Супер, ${PLAYER_NAME_VOCATIVE}!<br>Нова місія завтра 🌙</p>`;
      const note = document.getElementById('today-note');
      if (note) note.textContent = 'Сьогодні відпочинок. Нова місія завтра.';
      document.getElementById('btn-train').style.display = 'none';
      return;
    }
    document.getElementById('btn-train').style.display = '';
    document.getElementById('cur-week').textContent = t.week + 1;
    document.getElementById('cur-day').textContent = t.day + 1;
    document.getElementById('today-title').textContent = t.data.title;
    const note = document.getElementById('today-note');
    if (note) note.textContent = t.data.note || 'Плавно. Дорослий поруч.';

    const sets = t.data.sets || [];
    const progressText = `Рівень ${state.trainingLevel}: ${state.levelSuccessCount || 0}/${ADAPTIVE_SUCCESS_TO_LEVEL_UP} до нового рівня`;
    const html = `
      <div class="adaptive-status">
        <div class="adaptive-status-title">🎯 ${progressText}</div>
        <div class="adaptive-status-bar"><span style="width:${Math.min(100, Math.round(((state.levelSuccessCount || 0) / ADAPTIVE_SUCCESS_TO_LEVEL_UP) * 100))}%"></span></div>
        ${state.consecutiveMisses ? `<div class="adaptive-status-warn">Важко: ${state.consecutiveMisses}/${ADAPTIVE_FAILURES_TO_EASE}. Потім стане легше.</div>` : ''}
      </div>
      ${sets.map((s, i) => `
        <div class="set-preview">
          <span class="set-num">Підхід ${i + 1}</span>
          <span class="set-reps">${s.reps}</span>
          <span class="set-rest">${t.data.rest || 60}с відпочинок</span>
        </div>
      `).join('')}
    `;
    document.getElementById('today-sets').innerHTML = html;
  },

  renderJourney() {
    normalizeAdaptiveState();
    const completedLevels = Math.max(0, (state.trainingLevel || 1) - 1);
    const progressInLevel = Math.min(1, (state.levelSuccessCount || 0) / ADAPTIVE_SUCCESS_TO_LEVEL_UP);
    const pct = Math.round(((completedLevels + progressInLevel) / ADAPTIVE_LEVELS.length) * 100);
    const fill = document.getElementById('journey-fill');
    const hero = document.getElementById('journey-hero');
    const label = document.getElementById('journey-label');
    if (fill) fill.style.width = pct + '%';
    if (hero) hero.style.left = pct + '%';
    if (label) label.textContent = `Рівень ${state.trainingLevel} · ${state.levelSuccessCount || 0}/${ADAPTIVE_SUCCESS_TO_LEVEL_UP}`;
  },

  renderXP() {
    const { level, next, cur } = getLevel(state.totalXp);
    const pct = next > cur ? Math.min(100, Math.round((state.totalXp - cur) / (next - cur) * 100)) : 100;
    document.getElementById('user-level').textContent = level;
    document.getElementById('user-xp').textContent = state.totalXp;
    document.getElementById('xp-fill').style.width = pct + '%';
  },

  renderStreak() {
    const today = new Date().toDateString();
    const last = state.lastWorkoutDate;
    // Check streak continuity (simplified: just show stored streak)
    document.getElementById('streak-count').textContent = state.streak;
  },

  renderProgram() {
    normalizeAdaptiveState();
    const container = document.getElementById('program-weeks');
    container.innerHTML = `
      <div class="adaptive-program-summary">
        <div class="adaptive-program-title">🧠 Розумна програма Давида</div>
        <div class="adaptive-program-text">
          Поточна місія підлаштовується під результат. 5 успішних місій — новий рівень.
          2 важкі спроби — місія стане легшою.
        </div>
      </div>
      ${ADAPTIVE_LEVELS.map(level => {
        const isCurrent = level.level === state.trainingLevel;
        const isDone = level.level < state.trainingLevel;
        const cls = isDone ? 'completed open' : isCurrent ? 'current open' : '';
        const status = isDone ? '✅' : isCurrent ? '⚡' : '🔒';
        const progress = isCurrent ? `${state.levelSuccessCount || 0}/${ADAPTIVE_SUCCESS_TO_LEVEL_UP}` : isDone ? 'готово' : 'попереду';
        return `<div class="week-block adaptive-level-block ${cls}">
          <div class="week-header">
            <span class="week-number">Рівень ${level.level}</span>
            <span class="week-title-text">${level.sets} × ${level.reps} з резинкою</span>
            <span class="week-status">${status}</span>
          </div>
          <div class="week-days">
            <div class="day-row ${isCurrent ? 'current' : isDone ? 'completed' : ''}">
              <span class="day-icon">${isDone ? '✅' : isCurrent ? '🎯' : '🏋️'}</span>
              <span class="day-label">${level.title}</span>
              <span class="day-desc">${level.note}</span>
              <span class="day-check">${progress}</span>
            </div>
          </div>
        </div>`;
      }).join('')}
    `;
  },

  renderBadges() {
    const grid = document.getElementById('badges-grid');
    grid.innerHTML = BADGES.map(b => {
      const earned = state.earnedBadges.includes(b.id);
      return `<div class="badge-card ${earned ? 'earned' : 'locked'}">
        <span class="badge-emoji">${b.emoji}</span>
        <div class="badge-name">${b.name}</div>
        <div class="badge-desc">${earned ? b.desc : '???'}</div>
        ${!earned ? '<span class="badge-lock">🔒</span>' : ''}
      </div>`;
    }).join('');
  },

  renderStats() {
    const container = document.getElementById('stats-content');
    const history = state.history || [];

    // Best total reps in a workout
    const bestTotal = history.reduce((max, h) => Math.max(max, h.totalReps || 0), 0);
    const totalRepsEver = history.reduce((sum, h) => sum + (h.totalReps || 0), 0);

    const graphHtml = this.buildProgressGraph(history);

    const histRows = history.slice().reverse().map(h => {
      const setsHtml = (h.sets || []).map((s, i) =>
        `<span class="hist-set ${s.actual > 0 ? 'hit' : 'miss'}">П${i+1}: ${s.actual > 0 ? s.actual : '—'}</span>`
      ).join('');
      return `<div class="history-entry">
        <div class="hist-top">
          <span class="hist-date">📅 ${h.date}</span>
          <span class="hist-week">Тиждень ${h.week || '?'}, День ${h.day || '?'}</span>
          <span class="hist-xp">+${h.xp} XP</span>
        </div>
        <div class="hist-title">${h.title}</div>
        ${h.difficultyLabel ? `<div class="hist-difficulty">${h.difficultyLabel}${h.adaptiveMessage ? ` · ${h.adaptiveMessage}` : ''}</div>` : ''}
        ${h.sets ? `<div class="hist-sets">${setsHtml}${h.totalReps > 0 ? `<span class="hist-total">Всього: ${h.totalReps} раз</span>` : ''}</div>` : ''}
      </div>`;
    }).join('');

    container.innerHTML = `
      ${graphHtml}
      <div class="stats-grid">
        <div class="stat-card"><span class="stat-emoji">💪</span><div class="stat-info"><div class="stat-label">Тренувань</div><div class="stat-value">${state.totalWorkouts}<span class="stat-unit">разів</span></div></div></div>
        <div class="stat-card"><span class="stat-emoji">⭐</span><div class="stat-info"><div class="stat-label">XP</div><div class="stat-value">${state.totalXp}<span class="stat-unit">очок</span></div></div></div>
        <div class="stat-card"><span class="stat-emoji">🔥</span><div class="stat-info"><div class="stat-label">Серія</div><div class="stat-value">${state.maxStreak}<span class="stat-unit">днів</span></div></div></div>
        <div class="stat-card"><span class="stat-emoji">🏆</span><div class="stat-info"><div class="stat-label">Нагороди</div><div class="stat-value">${state.earnedBadges.length}<span class="stat-unit">/ ${BADGES.length}</span></div></div></div>
        ${bestTotal > 0 ? `<div class="stat-card wide"><span class="stat-emoji">🎯</span><div class="stat-info"><div class="stat-label">Рекорд за тренування</div><div class="stat-value">${bestTotal}<span class="stat-unit">повторень</span></div></div></div>` : ''}
        ${totalRepsEver > 0 ? `<div class="stat-card wide"><span class="stat-emoji">📈</span><div class="stat-info"><div class="stat-label">Всього повторень із резинкою</div><div class="stat-value">${totalRepsEver}<span class="stat-unit">за весь час</span></div></div></div>` : ''}
      </div>
      ${history.length > 0 ? `<div class="history-title">📜 Журнал тренувань</div>${histRows}` : '<p style="color:var(--text2);text-align:center;padding:2rem 0;font-size:1rem;">Ще немає тренувань.<br>Час починати! 💪</p>'}
    `;
  },

  buildProgressGraph(history) {
    const numeric = history.filter(h => Number.isFinite(Number(h.totalReps)) && Number(h.totalReps) > 0).slice(-8);
    if (numeric.length < 2) return `
      <div class="progress-card">
        <div class="progress-card-top">
          <div class="progress-card-title">🚀 Твоя траєкторія сили</div>
          <div class="progress-card-note">Графік з'явиться після 2 тренувань</div>
        </div>
        <svg class="progress-chart" viewBox="0 0 520 125" role="img" aria-label="Майбутній графік прогресу">
          <defs><linearGradient id="emptyChartGradient" x1="0" x2="0" y1="0" y2="1"><stop stop-color="#00c6ff" stop-opacity=".20"/><stop offset="1" stop-color="#00c6ff" stop-opacity="0"/></linearGradient></defs>
          <path d="M20 103 C100 92 138 79 210 82 C290 85 350 50 500 26 L500 112 L20 112Z" fill="url(#emptyChartGradient)"/>
          <path d="M20 103 C100 92 138 79 210 82 C290 85 350 50 500 26" fill="none" stroke="#8fd8ff" stroke-width="4" stroke-linecap="round" stroke-dasharray="7 8" opacity=".65"/>
          <text x="20" y="122" class="chart-label">Твій майбутній прогрес</text>
        </svg>
      </div>`;

    const width = 520, height = 155, left = 24, right = 18, top = 18, bottom = 28;
    const values = numeric.map(h => Number(h.totalReps));
    const max = Math.max(...values, 1);
    const min = Math.min(...values, 0);
    const range = Math.max(1, max - min);
    const xStep = numeric.length > 1 ? (width - left - right) / (numeric.length - 1) : 0;
    const y = value => top + (max - value) / range * (height - top - bottom - 10);
    const points = numeric.map((h, i) => ({ x: left + i * xStep, y: y(Number(h.totalReps)), label: h.date, value: h.totalReps }));
    const polyline = points.map(p => `${p.x.toFixed(1)},${p.y.toFixed(1)}`).join(' ');
    const area = `M ${points[0].x.toFixed(1)} ${points[0].y.toFixed(1)} L ${points.slice(1).map(p => `${p.x.toFixed(1)} ${p.y.toFixed(1)}`).join(' L ')} L ${points[points.length-1].x.toFixed(1)} ${height-bottom} L ${points[0].x.toFixed(1)} ${height-bottom} Z`;
    const dots = points.map(p => `<circle class="chart-dot" cx="${p.x.toFixed(1)}" cy="${p.y.toFixed(1)}" r="5"><title>${p.label}: ${p.value}</title></circle>`).join('');
    const labels = points.map((p, i) => (i === 0 || i === points.length - 1 || points.length <= 5) ? `<text class="chart-label" x="${p.x.toFixed(1)}" y="${height-6}" text-anchor="${i === 0 ? 'start' : i === points.length-1 ? 'end' : 'middle'}">${p.label}</text>` : '').join('');
    return `
      <div class="progress-card">
        <div class="progress-card-top">
          <div class="progress-card-title">🚀 Траєкторія сили</div>
          <div class="progress-card-note">Повторення з резинкою за останні ${numeric.length} тренувань</div>
        </div>
        <svg class="progress-chart" viewBox="0 0 ${width} ${height}" role="img" aria-label="Графік прогресу повторень із резинкою">
          <defs><linearGradient id="chartAreaGradient" x1="0" x2="0" y1="0" y2="1"><stop stop-color="#ffd700" stop-opacity=".28"/><stop offset="1" stop-color="#ffd700" stop-opacity="0"/></linearGradient></defs>
          <line class="chart-grid-line" x1="${left}" y1="${top}" x2="${width-right}" y2="${top}"/>
          <line class="chart-grid-line" x1="${left}" y1="${height-bottom}" x2="${width-right}" y2="${height-bottom}"/>
          <path class="chart-area" d="${area}"/>
          <polyline class="chart-line" points="${polyline}"/>
          ${dots}${labels}
        </svg>
      </div>`;
  },

  formatReminderTime(hour, minute) {
    const h = Number.isFinite(Number(hour)) ? Math.min(Math.max(Number(hour), 0), 23) : 18;
    const m = Number.isFinite(Number(minute)) ? Math.min(Math.max(Number(minute), 0), 59) : 0;
    return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}`;
  },

  parseReminderTime(value) {
    const [rawHour, rawMinute] = String(value || '18:00').split(':');
    const hour = Number.parseInt(rawHour, 10);
    const minute = Number.parseInt(rawMinute, 10);
    return {
      hour: Number.isFinite(hour) ? Math.min(Math.max(hour, 0), 23) : 18,
      minute: Number.isFinite(minute) ? Math.min(Math.max(minute, 0), 59) : 0
    };
  },

  populateReminderSelects(time) {
    const hourSelect = document.getElementById('reminder-hour');
    const minuteSelect = document.getElementById('reminder-minute');
    if (!hourSelect || !minuteSelect) return;
    if (!hourSelect.options.length) {
      for (let h = 0; h < 24; h += 1) {
        const option = document.createElement('option');
        option.value = String(h).padStart(2, '0');
        option.textContent = String(h).padStart(2, '0');
        hourSelect.appendChild(option);
      }
    }
    if (!minuteSelect.options.length) {
      for (let m = 0; m < 60; m += 5) {
        const option = document.createElement('option');
        option.value = String(m).padStart(2, '0');
        option.textContent = String(m).padStart(2, '0');
        minuteSelect.appendChild(option);
      }
    }
    const parsed = this.parseReminderTime(time);
    hourSelect.value = String(parsed.hour).padStart(2, '0');
    const roundedMinute = Math.round(parsed.minute / 5) * 5;
    minuteSelect.value = String(roundedMinute === 60 ? 55 : roundedMinute).padStart(2, '0');
  },

  getReminderTimeFromControls() {
    const hourSelect = document.getElementById('reminder-hour');
    const minuteSelect = document.getElementById('reminder-minute');
    const hour = hourSelect ? Number.parseInt(hourSelect.value, 10) : 18;
    const minute = minuteSelect ? Number.parseInt(minuteSelect.value, 10) : 0;
    return {
      hour: Number.isFinite(hour) ? hour : 18,
      minute: Number.isFinite(minute) ? minute : 0,
      time: this.formatReminderTime(hour, minute)
    };
  },

  initReminderSettings() {
    const enabled = localStorage.getItem('pullup_reminder_enabled') === 'true';
    const time = localStorage.getItem('pullup_reminder_time') || '18:00';
    const enabledInput = document.getElementById('reminder-enabled');
    if (enabledInput) enabledInput.checked = enabled;
    this.populateReminderSelects(time);
    const displayTime = this.getReminderTimeFromControls().time;
    this.renderReminderStatus(enabled ? `Нагадування заплановано на ${displayTime}.` : 'Нагадування вимкнено.');
    if (NativeBridge.available()) NativeBridge.send('requestNotificationStatus');
  },

  updateReminderSettings() {
    const enabledInput = document.getElementById('reminder-enabled');
    if (!enabledInput) return;
    const enabled = enabledInput.checked;
    const reminder = this.getReminderTimeFromControls();
    localStorage.setItem('pullup_reminder_enabled', String(enabled));
    localStorage.setItem('pullup_reminder_time', reminder.time);
    if (!NativeBridge.available()) {
      this.renderReminderStatus('Нагадування працює в iPhone/iPad апці.');
      return;
    }
    if (!enabled) {
      NativeBridge.send('cancelReminder');
      this.renderReminderStatus('Нагадування вимкнено.');
      return;
    }
    NativeBridge.send('scheduleReminder', { hour: reminder.hour, minute: reminder.minute });
    this.renderReminderStatus(`Вмикаємо нагадування на ${reminder.time}…`);
  },

  onReminderResult(result) {
    const enabledInput = document.getElementById('reminder-enabled');
    if (!result || !result.status) return;
    if (result.status === 'scheduled') {
      this.renderReminderStatus(`Нагадування заплановано на ${result.time || this.getReminderTimeFromControls().time}.`);
    } else if (result.status === 'cancelled') {
      this.renderReminderStatus('Нагадування вимкнено.');
    } else if (result.status === 'denied') {
      if (enabledInput) enabledInput.checked = false;
      localStorage.setItem('pullup_reminder_enabled', 'false');
      this.renderReminderStatus('Дозвіл не надано. Увімкни сповіщення в iOS.');
    } else if (result.status === 'authorized') {
      this.renderReminderStatus('Сповіщення дозволені.');
    } else if (result.status === 'notDetermined') {
      this.renderReminderStatus('Нагадування вимкнено. Дозвіл буде запитано після ввімкнення.');
    }
  },

  renderReminderStatus(message) {
    const el = document.getElementById('reminder-status');
    if (el) el.textContent = message;
  },

  openResetConfirm() {
    document.getElementById('reset-confirm').style.display = 'flex';
  },

  closeResetConfirm() {
    document.getElementById('reset-confirm').style.display = 'none';
  },

  resetLocalStorage() {
    this.hideRestToast();
    NativeBridge.send('cancelReminder');
    try {
      // Clear all local data for this origin. removeItem is kept as an explicit
      // fallback for browsers with unusual storage wrappers.
      localStorage.removeItem('pullup_hero');
      localStorage.clear();
      sessionStorage.clear();
    } catch (error) {
      console.warn('Could not clear browser storage:', error);
    }

    state = defaultState();
    this.workoutSets = [];
    this.currentTraining = null;
    this.closeResetConfirm();
    document.getElementById('workout-log').style.display = 'none';
    document.getElementById('today-card').style.display = '';
    document.getElementById('btn-train').style.display = '';
    document.getElementById('screen-app').classList.remove('active');
    document.getElementById('screen-intro').classList.add('active');

    // A reload guarantees that no stale in-memory data remains after reset.
    window.location.reload();
  },

  startWorkout() {
    this.hideRestToast();
    if (this.hasCompletedTaskToday()) {
      this.renderToday();
      return;
    }
    const t = this.getCurrentTraining();
    if (!t) return;
    this.currentTraining = t;
    this.workoutSets = t.data.sets.map((s, i) => ({ ...s, index: i, done: false, actual: 0 }));

    document.getElementById('btn-train').style.display = 'none';
    document.getElementById('today-card') && (document.getElementById('today-card').style.display = 'none');
    document.getElementById('workout-log').style.display = 'block';

    this.renderWorkoutLog();
  },

  renderWorkoutLog() {
    const html = this.workoutSets.map((s, i) => `
      <div class="log-set-row" id="set-row-${i}">
        <span class="log-set-label">Підхід ${i + 1}</span>
        ${s.done ? `<span style="flex:1;color:var(--text2);font-size:0.85rem">${s.reps}</span><span class="set-done-mark">✅</span>` :
          `<button class="reps-btn minus" onclick="App.changeReps(${i},-1)">−</button>
           <span class="reps-count" id="reps-${i}">${typeof s.actual === 'number' && s.actual > 0 ? s.actual : '?'}</span>
           <button class="reps-btn plus" onclick="App.changeReps(${i},1)">+</button>
           <button class="btn-set-done" onclick="App.doneSet(${i})">Зробив! ✓</button>`
        }
      </div>
    `).join('');
    document.getElementById('log-sets').innerHTML = html;
  },

  changeReps(i, delta) {
    if (this.workoutSets[i].done) return;
    const cur = this.workoutSets[i].actual || 0;
    this.workoutSets[i].actual = Math.max(0, cur + delta);
    const el = document.getElementById('reps-' + i);
    if (el) el.textContent = this.workoutSets[i].actual || '?';
  },

  doneSet(i) {
    // A child may finish the next set before the timer reaches zero.
    // Always close the previous timer first so toasts never stack.
    this.hideRestToast();
    this.workoutSets[i].done = true;
    NativeBridge.send('setCompleted');
    this.renderWorkoutLog();
    const allDone = this.workoutSets.every(s => s.done);
    if (!allDone) this.showRestToast(this.currentTraining.data.rest || 90);
  },

  hideRestToast() {
    if (this.activeRestInterval) clearInterval(this.activeRestInterval);
    if (this.activeRestTimeout) clearTimeout(this.activeRestTimeout);
    if (this.activeRestToast) this.activeRestToast.remove();
    this.activeRestInterval = null;
    this.activeRestTimeout = null;
    this.activeRestToast = null;
  },

  showRestToast(seconds) {
    this.hideRestToast();
    const toast = document.createElement('div');
    toast.className = 'rest-toast';
    let left = seconds;
    toast.textContent = `⏱ Відпочинок: ${left}с`;
    document.body.appendChild(toast);
    this.activeRestToast = toast;
    this.activeRestInterval = setInterval(() => {
      left--;
      if (left <= 0) { this.hideRestToast(); return; }
      toast.textContent = `⏱ Відпочинок: ${left}с`;
    }, 1000);
    this.activeRestTimeout = setTimeout(() => this.hideRestToast(), (seconds + 1) * 1000);
  },

  openDifficultyCheck() {
    this.hideRestToast();
    if (!this.currentTraining || this.hasCompletedTaskToday()) {
      this.renderToday();
      return;
    }
    const modal = document.getElementById('difficulty-modal');
    if (modal) modal.style.display = 'flex';
  },

  closeDifficultyCheck() {
    const modal = document.getElementById('difficulty-modal');
    if (modal) modal.style.display = 'none';
  },

  finishWorkout(result = 'normal') {
    this.hideRestToast();
    this.closeDifficultyCheck();
    const t = this.currentTraining;
    if (!t || this.hasCompletedTaskToday()) {
      document.getElementById('workout-log').style.display = 'none';
      this.renderToday();
      return;
    }

    normalizeAdaptiveState();
    const levelBefore = state.trainingLevel;
    const resultLabels = {
      easy: '😊 Було легко',
      normal: '🙂 Нормально',
      hard: '😅 Було важко',
      missed: '❌ Не вийшло'
    };
    const isMissed = result === 'missed';
    const isSuccessful = result === 'easy' || result === 'normal' || result === 'hard';
    const xpBase = t.data.xp || 50;
    const xpEarned = result === 'easy' ? xpBase + 10 : result === 'normal' ? xpBase : result === 'hard' ? Math.max(25, xpBase - 10) : 10;

    // Adaptive training logic
    let adaptiveMessage = '';
    if (isSuccessful) {
      state.levelSuccessCount += 1;
      state.consecutiveMisses = 0;
      if (state.levelSuccessCount >= ADAPTIVE_SUCCESS_TO_LEVEL_UP) {
        if (state.trainingLevel < ADAPTIVE_LEVELS.length) {
          state.trainingLevel += 1;
          state.levelSuccessCount = 0;
          adaptiveMessage = `Новий рівень! 💪`;
        } else {
          state.levelSuccessCount = ADAPTIVE_SUCCESS_TO_LEVEL_UP;
          adaptiveMessage = `Фінальний рівень! 🏆`;
        }
      } else {
        adaptiveMessage = `Ще ${ADAPTIVE_SUCCESS_TO_LEVEL_UP - state.levelSuccessCount} місій до рівня.`;
      }
    } else {
      state.consecutiveMisses += 1;
      if (state.consecutiveMisses >= ADAPTIVE_FAILURES_TO_EASE) {
        if (state.trainingLevel > 1) {
          state.trainingLevel -= 1;
          state.levelSuccessCount = 0;
          adaptiveMessage = `Полегшили місію. Спробуй завтра 🌱`;
        } else {
          state.levelSuccessCount = 0;
          adaptiveMessage = `Завтра спробуємо спокійніше 🌱`;
        }
        state.consecutiveMisses = 0;
      } else {
        adaptiveMessage = `Нічого страшного. Спроба записана.`;
      }
    }

    // Update state
    state.totalXp += xpEarned;
    state.totalWorkouts += 1;
    state.lastDifficulty = result;
    const key = `adaptive-${getLocalDateKey()}`;
    if (!state.completedDays.includes(key)) state.completedDays.push(key);

    // Streak only for successful or hard-but-completed attempts; missed does not break history but does not add streak
    const today = new Date().toDateString();
    const last = state.lastWorkoutDate;
    const yesterday = new Date(Date.now() - 86400000).toDateString();
    if (isSuccessful) {
      if (last === yesterday) { state.streak += 1; }
      else if (last === today) { /* same day, no change */ }
      else { state.streak = 1; }
    }
    state.maxStreak = Math.max(state.maxStreak, state.streak);
    state.lastWorkoutDate = today;
    state.lastCompletedTaskDate = getLocalDateKey();

    // History — save actual reps per set
    state.history = state.history || [];
    const d = new Date();
    const setResults = this.workoutSets.map(s => ({
      target: s.reps,
      actual: s.done ? (s.actual || 0) : 0
    }));
    const totalActual = setResults.reduce((sum, s) => sum + (typeof s.actual === 'number' ? s.actual : 0), 0);
    state.history.push({
      date: `${d.getDate().toString().padStart(2,'0')}.${(d.getMonth()+1).toString().padStart(2,'0')}`,
      week: levelBefore,
      day: state.levelSuccessCount,
      title: t.data.title,
      xp: xpEarned,
      sets: setResults,
      totalReps: totalActual,
      difficulty: result,
      difficultyLabel: resultLabels[result] || resultLabels.normal,
      adaptiveMessage
    });

    saveState();
    NativeBridge.send(isMissed ? 'setCompleted' : 'workoutCompleted');

    // Check badges
    const newBadges = this.checkBadges();

    // UI reset
    document.getElementById('workout-log').style.display = 'none';
    document.getElementById('btn-train').style.display = 'block';
    this.renderAll();

    if (newBadges.length > 0) {
      this.showBadgeEarned(newBadges[0]);
    } else {
      this.showCelebration(xpEarned, adaptiveMessage);
    }
  },

  advanceProgram(w, d) {
    // Find next training day
    const week = PROGRAM[w];
    let nextDay = d + 1;
    while (nextDay < week.days.length && week.days[nextDay].type === 'rest') nextDay++;

    if (nextDay < week.days.length) {
      state.currentWeek = w;
      state.currentDay = nextDay;
    } else {
      // Move to next week
      state.weeksCompleted = Math.max(state.weeksCompleted, w + 1);
      const nextWeek = w + 1;
      if (nextWeek < PROGRAM.length) {
        state.currentWeek = nextWeek;
        let nd = 0;
        while (nd < PROGRAM[nextWeek].days.length && PROGRAM[nextWeek].days[nd].type === 'rest') nd++;
        state.currentDay = nd;
      } else {
        state.currentWeek = PROGRAM.length; // done
        state.currentDay = 0;
      }
    }
  },

  checkBadges() {
    const newOnes = [];
    for (const b of BADGES) {
      if (!state.earnedBadges.includes(b.id) && b.check(state)) {
        state.earnedBadges.push(b.id);
        newOnes.push(b);
      }
    }
    saveState();
    return newOnes;
  },

  pendingBadges: [],
  showBadgeEarned(b) {
    document.getElementById('be-icon').textContent = b.emoji;
    document.getElementById('be-name').textContent = b.name;
    document.getElementById('be-desc').textContent = b.desc;
    document.getElementById('badge-earned').style.display = 'flex';
  },

  closeBadge() {
    document.getElementById('badge-earned').style.display = 'none';
    // Show remaining badges
    const remaining = this.checkBadges();
    if (remaining.length > 0) { this.showBadgeEarned(remaining[0]); return; }
    this.showCelebration(state.history[state.history.length - 1]?.xp || 50);
  },

  showCelebration(xp, adaptiveMessage = '') {
    const msgs = [
      { e: '💪', t: `Молодець, ${PLAYER_NAME_VOCATIVE}!`, s: `Зароблено +${xp} XP! Ти крутий!` },
      { e: '🔥', t: `${PLAYER_NAME}, це вогонь!`, s: `+${xp} XP! Ти справжній герой!` },
      { e: '⭐', t: `Суперово, ${PLAYER_NAME_VOCATIVE}!`, s: `+${xp} XP! Продовжуй у тому ж дусі!` },
      { e: '🚀', t: `${PLAYER_NAME} — ракета!`, s: `+${xp} XP! Ти летиш до успіху!` },
    ];
    const m = msgs[Math.floor(Math.random() * msgs.length)];
    document.getElementById('cel-emoji').textContent = m.e;
    document.getElementById('cel-title').textContent = m.t;
    document.getElementById('cel-sub').textContent = adaptiveMessage ? `${m.s} ${adaptiveMessage}` : m.s;
    document.getElementById('celebration').style.display = 'flex';
    this.spawnConfetti();
  },

  closeCelebration() {
    document.getElementById('celebration').style.display = 'none';
    document.getElementById('confetti').innerHTML = '';
  },

  spawnConfetti() {
    const container = document.getElementById('confetti');
    container.innerHTML = '';
    const colors = ['#FFD700','#FF4757','#2ED573','#1E90FF','#FF6B81','#ECCC68','#FF9F43','#00D2D3'];
    for (let i = 0; i < 60; i++) {
      const p = document.createElement('div');
      p.className = 'confetti-piece';
      p.style.left = Math.random() * 100 + 'vw';
      p.style.background = colors[Math.floor(Math.random() * colors.length)];
      p.style.width = (6 + Math.random() * 8) + 'px';
      p.style.height = (6 + Math.random() * 8) + 'px';
      p.style.borderRadius = Math.random() > 0.5 ? '50%' : '2px';
      p.style.animationDuration = (1.5 + Math.random() * 2) + 's';
      p.style.animationDelay = (Math.random() * 0.8) + 's';
      container.appendChild(p);
    }
  }
};

// Expose the API explicitly because the HTML uses inline click handlers.
// This also makes the reset buttons reliable across browsers and static hosting.
window.App = App;

// Auto-start if already started
window.addEventListener('DOMContentLoaded', () => {
  // Add explicit listeners as a fallback for restrictive browser contexts.
  document.getElementById('btn-reset-data')?.addEventListener('click', () => App.openResetConfirm());
  document.getElementById('btn-reset-cancel')?.addEventListener('click', () => App.closeResetConfirm());
  document.getElementById('btn-reset-confirm')?.addEventListener('click', () => App.resetLocalStorage());
  document.getElementById('reminder-enabled')?.addEventListener('change', () => App.updateReminderSettings());
  document.getElementById('reminder-time')?.addEventListener('change', () => App.updateReminderSettings());
  document.getElementById('reminder-hour')?.addEventListener('change', () => App.updateReminderSettings());
  document.getElementById('reminder-minute')?.addEventListener('change', () => App.updateReminderSettings());
  App.initReminderSettings();

  if (state.started) {
    document.getElementById('screen-intro').classList.remove('active');
    document.getElementById('screen-app').classList.add('active');
    App.renderAll();
    App.switchTab('today');
  }
});
