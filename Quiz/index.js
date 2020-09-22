const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById
('question-container')

const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')


let shuffledQuestions, currentQuestionIndex


startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})



function startGame(){
    
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerHTML = question.question
    question.answer.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    });
}


function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}


function selectAnswer(e) {
    const selectedButton = e.target
    const correct= selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length >currentQuestionIndex + 1){
        nextButton.classList.remove('hide')
    }else{
        startButton.innerText = 'Start Over',
        startButton.classList.remove('hide')
    }
    
}

function setStatusClass(element, correct)  {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
}
}


function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}




// the questiosn below with answers 
 const questions = [
    {
        question: 'Who sings Tootsie Slide?',
        answer: [
            {
                text: 'Lil Wayne', correct: false
            }, 
            {
                text: 'Future', correct: false
            },
            {
                text: 'Migos', correct: false
            },
            {
                text: 'Drake', correct: true
            },

        ]
    },

    {
        question: 'who is the Queen Bee',
        answer: [
            {
                text: 'Lil Kim', correct: false
            }, 
            {
                text: 'Beyonce', correct: true
            },
            {
                text: 'Rihana', correct: false
            },
            {
                text: 'Ariana Grande', correct: false
            },

        ]
    },

]