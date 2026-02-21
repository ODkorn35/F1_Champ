// =====================================================
// МОСКОВСКОЕ ВРЕМЯ (UTC+3)
// =====================================================

function getMoscowDate() {
  const now = new Date();
  const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
  return new Date(utc + (3 * 60 * 60 * 1000));
}

// =====================================================
// КАЛЕНДАРЬ 2026
// =====================================================

const calendar = [
{ name:"1. Австралия", start:"03-08", startTime:"15:00", showFrom:"02-20", showUntil:"03-08" },
{ name:"2. Китай", start:"03-15", startTime:"15:00", showFrom:"03-09", showUntil:"03-15" },
{ name:"3. Япония", start:"03-29", startTime:"14:00", showFrom:"03-16", showUntil:"03-29" },
{ name:"4. Бахрейн", start:"04-12", startTime:"18:00", showFrom:"03-30", showUntil:"04-12" },
{ name:"5. Саудовская Аравия", start:"04-19", startTime:"20:00", showFrom:"04-13", showUntil:"04-19" },
{ name:"6. Майами", start:"05-03", startTime:"16:00", showFrom:"04-20", showUntil:"05-03" },
{ name:"7. Канада", start:"05-24", startTime:"16:00", showFrom:"05-04", showUntil:"05-24" },
{ name:"8. Монако", start:"06-07", startTime:"15:00", showFrom:"05-25", showUntil:"06-07" },
{ name:"9. Барселона", start:"06-14", startTime:"15:00", showFrom:"06-08", showUntil:"06-14" },
{ name:"10. Австрия", start:"06-28", startTime:"15:00", showFrom:"06-15", showUntil:"06-28" },
{ name:"11. Великобритания", start:"07-05", startTime:"15:00", showFrom:"06-29", showUntil:"07-05" },
{ name:"12. Бельгия", start:"07-19", startTime:"15:00", showFrom:"07-06", showUntil:"07-19" },
{ name:"13. Венгрия", start:"07-26", startTime:"15:00", showFrom:"07-20", showUntil:"07-26" },
{ name:"14. Нидерланды", start:"08-23", startTime:"15:00", showFrom:"07-27", showUntil:"08-23" },
{ name:"15. Италия", start:"09-06", startTime:"15:00", showFrom:"08-24", showUntil:"09-06" },
{ name:"16. Испания", start:"09-13", startTime:"15:00", showFrom:"09-07", showUntil:"09-13" },
{ name:"17. Азербайджан", start:"09-26", startTime:"15:00", showFrom:"09-14", showUntil:"09-26" },
{ name:"18. Сингапур", start:"10-11", startTime:"20:00", showFrom:"09-27", showUntil:"10-11" },
{ name:"19. США", start:"10-25", startTime:"15:00", showFrom:"10-12", showUntil:"10-25" },
{ name:"20. Мексика", start:"11-01", startTime:"14:00", showFrom:"10-26", showUntil:"11-01" },
{ name:"21. Бразилия", start:"11-08", startTime:"14:00", showFrom:"11-02", showUntil:"11-08" },
{ name:"22. Лас-Вегас", start:"11-21", startTime:"20:00", showFrom:"11-09", showUntil:"11-21" },
{ name:"23. Катар", start:"11-29", startTime:"19:00", showFrom:"11-23", showUntil:"11-29" },
{ name:"24. Абу-Даби", start:"12-06", startTime:"17:00", showFrom:"11-30", showUntil:"12-06" }
];

// =====================================================
// ПИЛОТЫ (РУССКИЙ)
// =====================================================

const drivers = [
"Норрис",
"Пиастри",
"Расселл",
"Антонелли",
"Ферстаппен",
"Хаджар",
"Леклер",
"Хэмилтон",
"Албон",
"Сайнс",
"Лоусон",
"Линдблад",
"Алонсо",
"Стролл",
"Берман",
"Окон",
"Хюлькенберг",
"Бортолето",
"Гасли",
"Колапинто",
"Боттас",
"Перес"
];

// иконки

