
function showNextQuestion() {
 // Получить следующий вопрос
 var currentQuestion = document.querySelector(".current");
 var nextQuestion = currentQuestion.nextElementSibling;

 // Показать следующий вопрос
 nextQuestion.classList.add("current");
}

// Добавить обработчик события к кнопке "Отправить ответ"
document.querySelector(".send-answer").addEventListener("click", showNextQuestion);