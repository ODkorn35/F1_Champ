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
{ name:"1. Австралия", start:"03-08", startTime:"15:00", showFrom:"03-02", showUntil:"03-08" },
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
"Ферстаппен",
"Перес",
"Хэмилтон",
"Расселл",
"Леклер",
"Сайнс",
"Норрис",
"Пиастри",
"Алонсо",
"Стролл",
"Гасли",
"Окон",
"Албон",
"Цунода",
"Боттас",
"Чжоу",
"Хюлькенберг",
"Магнуссен",
"Риккардо",
"Сарджент"
];

// =====================================================
// ЗАПОЛНЕНИЕ ЭТАПОВ
// =====================================================

const stageSelect = document.getElementById("stageSelect");
calendar.forEach(stage => {
  const option = document.createElement("option");
  option.value = stage.name;
  option.textContent = stage.name;
  stageSelect.appendChild(option);
});

// =====================================================
// ГЕНЕРАЦИЯ SELECT
// =====================================================

function createSelect(name, index) {

  const wrapper = document.createElement("div");
  wrapper.style.marginBottom = "8px";

  const select = document.createElement("select");
  select.name = name + index;
  select.required = true;
  select.style.width = "100%";

  const defaultOption = document.createElement("option");
  defaultOption.value = "";
  defaultOption.textContent = `${index} место`;
  defaultOption.disabled = true;
  defaultOption.selected = true;
  select.appendChild(defaultOption);

  drivers.forEach(driver => {
    const option = document.createElement("option");
    option.value = driver;
    option.textContent = driver;
    select.appendChild(option);
  });

  wrapper.appendChild(select);
  return wrapper;
}

function generatePredictionFields() {
  const quali = document.getElementById("qualifyingContainer");
  const race = document.getElementById("raceContainer");

  for(let i=1; i<=5; i++){
    quali.appendChild(createSelect("Q", i));
  }
  for(let i=1; i<=10; i++){
    race.appendChild(createSelect("R", i));
  }
}

generatePredictionFields();

// =====================================================
// БЛОКИРОВКА ДУБЛЕЙ
// =====================================================

function addDuplicateBlocking(containerId) {

  const container = document.getElementById(containerId);
  const selects = container.querySelectorAll("select");

  selects.forEach(select => {

    select.addEventListener("change", () => {

      const selectedValues = Array.from(selects)
        .map(s => s.value)
        .filter(v => v !== "");

      selects.forEach(s => {

        const currentValue = s.value;

        Array.from(s.options).forEach(option => {

          if(option.value === "") return;

          if(
            selectedValues.includes(option.value) &&
            option.value !== currentValue
          ){
            option.disabled = true;
          } else {
            option.disabled = false;
          }

        });

      });

    });

  });
}

addDuplicateBlocking("qualifyingContainer");
addDuplicateBlocking("raceContainer");

// =====================================================
// ОТПРАВКА В GOOGLE SHEETS
// =====================================================

const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyDTfQoKDjg-bVoi99ASDJA1DSqKIpdlGmW1ecyldbjDIpfZPZRFMdoQkkkCdQlePwU/exec";

document.getElementById("predictionForm")
.addEventListener("submit", async function(e){

  e.preventDefault();

  const nickname = document.getElementById("nickname")
    .value.trim().toLowerCase();

  const stage = document.getElementById("stageSelect").value;

  const qualiSelections = [];
  const raceSelections = [];

  for(let i=1; i<=5; i++){
    qualiSelections.push(document.querySelector(`select[name="Q${i}"]`).value);
  }

  for(let i=1; i<=10; i++){
    raceSelections.push(document.querySelector(`select[name="R${i}"]`).value);
  }

  const payload = {
    nickname,
    stage,
    qualifying: qualiSelections,
    race: raceSelections
  };

  try {

    const response = await fetch(SCRIPT_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });

    const result = await response.json();

    if(result.status === "success"){
      alert("Прогноз успешно отправлен");
      document.getElementById("predictionForm").reset();
    }
    else if(result.message === "ALREADY_SENT"){
      alert("Вы уже отправляли прогноз на этот этап");
    }
    else{
      alert("Ошибка: " + result.message);
    }

  } catch(error){
    console.error(error);
    alert("Ошибка соединения");
  }

});




