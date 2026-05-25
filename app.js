const cards = [
  { question: "What is the capital of France?", answer: "Paris" },
  { question: "What does HTML stand for?", answer: "HyperText Markup Language" },
  { question: "What is 12 × 8?", answer: "96" },
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
