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
  { name:"1. Австралия", start:"03-08", startTime:"8:00", showFrom:"02-20", showUntil:"03-08" },
  { name:"2. Китай", start:"03-15", startTime:"10:00", showFrom:"03-09", showUntil:"03-15" },
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
// ПИЛОТЫ И ИКОНКИ
// =====================================================
const drivers = [
  "Норрис", "Пиастри", "Расселл", "Антонелли", "Ферстаппен", "Хаджар",
  "Леклер", "Хэмилтон", "Албон", "Сайнс", "Лоусон", "Линдблад",
  "Алонсо", "Стролл", "Берман", "Окон", "Хюлькенберг", "Бортолето",
  "Гасли", "Колапинто", "Боттас", "Перес"
];

const driverIcons = {
  "Норрис": "mclaren.png", "Пиастри": "mclaren.png",
  "Расселл": "mercedes.png", "Антонелли": "mercedes.png",
  "Ферстаппен": "redbull.png", "Хаджар": "redbull.png",
  "Леклер": "ferari.png", "Хэмилтон": "ferari.png",
  "Албон": "williams.png", "Сайнс": "williams.png",
  "Лоусон": "vcarb.png", "Линдблад": "vcarb.png",
  "Алонсо": "aston.png", "Стролл": "aston.png",
  "Берман": "haas.png", "Окон": "haas.png",
  "Хюлькенберг": "audi.png", "Бортолето": "audi.png",
  "Гасли": "alpine.png", "Колапинто": "alpine.png",
  "Боттас": "cadillac.png", "Перес": "cadillac.png"
};

const stageIcons = {
  "1. Австралия": "AUS(1).gif", "2. Китай": "CHN.gif", "3. Япония": "JPN.gif", "4. Бахрейн": "BAH.gif",
  "5. Саудовская Аравия": "Flag_of_Saudi_Arabia-2.gif", "6. Майами": "USA(1).gif", "7. Канада": "CAN.gif", "8. Монако": "MON.gif",
  "9. Барселона": "ESP.gif", "10. Австрия": "ATR.gif", "11. Великобритания": "GBR.gif", "12. Бельгия": "BEL.gif",
  "13. Венгрия": "HUN(1).gif", "14. Нидерланды": "NDL.gif", "15. Италия": "ITA.gif", "16. Испания": "ESP.gif",
  "17. Азербайджан": "AZB(2).gif", "18. Сингапур": "SGP.gif", "19. США": "USA(1).gif", "20. Мексика": "MEX(2).gif",
  "21. Бразилия": "BRA.gif", "22. Лас-Вегас": "USA(1).gif", "23. Катар": "qatar.gif", "24. Абу-Даби": "UAE.gif"
};

// =====================================================
// МОДАЛЬНЫЕ ОКНА
// =====================================================
function showSuccessModal(message) {
  const modal = document.getElementById('successModal');
  const textEl = document.getElementById('successText');
  const okBtn = document.getElementById('successOkBtn');

  if (!modal || !textEl || !okBtn) return;

  textEl.textContent = message;
  modal.classList.add('active');

  const close = () => modal.classList.remove('active');
  okBtn.onclick = close;
  modal.onclick = e => { if (e.target === modal) close(); };
}

function showValidationModal(message) {
  const modal = document.getElementById('validationModal');
  const textEl = document.getElementById('validationText');
  const closeBtn = document.getElementById('validationCloseBtn');

  if (!modal || !textEl || !closeBtn) return;

  textEl.textContent = message;
  modal.classList.add('active');

  const close = () => modal.classList.remove('active');
  closeBtn.onclick = close;
  modal.onclick = e => { if (e.target === modal) close(); };
}

