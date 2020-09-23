
const startBtn = document.getElementById('start-btn')
const questionContainer = document.getElementById ('question-container')

startBtn.addEventListener('click', startGame)

function startGame() {
    startBtn.classList.add('hide')
    questionContainer.classList.remove('hide')
    nextQuestion()
}

function makeSelection() {

}

function nextQuestion() {

}