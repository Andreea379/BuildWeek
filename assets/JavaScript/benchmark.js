let countDownValue = 60;

let countDownActive = setInterval(function () {
  if (countDownValue <= 0) {
    clearInterval(countDownActive);
    document.getElementById("sec").innerHTML = "0";
  } else {
    document.getElementById("sec").innerHTML = countDownValue;
  }
  countDownValue = countDownValue - 1;
}, 1000);

const questions = [
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What does CPU stand for?",
    correct_answer: "Central Processing Unit",
    incorrect_answers: ["Central Process Unit", "Computer Personal Unit", "Central Processor Unit"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn&#039;t get modified?",
    correct_answer: "Final",
    incorrect_answers: ["Static", "Private", "Public"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "The logo for Snapchat is a Bell.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "Pointers were not used in the original C programming language; they were added later on in C++.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What is the most preferred image format used for logos in the Wikimedia database?",
    correct_answer: ".svg",
    incorrect_answers: [".png", ".jpeg", ".gif"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "In web design, what does CSS stand for?",
    correct_answer: "Cascading Style Sheet",
    incorrect_answers: ["Counter Strike: Source", "Corrective Style Sheet", "Computer Style Sheet"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What is the code name for the mobile operating system Android 7.0?",
    correct_answer: "Nougat",
    incorrect_answers: ["Ice Cream Sandwich", "Jelly Bean", "Marshmallow"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "On Twitter, what is the character limit for a Tweet?",
    correct_answer: "140",
    incorrect_answers: ["120", "160", "100"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "Linux was first created as an alternative to Windows XP.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "Which programming language shares its name with an island in Indonesia?",
    correct_answer: "Java",
    incorrect_answers: ["Python", "C", "Jakarta"],
  },
];

window.onload = function () {
  h1.innerText = questionToInsert[0];
  buttons[0].innerText = questions[0].correct_answer;
  buttons[1].innerText = questions[0].incorrect_answers[0];
  buttons[2].innerText = questions[0].incorrect_answers[1];
  buttons[3].innerText = questions[0].incorrect_answers[2];
};
/*selezione elementi per cambiare domanda*/
const form = document.querySelector("form");
const h1 = document.querySelector("h1");
const buttons = document.querySelectorAll("button"); /*è un array*/
const footer = document.querySelector("footer");

/*creazione nuovi elementi da inserire nella pagina*/
const linkToFeedback = document.createElement("a");
linkToFeedback.href = "results.html";
linkToFeedback.innerText = "RESULTS";
linkToFeedback.style.color = "white";

/* togliere il reset dei bottoni*/
form.onsubmit = function (event) {
  event.preventDefault();
};
/*creazione di un array di stringhe contenenti le domande*/
const questionToInsert = questions.map((domande) => domande.question);
console.log(questionToInsert);

/*cambio domanda effettivo*/

let counter = 0;
for (let i = 0; i < buttons.length; i++) {
  let button = buttons[i];
  button.onclick = function (e) {
    counter += 1;
    if (counter > 0 && counter <= 9) {
      h1.innerText = questionToInsert[counter];
      buttons[0].innerText = questions[counter].correct_answer;
      buttons[1].innerText = questions[counter].incorrect_answers[0];
      buttons[2].innerText = questions[counter].incorrect_answers[1];
      buttons[3].innerText = questions[counter].incorrect_answers[2];

      if (buttons[i].textContent.includes("False")) {
        buttons[2].classList = "button_off";
        buttons[3].classList = "button_off";
      } else {
        buttons[2].classList = "button_on";
        buttons[3].classList = "button_on";
      }
      console.log(counter);
    } else if ((counter = 9)) {
      footer.appendChild(linkToFeedback);
    }
  };
}