// =====================================================
// ОСНОВНАЯ ЛОГИКА
// =====================================================
document.addEventListener("DOMContentLoaded", () => {

  // Никнейм
  const nicknameSelect = document.getElementById("nicknameSelect");
  if (nicknameSelect) {
    const selected = nicknameSelect.querySelector(".selected");
    const dropdown = nicknameSelect.querySelector(".dropdown");
    const hidden = document.getElementById("nickname");

    selected.addEventListener("click", () => {
      dropdown.classList.toggle("open");
      nicknameSelect.classList.toggle("open");
    });

    dropdown.querySelectorAll(".option").forEach(opt => {
      opt.addEventListener("click", () => {
        hidden.value = opt.dataset.value;
        selected.textContent = opt.textContent;
        dropdown.classList.remove("open");
        nicknameSelect.classList.remove("open");
      });
    });

    document.addEventListener("click", e => {
      if (!nicknameSelect.contains(e.target)) {
        dropdown.classList.remove("open");
        nicknameSelect.classList.remove("open");
      }
    });
  }

  // Этап
  const stageCustom = document.getElementById("stageCustomSelect");
  if (stageCustom) {
    const selected = stageCustom.querySelector(".selected");
    const dropdown = stageCustom.querySelector(".dropdown");

    let stageHidden = document.getElementById("stageHidden");
    if (!stageHidden) {
      stageHidden = document.createElement("input");
      stageHidden.type = "hidden";
      stageHidden.id = "stageHidden";
      stageHidden.name = "stage";
      const form = document.getElementById("predictionForm");
      if (form) form.appendChild(stageHidden);
    }

    calendar.forEach(stage => {
      const iconFile = stageIcons[stage.name] || "name.gif";
      const opt = document.createElement("div");
      opt.className = "option";
      opt.dataset.value = stage.name;
      opt.innerHTML = `
        <img src="images/country/${iconFile}" class="stage-icon" alt="${stage.name}">
        ${stage.name}
      `;
      dropdown.appendChild(opt);

      opt.addEventListener("click", () => {
        selected.innerHTML = `
          <img src="images/country/${iconFile}" class="stage-icon" alt="${stage.name}">
          ${stage.name}
        `;
        stageHidden.value = stage.name;
        dropdown.classList.remove("open");
        stageCustom.classList.remove("open");
      });
    });

    selected.addEventListener("click", () => {
      dropdown.classList.toggle("open");
      stageCustom.classList.toggle("open");
    });

    document.addEventListener("click", e => {
      if (!stageCustom.contains(e.target)) {
        dropdown.classList.remove("open");
        stageCustom.classList.remove("open");
      }
    });
  }

  // Поля квалификации и гонки
  const qualiContainer = document.getElementById("qualifyingContainer");
  const raceContainer = document.getElementById("raceContainer");

  if (qualiContainer) qualiContainer.innerHTML = "";
  if (raceContainer) raceContainer.innerHTML = "";

  if (qualiContainer) {
    for (let i = 1; i <= 5; i++) {
      const div = document.createElement("div");
      div.className = "custom-select driver-select";
      div.innerHTML = `
        <div class="selected" data-default="${i} место">${i} место</div>
        <div class="dropdown"></div>
        <input type="hidden" name="Q${i}">
      `;
      qualiContainer.appendChild(div);
    }
  }

  if (raceContainer) {
    for (let i = 1; i <= 10; i++) {
      const div = document.createElement("div");
      div.className = "custom-select driver-select";
      div.innerHTML = `
        <div class="selected" data-default="${i} место">${i} место</div>
        <div class="dropdown"></div>
        <input type="hidden" name="R${i}">
      `;
      raceContainer.appendChild(div);
    }
  }

  // Заполнение пилотами
  document.querySelectorAll(".driver-select").forEach(select => {
    const selected = select.querySelector(".selected");
    const dropdown = select.querySelector(".dropdown");
    const hidden = select.querySelector('input[type="hidden"]');

    if (!selected || !dropdown || !hidden) return;

    drivers.forEach(driver => {
      const opt = document.createElement("div");
      opt.className = "option";
      opt.dataset.value = driver;
      opt.innerHTML = `
        <img src="images/icons/${driverIcons[driver]}" class="driver-icon" alt="${driver}">
        ${driver}
      `;
      dropdown.appendChild(opt);

      opt.addEventListener("click", e => {
        if (opt.classList.contains("disabled")) return;

        hidden.value = driver;
        selected.innerHTML = `
          <img src="images/icons/${driverIcons[driver]}" class="driver-icon" alt="${driver}">
          ${driver}
        `;
        dropdown.classList.remove("open");
        select.classList.remove("open");
        updateDriverAvailability();
      });
    });

    selected.addEventListener("click", e => {
      e.stopPropagation();
      document.querySelectorAll(".driver-select.open").forEach(s => {
        if (s !== select) s.classList.remove("open");
      });
      select.classList.toggle("open");
    });
  });

  document.addEventListener("click", e => {
    if (!e.target.closest(".driver-select")) {
      document.querySelectorAll(".driver-select.open").forEach(s => s.classList.remove("open"));
    }
  });

  function updateDriverAvailability() {
    const qualiInputs = document.querySelectorAll('input[name^="Q"]');
    const selectedQuali = Array.from(qualiInputs).map(inp => inp.value).filter(v => v);

    qualiInputs.forEach(inp => {
      const wrapper = inp.closest(".driver-select");
      wrapper.querySelectorAll(".option").forEach(opt => {
        const val = opt.dataset.value;
        opt.classList.toggle("disabled", selectedQuali.includes(val) && inp.value !== val);
      });
    });

    const raceInputs = document.querySelectorAll('input[name^="R"]');
    const selectedRace = Array.from(raceInputs).map(inp => inp.value).filter(v => v);

    raceInputs.forEach(inp => {
      const wrapper = inp.closest(".driver-select");
      wrapper.querySelectorAll(".option").forEach(opt => {
        const val = opt.dataset.value;
        opt.classList.toggle("disabled", selectedRace.includes(val) && inp.value !== val);
      });
    });
  }

  function resetCustomSelects() {
    document.querySelectorAll(".driver-select").forEach(select => {
      const hidden = select.querySelector("input[type=hidden]");
      const selected = select.querySelector(".selected");
      if (hidden) hidden.value = "";
      if (selected) {
        selected.innerHTML = "";
        selected.textContent = selected.dataset.default || "Выберите пилота";
      }
    });
    updateDriverAvailability();
  }

  // =====================================================
  // ОТПРАВКА ФОРМЫ — БЕРЁМ РАБОЧИЙ КОД ИЗ СТАРОЙ ВЕРСИИ
  // =====================================================
  const predictionForm = document.getElementById("predictionForm");
  if (predictionForm) {
    predictionForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const isAdminPage = document.body.classList.contains("admin-page");
      const nickname = document.getElementById("nickname")?.value || "";
      const stage = document.getElementById("stageHidden")?.value || "";

      if (!isAdminPage) {
        if (!nickname || !stage) {
          showValidationModal("Пожалуйста, заполните все поля перед отправкой.");
          return;
        }

        for (let i = 1; i <= 5; i++) {
          if (!document.querySelector(`input[name="Q${i}"]`)?.value) {
            showValidationModal("Заполните все позиции квалификации и гонки.");
            return;
          }
        }
        for (let i = 1; i <= 10; i++) {
          if (!document.querySelector(`input[name="R${i}"]`)?.value) {
            showValidationModal("Заполните все позиции квалификации и гонки.");
            return;
          }
        }
      }

      // === РАБОЧИЙ МЕХАНИЗМ ОТПРАВКИ ИЗ СТАРОЙ ВЕРСИИ ===
      const formData = new FormData();
      formData.append("nickname", isAdminPage ? "admin" : nickname);
      formData.append("stage", stage);

      for (let i = 1; i <= 5; i++) {
        const val = document.querySelector(`input[name="Q${i}"]`)?.value;
        if (val) formData.append(`квала_${i}`, val);
      }
      for (let i = 1; i <= 10; i++) {
        const val = document.querySelector(`input[name="R${i}"]`)?.value;
        if (val) formData.append(`гонка_${i}`, val);
      }

      const tempForm = document.createElement("form");
      tempForm.method = "POST";
      tempForm.action = "https://script.google.com/macros/s/AKfycbyDTfQoKDjg-bVoi99ASDJA1DSqKIpdlGmW1ecyldbjDIpfZPZRFMdoQkkkCdQlePwU/exec";
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

      // Успех
      showSuccessModal(isAdminPage ? "Результаты этапа сохранены" : "Прогноз успешно отправлен");
      resetCustomSelects();
    });
  }

  // Admin кнопка
  const adminBtn = document.getElementById("adminBtn");
  if (adminBtn) {
    adminBtn.addEventListener("click", () => {
      const pass = prompt("Введите пароль:");
      if (pass === "4223") {
        sessionStorage.setItem("adminAuth", "true");
        window.location.href = "admin.html";
      } else {
        alert("Неверный пароль");
      }
    });
  }

  // Таймер
 if (document.getElementById("countdownTimer")) {
    updateCountdown();
    setInterval(updateCountdown, 1000);
  }
});