const driverIcons = {
  "Норрис": "mclaren.png",
  "Пиастри": "mclaren.png",
  "Расселл": "mercedes.png",
  "Антонелли": "mercedes.png",
  "Ферстаппен": "redbull.png",
  "Хаджар": "redbull.png",
  "Леклер": "ferari.png",
  "Хэмилтон": "ferari.png",
  "Албон": "williams.png",
  "Сайнс": "williams.png",
  "Лоусон": "vcarb.png",
  "Линдблад": "vcarb.png",
  "Алонсо": "aston.png",
  "Стролл": "aston.png",
  "Берман": "haas.png",
  "Окон": "haas.png",
  "Хюлькенберг": "audi.png",
  "Бортолето": "audi.png",
  "Гасли": "alpine.png",
  "Колапинто": "alpine.png",
  "Боттас": "cadillac.png",
  "Перес": "cadillac.png"
};



// =====================================================
// ЗАПОЛНЕНИЕ ЭТАПОВ
// =====================================================

document.addEventListener("DOMContentLoaded", () => {

  // ===============================
// Кастомный select этапа
// ===============================

const stageCustom = document.getElementById("stageCustomSelect");

if (stageCustom) {

  const selected = stageCustom.querySelector(".selected");
  const dropdown = stageCustom.querySelector(".dropdown");

  // создаём скрытое поле для отправки формы
  let hiddenStageInput = document.getElementById("stageHidden");

  if (!hiddenStageInput) {
    hiddenStageInput = document.createElement("input");
    hiddenStageInput.type = "hidden";
    hiddenStageInput.name = "stage";
    hiddenStageInput.id = "stageHidden";
    document.getElementById("predictionForm").appendChild(hiddenStageInput);
  }

  // заполняем этапы
  calendar.forEach(stage => {

    const option = document.createElement("div");
    option.classList.add("option");
    option.dataset.value = stage.name;
    option.textContent = stage.name;

    dropdown.appendChild(option);

    option.addEventListener("click", () => {
      selected.textContent = stage.name;
      hiddenStageInput.value = stage.name;

      dropdown.classList.remove("open");
      stageCustom.classList.remove("open");
      updateDriverAvailability();
    });
  });

  // открытие
  selected.addEventListener("click", () => {
    dropdown.classList.toggle("open");
    stageCustom.classList.toggle("open");
  });

  // закрытие вне клика
  document.addEventListener("click", (e) => {
    if (!stageCustom.contains(e.target)) {
      dropdown.classList.remove("open");
      stageCustom.classList.remove("open");
    }
  });
}

});


// ===============================
// ИНФОБЛОК
// ===============================

function updateInfoBlock() {

  const now = getMoscowDate();
  const todayStr = `${String(now.getMonth()+1).padStart(2,'0')}-${String(now.getDate()).padStart(2,'0')}`;

  const current = calendar.find(stage =>
    todayStr >= stage.showFrom && todayStr <= stage.showUntil
  );

  const infoBlock = document.getElementById("infoBlock");
  if (!infoBlock) return;

  if (current) {

    const [month, day] = current.start.split("-");
    const formattedDate = `${day}.${month}.2026`;

    infoBlock.textContent = `Ближайший этап: ${current.name} (${formattedDate})`;

  } else {
    infoBlock.textContent = "Межсезонье";
  }
}
updateInfoBlock();

// ===============================
// ТАЙМЕР
// ===============================

function buildRaceDateTime(stage) {
  return new Date(`2026-${stage.start}T${stage.startTime}:00+03:00`);
}

function getNextRace() {
  const now = getMoscowDate();
  return calendar.find(stage => now < buildRaceDateTime(stage));
}

function updateCountdown() {

  const title = document.getElementById("countdownTitle");
  if (!title) return;

  const nextRace = getNextRace();

  if (!nextRace) {
    title.textContent = "Сезон завершен";
    setZero();
    return;
  }

  title.textContent = `До старта ${nextRace.name}`;

  const diff = buildRaceDateTime(nextRace) - getMoscowDate();

  const days = Math.floor(diff / (1000*60*60*24));
  const hours = Math.floor((diff/(1000*60*60))%24);
  const minutes = Math.floor((diff/(1000*60))%60);
  const seconds = Math.floor((diff/1000)%60);

  const d = document.getElementById("days");
  const h = document.getElementById("hours");
  const m = document.getElementById("minutes");
  const s = document.getElementById("seconds");

  if (d) d.textContent = days;
  if (h) h.textContent = hours;
  if (m) m.textContent = minutes;
  if (s) s.textContent = seconds;
}


