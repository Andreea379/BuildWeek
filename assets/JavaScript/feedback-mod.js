// Seleziona tutte le stelle
const stars = document.querySelectorAll(".star-value");

// Aggiungi interattività alle stelle
stars.forEach((star, index) => {
  // Quando si passa sopra una stella, riempi fino a quella stella
  star.addEventListener("mouseover", () => fillStars(index));

  // Quando si esce, riempi solo fino alla valutazione selezionata
  star.addEventListener("mouseout", resetStars);

  // Quando si clicca su una stella, salva la valutazione
  star.addEventListener("click", () => setRating(index));
});

// Per memorizzare la valutazione corrente
let currentRating = -1;

function fillStars(index) {
  stars.forEach((star, i) => {
    if (i <= index) {
      star.classList.add("filled");
    } else {
      star.classList.remove("filled");
    }
  });
}

function resetStars() {
  fillStars(currentRating);
}

function setRating(index) {
  currentRating = index;
  fillStars(index);
}
