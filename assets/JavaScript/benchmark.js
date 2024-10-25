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
/*selezione elementi per cambiare domanda*/
const form = document.querySelector("form");
const h1 = document.querySelector("h1");
const buttons = document.querySelectorAll("button"); /*è un array*/
const footer = document.querySelector("footer");
const footerIndex = document.querySelector("footer p");

// formazione array per registrare risposte
const answers = {
  corrects: [],
  wrongs: [],
};

//funzione per registrare le risposte

/* funzione al caricamento pagine*/
window.onload = function () {
  h1.innerText = questionToInsert[0];
  buttons[0].innerText = questions[0].correct_answer;
  buttons[1].innerText = questions[0].incorrect_answers[0];
  buttons[2].innerText = questions[0].incorrect_answers[1];
  buttons[3].innerText = questions[0].incorrect_answers[2];
  footerIndex.innerText = `QUESTION ${counter + 1}/10`;
};

/*creazione nuovi elementi da inserire nella pagina*/
const linkToFeedback = document.createElement("a");

linkToFeedback.href = "results.html";
linkToFeedback.innerText = "RESULTS";
linkToFeedback.className = "linkTo";

/* togliere il reset dei bottoni*/
form.onsubmit = function (event) {
  event.preventDefault();
};
/*creazione di un array di stringhe contenenti le domande*/
const questionToInsert = questions.map((domande) => domande.question);

/*cambio domanda effettivo*/
console.log(buttons);
let counter = 0;
for (let i = 0; i < buttons.length; i++) {
  let button = buttons[i];
  console.log();

  button.onclick = function (e) {
    counter += 1;

    if (counter > 0 && counter <= 9) {
      h1.innerText = questionToInsert[counter];
      buttons[0].innerText = questions[counter].correct_answer;
      buttons[1].innerText = questions[counter].incorrect_answers[0];
      buttons[2].innerText = questions[counter].incorrect_answers[1];
      buttons[3].innerText = questions[counter].incorrect_answers[2];
      footerIndex.innerText = `QUESTION ${counter + 1}/10`;
    } else if (counter === 10) {
      footer.appendChild(linkToFeedback);
    }
    if (buttons[0].textContent.includes("False")) {
      console.log("skvnwoiin");
      buttons[2].classList.add("button_off");
      buttons[3].classList.add("button_off");
    } else {
      buttons[2].classList.remove("button_off");
      buttons[3].classList.remove("button_off");
    }
    const countingAnswer = function (array) {
      while (counter <= 9) {
        if (e.target.textContent === array[counter].correct_answer) {
          answers.corrects.push(e.target.textContent);
        } else {
          answers.wrongs.push(e.target.textContent);
        }
        return answers;
      }
    };

    countingAnswer(questions);
  };
}
