let currentLevel = 1;
let correctAnswers = 0;
let wrongAnswers = 0;
let questionsOnLevel = 0;
let currentQuestion = null;
let usedQuestions = [];
let timerInterval = null;
let timeLeft = 300;

const levelNames = {
    1: 'Начальный',
    2: 'Средний',
    3: 'Продвинутый'
};

function startTimer() {
    if (timerInterval) {
        clearInterval(timerInterval);
    }
    
    timeLeft = 300;
    updateTimerDisplay();
    
    timerInterval = setInterval(function() {
        timeLeft--;
        updateTimerDisplay();
        
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            showResult('Время вышло! Вы не успели завершить уровень.');
        }
    }, 1000);
}

function updateTimerDisplay() {
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;
    let display = minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
    document.getElementById('timer').textContent = display;
}

function generateQuestion() {
    let question, answer;
    let questionText;
    
    do {
        if (currentLevel === 1) {
            let num1 = Math.floor(Math.random() * 20) + 1;
            let num2 = Math.floor(Math.random() * 20) + 1;
            let operators = ['+', '-', '*'];
            let operator = operators[Math.floor(Math.random() * operators.length)];
            
            questionText = num1 + ' ' + operator + ' ' + num2;
            answer = eval(questionText);
        } else if (currentLevel === 2) {
            let num1 = Math.floor(Math.random() * 20) + 1;
            let num2 = Math.floor(Math.random() * 20) + 1;
            let operators = ['>', '<', '=='];
            let operator = operators[Math.floor(Math.random() * operators.length)];
            
            questionText = num1 + ' ' + operator + ' ' + num2;
            answer = eval(questionText) ? 'true' : 'false';
        } else {
            let types = ['logical', 'binary'];
            let type = types[Math.floor(Math.random() * types.length)];
            
            if (type === 'logical') {
                let bool1 = Math.random() > 0.5;
                let bool2 = Math.random() > 0.5;
                let operators = ['&&', '||'];
                let operator = operators[Math.floor(Math.random() * operators.length)];
                
                questionText = bool1 + ' ' + operator + ' ' + bool2;
                answer = eval(questionText) ? 'true' : 'false';
            } else {
                let num = Math.floor(Math.random() * 16);
                questionText = 'Двоичное представление числа ' + num;
                answer = num.toString(2);
            }
        }
    } while (usedQuestions.includes(questionText));
    
    usedQuestions.push(questionText);
    currentQuestion = { text: questionText, answer: String(answer) };
    
    document.getElementById('question').textContent = questionText;
    document.getElementById('answer').value = '';
    document.getElementById('feedback').textContent = '';
    document.getElementById('answer').focus();
}

function checkAnswer() {
    let userAnswer = document.getElementById('answer').value.trim();
    
    if (userAnswer === '') {
        alert('Пожалуйста, введите ответ');
        return;
    }
    
    if (userAnswer === currentQuestion.answer) {
        correctAnswers++;
        document.getElementById('feedback').textContent = 'Правильно!';
        document.getElementById('feedback').style.color = '#4CAF50';
    } else {
        wrongAnswers++;
        document.getElementById('feedback').textContent = 'Неправильно! Правильный ответ: ' + currentQuestion.answer;
        document.getElementById('feedback').style.color = '#f44336';
    }
    
    questionsOnLevel++;
    updateDisplay();
    
    if (questionsOnLevel >= 10) {
        clearInterval(timerInterval);
        checkLevelProgress();
    } else {
        setTimeout(generateQuestion, 1500);
    }
}

function updateDisplay() {
    document.getElementById('correct').textContent = correctAnswers;
    document.getElementById('wrong').textContent = wrongAnswers;
    document.getElementById('remaining').textContent = 10 - questionsOnLevel;
    document.getElementById('level').textContent = levelNames[currentLevel];
}

function checkLevelProgress() {
    let percentage = (correctAnswers / (correctAnswers + wrongAnswers)) * 100;
    
    if (currentLevel < 3 && percentage >= 80) {
        setTimeout(() => {
            alert('Поздравляем! Вы переходите на следующий уровень!');
            currentLevel++;
            questionsOnLevel = 0;
            correctAnswers = 0;
            wrongAnswers = 0;
            usedQuestions = [];
            updateDisplay();
            startTimer();
            generateQuestion();
        }, 1500);
    } else if (currentLevel === 3 && percentage >= 80) {
        setTimeout(() => {
            showResult('Поздравляем! Вы успешно завершили все уровни игры!');
        }, 1500);
    } else {
        setTimeout(() => {
            showResult('К сожалению, вы не смогли перейти на следующий уровень. Попробуйте еще раз!');
        }, 1500);
    }
}

function showResult(message) {
    clearInterval(timerInterval);
    document.getElementById('question-container').style.display = 'none';
    document.getElementById('feedback').style.display = 'none';
    document.getElementById('result-container').style.display = 'block';
    document.getElementById('result-message').textContent = message;
}

function restartGame() {
    currentLevel = 1;
    correctAnswers = 0;
    wrongAnswers = 0;
    questionsOnLevel = 0;
    usedQuestions = [];
    
    document.getElementById('question-container').style.display = 'block';
    document.getElementById('feedback').style.display = 'block';
    document.getElementById('result-container').style.display = 'none';
    
    updateDisplay();
    startTimer();
    generateQuestion();
}

function exitGame() {
    if (confirm('Вы уверены, что хотите выйти из игры?')) {
        clearInterval(timerInterval);
        window.close();
    }
}

document.getElementById('answer').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        checkAnswer();
    }
});

window.onload = function() {
    updateDisplay();
    startTimer();
    generateQuestion();
};