function setZero(){
  const d = document.getElementById("days");
  const h = document.getElementById("hours");
  const m = document.getElementById("minutes");
  const s = document.getElementById("seconds");

  if (d) d.textContent = 0;
  if (h) h.textContent = 0;
  if (m) m.textContent = 0;
  if (s) s.textContent = 0;
}

setInterval(updateCountdown, 1000);
updateCountdown();


// =====================================================
// ГЕНЕРАЦИЯ SELECT
// =====================================================

function createSelect(name, index) {

  const wrapper = document.createElement("div");
  wrapper.classList.add("custom-select", "driver-select");

  const selected = document.createElement("div");
  selected.classList.add("selected");
  selected.textContent = `${index} место`;
  selected.dataset.default = `${index} место`;

  const dropdown = document.createElement("div");
  dropdown.classList.add("dropdown");

  const hiddenInput = document.createElement("input");
  hiddenInput.type = "hidden";
  hiddenInput.name = name + index;

  drivers.forEach(driver => {

    const option = document.createElement("div");
    option.classList.add("option");
    option.dataset.value = driver;   // ВАЖНО!

    const img = document.createElement("img");
    img.src = `images/icons/${driverIcons[driver]}`;
    img.classList.add("driver-icon");

    const span = document.createElement("span");
    span.textContent = driver;

    option.appendChild(img);
    option.appendChild(span);

    option.addEventListener("click", () => {

      selected.innerHTML = "";
      selected.appendChild(img.cloneNode());
      selected.append(" " + driver);

      hiddenInput.value = driver;

      dropdown.classList.remove("open");
      wrapper.classList.remove("open");

      updateDriverAvailability();   // ВАЖНО!
    });

    dropdown.appendChild(option);
  });

  selected.addEventListener("click", () => {
    dropdown.classList.toggle("open");
    wrapper.classList.toggle("open");
  });

  document.addEventListener("click", (e) => {
    if (!wrapper.contains(e.target)) {
      dropdown.classList.remove("open");
      wrapper.classList.remove("open");
    }
  });

  wrapper.appendChild(selected);
  wrapper.appendChild(dropdown);
  wrapper.appendChild(hiddenInput);

  return wrapper;
}

function generatePredictionFields() {

  const quali = document.getElementById("qualifyingContainer");
  const race = document.getElementById("raceContainer");

  if (!quali || !race) return;

  // Заголовок квалификации
  const qualiTitle = document.createElement("h3");
  qualiTitle.textContent = "Квалификация";
  qualiTitle.style.marginTop = "20px";
  quali.appendChild(qualiTitle);

  // 5 мест квалификации
  for(let i=1; i<=5; i++){
    quali.appendChild(createSelect("Q", i));
  }

  // Заголовок гонки
  const raceTitle = document.createElement("h3");
  raceTitle.textContent = "Гонка";
  raceTitle.style.marginTop = "25px";
  race.appendChild(raceTitle);

  // 10 мест гонки
  for(let i=1; i<=10; i++){
    race.appendChild(createSelect("R", i));
  }

}


// ===============================
// URL GOOGLE SCRIPT
// ===============================
const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyDTfQoKDjg-bVoi99ASDJA1DSqKIpdlGmW1ecyldbjDIpfZPZRFMdoQkkkCdQlePwU/exec";

// ===============================
// TOAST
// ===============================
function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 3000);
}