function updateCountdown() {
  const now = getMoscowDate();
  const raceDurationMs = 2 * 60 * 60 * 1000;
  const yearsToCheck = [now.getFullYear() - 1, now.getFullYear(), now.getFullYear() + 1];
  const stageCandidates = [];

  calendar.forEach(stage => {
    const [startMonth, startDay] = stage.start.split('-').map(Number);
    const [startHour, startMinute] = stage.startTime.split(':').map(Number);

    yearsToCheck.forEach(year => {
      stageCandidates.push({
        stage,
        start: new Date(year, startMonth - 1, startDay, startHour, startMinute, 0)
      });
    });
  });

  const activeRace = stageCandidates
    .filter(item => now >= item.start && now < new Date(item.start.getTime() + raceDurationMs))
    .sort((a, b) => b.start - a.start)[0];

  const upcomingStage = stageCandidates
    .filter(item => item.start > now)
    .sort((a, b) => a.start - b.start)[0];

  if (!activeRace && !upcomingStage) {
    document.getElementById("countdownTitle").textContent = "Сезон завершён";
    setZero();
    return;
  }

  const stageForHeader = activeRace ? activeRace : upcomingStage;
  const stageStart = stageForHeader.start;
  const stageData = stageForHeader.stage;
  const isRaceRunning = Boolean(activeRace);

  // Форматируем даты в ДД.ММ.ГГ
  const formatDate = (date) => {
    const dd = String(date.getDate()).padStart(2, '0');
    const mm = String(date.getMonth() + 1).padStart(2, '0');
    const yy = String(date.getFullYear()).slice(-2);
    return `${dd}.${mm}.${yy}`;
  };

  const endDateFormatted = formatDate(stageStart);
  const startDate = new Date(stageStart);
  startDate.setDate(startDate.getDate() - 2);
  const startDateFormatted = formatDate(startDate);

  const firstStageName = calendar[0]?.name || "";
  const interseasonUntil = new Date(stageStart.getFullYear(), 1, 28, 23, 59, 59);
  const isInterseason = !isRaceRunning && stageData.name === firstStageName && now < interseasonUntil;
  const titleText = isInterseason
    ? "Межсезонье"
    : `Следующий этап: ${stageData.name}`;
  const statusText = isRaceRunning
    ? "Идет заезд"
    : `Старт — ${stageData.startTime} (мск)`;

  // Выводим в нужном формате
  document.getElementById("countdownTitle").innerHTML =
    `${titleText}<br>` +
    `${startDateFormatted} — ${endDateFormatted}<br>` +
    `<span>${statusText}</span>`;

  if (isRaceRunning) {
    setZero();
    return;
  }

  // Остаток времени
  let diff = (upcomingStage.start - now) / 1000;
  const days = Math.floor(diff / (3600 * 24));
  diff %= 3600 * 24;
  const hours = Math.floor(diff / 3600);
  diff %= 3600;
  const minutes = Math.floor(diff / 60);
  const seconds = Math.floor(diff % 60);

  document.getElementById("days").textContent = days.toString().padStart(2, '0');
  document.getElementById("hours").textContent = hours.toString().padStart(2, '0');
  document.getElementById("minutes").textContent = minutes.toString().padStart(2, '0');
  document.getElementById("seconds").textContent = seconds.toString().padStart(2, '0');
}

// Функция обнуления (если нужно)
function setZero() {
  document.getElementById("days").textContent = "00";
  document.getElementById("hours").textContent = "00";
  document.getElementById("minutes").textContent = "00";
  document.getElementById("seconds").textContent = "00";
}
