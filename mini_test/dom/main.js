const quizes = [
  {
    id: 1,
    question: "1 + 1 = ?",
    answers: [1, 2, 3, 4],
  },
  {
    id: 2,
    question: "2 + 2 = ?",
    answers: [2, 3, 4, 5],
  },
  {
    id: 3,
    question: "3 + 3 = ?",
    answers: [3, 4, 5, 6],
  },
];

const quizContainer = document.querySelector('.quiz-container')
const btn = document.querySelector('button')

function renderQuiz(quizes) {
  quizes.forEach(e => {
    const quizItem = document.createElement('div')
    quizItem.classList.add('quiz-item')

    const quizTitle = document.createElement('h3')
    quizTitle.textContent = `Câu ${e.id} : ${e.question}`
    quizItem.appendChild(quizTitle)

    const quizAnswer = document.createElement('div')
    quizAnswer.classList.add('quiz-answer')

    for (let i = 0; i < e.answers.length; i++) {
      quizAnswer.innerHTML+= `<div class="quiz-answer-item">
                                <input type="radio" name="${e.id}">
                                <label>${e.answers[i]}</label>
                              </div>`
    }
    quizItem.appendChild(quizAnswer)
    quizContainer.appendChild(quizItem)
  });
}
renderQuiz(quizes)

btn.addEventListener('click', function(){
  for (let i = 1; i <= quizes.length; i++) {
    let inputEl = document.querySelectorAll(`input[name="${i}"]`)
    let rd = Math.floor(Math.random() * inputEl.length)
    inputEl[rd].checked = true;
  }
})
