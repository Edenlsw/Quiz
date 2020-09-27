// import questions for quiz 
import { questions } from "./questions.js";


// starts game

const startButton = document.getElementById("start-btn");
const nextButton = document.getElementById("next-btn");
const submitButton= document.getElementById("submit-btn");
const questionContainerElement = document.getElementById("question-container");

const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answer-buttons");

let shuffledQuestions, currentQuestionIndex;


startButton.addEventListener("click", startGame);
nextButton.addEventListener("click", () => {
  currentQuestionIndex++;
  setNextQuestion();
});
submitButton.addEventListener("click", endGame)

function startGame() {
    // hides button when clicked
  startButton.classList.add("hide");
//   random question generator 
  shuffledQuestions = questions.sort(() => Math.random() - 0.5);
  currentQuestionIndex = 0;
//   shows container background 
  questionContainerElement.classList.remove("hide");
  setNextQuestion();
}


// set next questions 

function setNextQuestion() {
  resetState();
  showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
  questionElement.innerHTML = question.question;

  question.answer.forEach((answer) => {
    const button = document.createElement("button");

    button.innerText = answer.text;
    button.classList.add("btn");

    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
    answerButtonsElement.appendChild(button);
  });
}

// hides buttons / clears for next question 
function resetState() {
  clearStatusClass(document.body);
  nextButton.classList.add("hide");
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild);
  }
}


// select answers 
function selectAnswer(e) {
    //  
  const selectedButton = e.target;
  const correct = selectedButton.dataset.correct;
  setStatusClass(document.body, correct);
  Array.from(answerButtonsElement.children).forEach((button) => {
    setStatusClass(button, button.dataset.correct);
  });
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove("hide");
  } else {
    (submitButton.innerText = "Submit"),
      submitButton.classList.remove("hide");
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element);
  if (correct) {
    element.classList.add("correct");
  } else {
    element.classList.add("wrong");
  }
}

function clearStatusClass(element) {
  element.classList.remove("correct");
  element.classList.remove("wrong");
}





// Show Results 

function checkResults() {
   
    if (i=0, questionElement === true, count ++) {
        return alert("You've got "+count+" marks" )
}
}


// end game
function endGame() {
    // hides button when clicked
  submitButton.classList.add("hide");
  questionContainerElement.classList.remove("hide")
  
}