// ===============================
// ОТПРАВКА ФОРМЫ
// ===============================
document.addEventListener("DOMContentLoaded", () => {

  generatePredictionFields();
  

  const form = document.getElementById("predictionForm");
  if (!form) return;

  form.addEventListener("submit", function (e) {

    e.preventDefault();

    const isAdminPage = document.body.classList.contains("admin-page");

    // Если админ — принудительно устанавливаем nickname
    if (isAdminPage) {
      const nickField = document.getElementById("nickname");
      if (nickField) nickField.value = "admin";
    }

    const nickname = document.getElementById("nickname")?.value || "";
    const stage = document.getElementById("stageHidden")?.value || "";

    // Проверка только для обычных пользователей
    if (!isAdminPage) {
      if (!nickname || !stage) {
        showToast("Заполните все обязательные поля");
        return;
      }
    }

    const formData = new FormData();
    formData.append("nickname", nickname);
    formData.append("stage", stage);

    // Квалификация
    for (let i = 1; i <= 5; i++) {
  const input = document.querySelector(`input[name="Q${i}"]`);
  if (input && input.value) {
    formData.append(`квала_${i}`, input.value);
  }
}

    // Гонка
    for (let i = 1; i <= 10; i++) {
  const input = document.querySelector(`input[name="R${i}"]`);
  if (input && input.value) {
    formData.append(`гонка_${i}`, input.value);
  }
}

    const tempForm = document.createElement("form");
    tempForm.method = "POST";
    tempForm.action = SCRIPT_URL;
    tempForm.target = "hidden_iframe";

    for (let pair of formData.entries()) {
      const input = document.createElement("input");
      input.type = "hidden";
      input.name = pair[0];
      input.value = pair[1];
      tempForm.appendChild(input);
    }

    document.body.appendChild(tempForm);
    tempForm.submit();
    document.body.removeChild(tempForm);

    showToast("Прогноз успешно отправлен");

// =====================
// Очистка кастомных селектов
// =====================

function resetCustomSelects() {

  document.querySelectorAll(".driver-select").forEach(select => {

    const hiddenInput = select.querySelector("input[type='hidden']");
    const selected = select.querySelector(".selected");

    if (hiddenInput) hiddenInput.value = "";

    if (selected) {
      selected.innerHTML = "";
      selected.textContent = selected.dataset.default;
    }

  });

  updateDriverAvailability();
}

resetCustomSelects();

  });

});

// ===============================
// ADMIN ДОСТУП
// ===============================
const ADMIN_PASSWORD = "4223";

document.addEventListener("DOMContentLoaded", () => {

  const adminBtn = document.getElementById("adminBtn");

  if (adminBtn) {
    adminBtn.addEventListener("click", () => {

      const password = prompt("Введите пароль:");

      if (password === ADMIN_PASSWORD) {
        sessionStorage.setItem("adminAuth", "true");
        window.location.href = "admin.html";
      } else {
        alert("Неверный пароль");
      }

    });
  }

});

// ===============================
// Кастомный select никнейма 
// ===============================

const nicknameSelect = document.getElementById("nicknameSelect");

if (nicknameSelect) {

  const selected = nicknameSelect.querySelector(".selected");
  const dropdown = nicknameSelect.querySelector(".dropdown");
  const options = nicknameSelect.querySelectorAll(".option");
  const hiddenInput = document.getElementById("nickname");

  selected.addEventListener("click", () => {
    dropdown.classList.toggle("open");
    nicknameSelect.classList.toggle("open");
  });

  options.forEach(option => {
    option.addEventListener("click", () => {

      const value = option.dataset.value;
      const text = option.textContent;

      selected.textContent = text;
      hiddenInput.value = value;

      dropdown.classList.remove("open");
      nicknameSelect.classList.remove("open");
    });
  });

  // закрытие при клике вне селекта
  document.addEventListener("click", (e) => {
    if (!nicknameSelect.contains(e.target)) {
      dropdown.classList.remove("open");
      nicknameSelect.classList.remove("open");
    }
  });
}

// ==========================================
// Блокировка повторного выбора пилотов
// ==========================================

function updateDriverAvailability() {

  // ====== КВАЛИФИКАЦИЯ ======
  const qualiSelects = document.querySelectorAll(".driver-select input[name^='Q']");

  const selectedQuali = [];

  qualiSelects.forEach(input => {
    if (input.value) selectedQuali.push(input.value);
  });

  qualiSelects.forEach(input => {

    const wrapper = input.closest(".driver-select");

    wrapper.querySelectorAll(".option").forEach(option => {

      const value = option.dataset.value;

      if (selectedQuali.includes(value) && input.value !== value) {
        option.classList.add("disabled");
      } else {
        option.classList.remove("disabled");
      }

    });

  });


  // ====== ГОНКА ======
  const raceSelects = document.querySelectorAll(".driver-select input[name^='R']");

  const selectedRace = [];

  raceSelects.forEach(input => {
    if (input.value) selectedRace.push(input.value);
  });

  raceSelects.forEach(input => {

    const wrapper = input.closest(".driver-select");

    wrapper.querySelectorAll(".option").forEach(option => {

      const value = option.dataset.value;

      if (selectedRace.includes(value) && input.value !== value) {
        option.classList.add("disabled");
      } else {
        option.classList.remove("disabled");
      }

    });

  });

}

