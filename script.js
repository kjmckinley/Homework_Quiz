
// const variables that recieve all the id information from the question.
const startBtn = document.getElementById('start-btn')
const nextBtn = document.getElementById('next-btn')
const questionContainerEl = document.getElementById ('question-container')

const questionEl = document.getElementById ('question')
const answerBtnEl = document.getElementById('select-buttons')

//let variables initially set to undefined to be used to jumble the questions
//so that they don't appear in the same order every time.
let randomQuestion, index 

// event listener that calls the startGame function when clicked.
startBtn.addEventListener('click', startGame)

//event listener that calls the nextQuestion function to allow nex 
//button to function and go to the thext index of the array of questions
nextBtn.addEventListener('click', () => {
    index++
    nextQuestion()
})

// function that reveals a question and options after start has been pressed.
function startGame() {
    startBtn.classList.add('hide')

    randomQuestion = questions.sort(() => Math.random() - .5)
    index = 0

    questionContainerEl.classList.remove('hide')
    // function allocates info for the next question
    nextQuestion()
}

function setStatus(element, correct) {

    statusWipe(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('incorrect')
    }
}

function statusWipe(element) {
    element.classList.remove('correct')
    element.classList.remove('incorrect')
}

function makeSelection(i) {
    const btnSelection = i.target
    const correct = btnSelection.dataset.correct

    //???
    setStatus(document.body, correct)
    Array.from(answerButtonsElement.children).forEach (button => {
        setStatus(button, button.dataset.correct)
    })

    //make sure the program stops when we run out of questions
    if (randomQuestion.length > index + 1) {
        nextBtn.classList.remove('hide')
    } else {
        startBtn.innerText = 'Resart'
        startBtn.classList.remove('hide')
    }
    //reveal next button as soon as question is answered
    nextBtn.classList.remove('hide')
}

function refreshQuestion(){
    statusWipe(document.body)
    //hide next button again
    nextBtn.classList.add('hide')
    //while loop to replace child elements
    while (answerBtnEl.firstChild) {
        answerBtnEl.removeChild(answerBtnEl.firstChild)
    }
}

function nextQuestion() {
    //function call to set everything back to default state
    refreshQuestion()
    revealQuestion(randomQuestion[index])
}

function revealQuestion(question) {
    //populates question
    questionEl.innerText = question.question
    //populates coresponding possible answers through a loop.
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.content
        button.classList.add('btn')
        //operation to verify if the answer is right or wrong
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }

        //calls makeSelection to append new answers when clicked.
        button.addEventListener('click', makeSelection)
        answerBtnEl.appendChild(button)
    })
}

//array of actual questions
const questions = [
    {
        question: 'How many tentacles does Ursula the Sea Witch have?',
        //array of answers within question
        answers: [
            {content: '6', correct: true},
            {content: '8', correct: false},
            {content: '10', correct: false},
            {content: '4', correct: false}
        ]
    }
]