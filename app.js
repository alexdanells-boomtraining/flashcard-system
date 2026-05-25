const cards = [
  {
    question: "What is the name of Kratos's son in God of War (2018)?",
    answer: "Atreus — also revealed to be Loki in Norse mythology."
  },
  {
    question: "Which fungal infection turns humans into infected creatures in The Last of Us?",
    answer: "Cordyceps — a real genus of parasitic fungi adapted to infect humans in the game's world."
  },
  {
    question: "What is the name of the open-world game starring a hunter named Aloy in a world reclaimed by robotic creatures?",
    answer: "Horizon Zero Dawn (2017), developed by Guerrilla Games."
  },
  {
    question: "What is the real name of the Spider-Man in Insomniac's Marvel's Spider-Man (PS4)?",
    answer: "Peter Parker — a 23-year-old who has been Spider-Man for 8 years."
  },
  {
    question: "In Bloodborne, what city is the game primarily set in?",
    answer: "Yharnam — a gothic city plagued by a blood-borne illness that turns citizens into beasts."
  },
  {
    question: "Which PlayStation exclusive follows treasure hunter Nathan Drake across multiple games?",
    answer: "Uncharted series, developed by Naughty Dog."
  },
  {
    question: "What year did The Last of Us Part II release, and who is the playable protagonist?",
    answer: "2020 — players primarily control Ellie, with sections as a new character named Abby."
  },
  {
    question: "In Ghost of Tsushima, who is the main protagonist and what is his nickname?",
    answer: "Jin Sakai — a samurai warrior who becomes 'The Ghost' to fight the Mongol invasion."
  },
];

let currentIndex = 0;

const flashcard     = document.getElementById("flashcard");
const cardQuestion  = document.getElementById("card-question");
const cardAnswer    = document.getElementById("card-answer");
const cardCounter   = document.getElementById("card-counter");
const btnPrev       = document.getElementById("btn-prev");
const btnNext       = document.getElementById("btn-next");
const btnNewCard    = document.getElementById("btn-new-card");
const modalOverlay  = document.getElementById("modal-overlay");
const btnCancel     = document.getElementById("btn-cancel");
const btnSave       = document.getElementById("btn-save");
const inputQuestion = document.getElementById("input-question");
const inputAnswer   = document.getElementById("input-answer");

function showCard(index) {
  flashcard.classList.remove("flipped");
  const card = cards[index];
  cardQuestion.textContent = card.question;
  cardAnswer.textContent   = card.answer;
  cardCounter.textContent  = `${index + 1} / ${cards.length}`;
  btnPrev.disabled = index === 0;
  btnNext.disabled = index === cards.length - 1;
}

flashcard.addEventListener("click", () => {
  flashcard.classList.toggle("flipped");
});

btnPrev.addEventListener("click", () => {
  if (currentIndex > 0) showCard(--currentIndex);
});

btnNext.addEventListener("click", () => {
  if (currentIndex < cards.length - 1) showCard(++currentIndex);
});

btnNewCard.addEventListener("click", () => {
  inputQuestion.value = "";
  inputAnswer.value   = "";
  modalOverlay.classList.remove("hidden");
  inputQuestion.focus();
});

btnCancel.addEventListener("click", () => {
  modalOverlay.classList.add("hidden");
});

modalOverlay.addEventListener("click", (e) => {
  if (e.target === modalOverlay) modalOverlay.classList.add("hidden");
});

btnSave.addEventListener("click", () => {
  const question = inputQuestion.value.trim();
  const answer   = inputAnswer.value.trim();
  if (!question || !answer) return;

  cards.push({ question, answer });
  currentIndex = cards.length - 1;
  showCard(currentIndex);
  modalOverlay.classList.add("hidden");
});

showCard(currentIndex);
