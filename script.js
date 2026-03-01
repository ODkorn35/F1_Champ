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
  { name: "1. Австралия", start: "03-08", startTime: "15:00", showFrom: "02-20", showUntil: "03-08" },
  { name: "2. Китай", start: "03-15", startTime: "15:00", showFrom: "03-09", showUntil: "03-15" },
  { name: "3. Япония", start: "03-29", startTime: "14:00", showFrom: "03-16", showUntil: "03-29" },
  { name: "4. Бахрейн", start: "04-12", startTime: "18:00", showFrom: "03-30", showUntil: "04-12" },
  { name: "5. Саудовская Аравия", start: "04-19", startTime: "20:00", showFrom: "04-13", showUntil: "04-19" },
  { name: "6. Майами", start: "05-03", startTime: "16:00", showFrom: "04-20", showUntil: "05-03" },
  { name: "7. Канада", start: "05-24", startTime: "16:00", showFrom: "05-04", showUntil: "05-24" },
  { name: "8. Монако", start: "06-07", startTime: "15:00", showFrom: "05-25", showUntil: "06-07" },
  { name: "9. Барселона", start: "06-14", startTime: "15:00", showFrom: "06-08", showUntil: "06-14" },
  { name: "10. Австрия", start: "06-28", startTime: "15:00", showFrom: "06-15", showUntil: "06-28" },
  { name: "11. Великобритания", start: "07-05", startTime: "15:00", showFrom: "06-29", showUntil: "07-05" },
  { name: "12. Бельгия", start: "07-19", startTime: "15:00", showFrom: "07-06", showUntil: "07-19" },
  { name: "13. Венгрия", start: "07-26", startTime: "15:00", showFrom: "07-20", showUntil: "07-26" },
  { name: "14. Нидерланды", start: "08-23", startTime: "15:00", showFrom: "07-27", showUntil: "08-23" },
  { name: "15. Италия", start: "09-06", startTime: "15:00", showFrom: "08-24", showUntil: "09-06" },
  { name: "16. Испания", start: "09-13", startTime: "15:00", showFrom: "09-07", showUntil: "09-13" },
  { name: "17. Азербайджан", start: "09-26", startTime: "15:00", showFrom: "09-14", showUntil: "09-26" },
  { name: "18. Сингапур", start: "10-11", startTime: "20:00", showFrom: "09-27", showUntil: "10-11" },
  { name: "19. США", start: "10-25", startTime: "15:00", showFrom: "10-12", showUntil: "10-25" },
  { name: "20. Мексика", start: "11-01", startTime: "14:00", showFrom: "10-26", showUntil: "11-01" },
  { name: "21. Бразилия", start: "11-08", startTime: "14:00", showFrom: "11-02", showUntil: "11-08" },
  { name: "22. Лас-Вегас", start: "11-21", startTime: "20:00", showFrom: "11-09", showUntil: "11-21" },
  { name: "23. Катар", start: "11-29", startTime: "19:00", showFrom: "11-23", showUntil: "11-29" },
  { name: "24. Абу-Даби", start: "12-06", startTime: "17:00", showFrom: "11-30", showUntil: "12-06" }
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
// ОСНОВНАЯ ЛОГИКА (DOMContentLoaded)
// =====================================================
document.addEventListener("DOMContentLoaded", () => {

  // 1. Никнейм
  const nicknameSelect = document.getElementById("nicknameSelect");
  if (nicknameSelect) {
    const selected = nicknameSelect.querySelector(".selected");
    const dropdown = nicknameSelect.querySelector(".dropdown");
    const hidden   = document.getElementById("nickname");

    if (selected && dropdown && hidden) {
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
  }

  // 2. Выбор этапа
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

    if (selected && dropdown) {
      calendar.forEach(stage => {
        const opt = document.createElement("div");
        opt.className = "option";
        opt.dataset.value = stage.name;
        opt.textContent = stage.name;
        dropdown.appendChild(opt);

        opt.addEventListener("click", () => {
          selected.textContent = stage.name;
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
  }

  // 3. Поля квалификации и гонки
  const qualiContainer = document.getElementById("qualifyingContainer");
  const raceContainer  = document.getElementById("raceContainer");

  // Очищаем на всякий случай
  if (qualiContainer) qualiContainer.innerHTML = "";
  if (raceContainer)  raceContainer.innerHTML = "";

  // Создаём поля квалификации
  if (qualiContainer) {
    for (let i = 1; i <= 5; i++) {
      const div = document.createElement("div");
      div.className = "custom-select driver-select";
      div.innerHTML = `
        <div class="selected" data-default="${i} место">Выберите пилота</div>
        <div class="dropdown"></div>
        <input type="hidden" name="Q${i}">
      `;
      qualiContainer.appendChild(div);
    }
  }

  // Создаём поля гонки
  if (raceContainer) {
    for (let i = 1; i <= 10; i++) {
      const div = document.createElement("div");
      div.className = "custom-select driver-select";
      div.innerHTML = `
        <div class="selected" data-default="${i} место">Выберите пилота</div>
        <div class="dropdown"></div>
        <input type="hidden" name="R${i}">
      `;
      raceContainer.appendChild(div);
    }
  }

  // 4. Заполняем все селекты пилотами и вешаем обработчики
  document.querySelectorAll(".driver-select").forEach(select => {
    const selected = select.querySelector(".selected");
    const dropdown = select.querySelector(".dropdown");
    const hidden   = select.querySelector('input[type="hidden"]');

    if (!selected || !dropdown || !hidden) return;

    // Заполняем опциями
    drivers.forEach(driver => {
      const opt = document.createElement("div");
      opt.className = "option";
      opt.dataset.value = driver;
      opt.innerHTML = `
  <img src="images/${driverIcons[driver] || 'placeholder.png'}" class="driver-icon" alt="${driver}">
  ${driver}
`;
      dropdown.appendChild(opt);

      opt.addEventListener("click", e => {
        e.stopPropagation();
        hidden.value = driver;
        selected.innerHTML = `
  <img src="images/${driverIcons[driver] || 'placeholder.png'}" class="driver-icon" alt="${driver}">
  ${driver}
`;
        dropdown.classList.remove("open");
        select.classList.remove("open");
        updateDriverAvailability();
      });
    });

    // Открытие/закрытие
    selected.addEventListener("click", e => {
      e.stopPropagation();
      const isOpen = select.classList.contains("open");

      // Закрываем все остальные
      document.querySelectorAll(".driver-select.open").forEach(s => {
        if (s !== select) s.classList.remove("open");
      });

      select.classList.toggle("open");
    });
  });

  // Закрытие по клику вне
  document.addEventListener("click", e => {
    if (!e.target.closest(".driver-select")) {
      document.querySelectorAll(".driver-select.open").forEach(s => s.classList.remove("open"));
    }
  });

  // 5. Функции блокировки дублей и очистки
  function updateDriverAvailability() {
    const qualiInputs = document.querySelectorAll('input[name^="Q"]');
    const selectedQuali = Array.from(qualiInputs).map(inp => inp.value).filter(v => v);

    qualiInputs.forEach(inp => {
      const wrapper = inp.closest(".driver-select");
      if (wrapper) {
        wrapper.querySelectorAll(".option").forEach(opt => {
          const val = opt.dataset.value;
          opt.classList.toggle("disabled", selectedQuali.includes(val) && inp.value !== val);
        });
      }
    });

    const raceInputs = document.querySelectorAll('input[name^="R"]');
    const selectedRace = Array.from(raceInputs).map(inp => inp.value).filter(v => v);

    raceInputs.forEach(inp => {
      const wrapper = inp.closest(".driver-select");
      if (wrapper) {
        wrapper.querySelectorAll(".option").forEach(opt => {
          const val = opt.dataset.value;
          opt.classList.toggle("disabled", selectedRace.includes(val) && inp.value !== val);
        });
      }
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

  // 6. Отправка формы
  const predictionForm = document.getElementById("predictionForm");
  if (predictionForm) {
    predictionForm.addEventListener("submit", e => {
      e.preventDefault();

      const nickname = document.getElementById("nickname")?.value?.trim();
      const stage    = document.getElementById("stageHidden")?.value?.trim();

      if (!document.body.classList.contains("admin-page")) {
        if (!nickname || !stage) {
          showValidationModal("Выберите никнейм и этап");
          return;
        }

        let qualiFilled = true;
        for (let i = 1; i <= 5; i++) {
          if (!document.querySelector(`input[name="Q${i}"]`)?.value) {
            qualiFilled = false;
            break;
          }
        }

        let raceFilled = true;
        for (let i = 1; i <= 10; i++) {
          if (!document.querySelector(`input[name="R${i}"]`)?.value) {
            raceFilled = false;
            break;
          }
        }

        if (!qualiFilled || !raceFilled) {
          showValidationModal("Заполните все позиции квалификации и гонки");
          return;
        }
      }

      const formData = new FormData(predictionForm);

      const tempForm = document.createElement("form");
      tempForm.method = "POST";
      tempForm.action = "https://script.google.com/macros/s/AKfycbyDTfQoKDjg-bVoi99ASDJA1DSqKIpdlGmW1ecyldbjDIpfZPZRFMdoQkkkCdQlePwU/exec";
      tempForm.target = "hidden_iframe";

      for (let [name, value] of formData) {
        if (value) {
          const input = document.createElement("input");
          input.type = "hidden";
          input.name = name;
          input.value = value;
          tempForm.appendChild(input);
        }
      }

      document.body.appendChild(tempForm);
      tempForm.submit();
      document.body.removeChild(tempForm);

      const isAdmin = document.body.classList.contains("admin-page");
      showSuccessModal(isAdmin ? "Результаты этапа сохранены" : "Прогноз успешно отправлен");

      resetCustomSelects();
    });
  }

  // 7. Кнопка Admin
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

  // 8. Таймер (если есть функции)
  if (typeof updateCountdown === "function") {
    updateCountdown();
    setInterval(updateCountdown, 1000);
  }
});