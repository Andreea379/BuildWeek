// Seleziona tutte le stelle
const stars = document.querySelectorAll(".star-value");
const comment = document.getElementById("comment");
const starError = document.getElementById("star-error");
const commentError = document.getElementById("comment-error");
const submitButton = document.getElementById("submit-btn");

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
let currentRating = -1; //salvato

function fillStars(index) {
  stars.forEach((star, i) => {
    if (i <= index) {
      star.classList.add("filled");
    } else {
      star.classList.remove("filled");
    }
    starError.style.display = "none";
  });
}

function resetStars() {
  fillStars(currentRating);
}

function setRating(index) {
  currentRating = index;
  fillStars(index);
}

submitButton.addEventListener("click", (event) => {
  let isValid = true;
  starError.style.display = "none";
  commentError.style.display = "none";

  // Verifica se una stella è stata selezionata
  if (currentRating === -1) {
    starError.style.display = "block";
    isValid = false;
  }

  // Verifica se il commento è stato inserito
  if (comment.value.trim() === "") {
    commentError.style.display = "block";
    commentError.textContent = "Please let us know what you think of us!";
    isValid = false;
  } else if (comment.value.length < 20) {
    commentError.style.display = "Block";
    commentError.textContent = "The comment must be between 20 and 100 characters!";
    isValid = false;
  } else if (comment.value.length > 100) {
    commentError.style.display = "Block";
    commentError.textContent = "The comment must be between 20 and 100 characters!";
    isValid = false;
  }

  // Se uno dei campi non è valido, impedisce l'invio del form
  if (!isValid) {
    // Il -!- davanti ad un isValid che si aspetta sempre un valore booleano lo fa diventare FALSO in questo caso (noi abbiamo già un let isValid = true)
    event.preventDefault(); // Blocca l'invio del form se non valido
  } else {
    alert("Thank you for telling us how you feel about us! Your feedback was sent successfully");
  }
});
