// 1. Questions Array
let questions = [
    { q: "What is 2 + 2?", options: ["3", "4", "5", "6"], answer: "4" },
    { q: "What color is the sky?", options: ["Red", "Green", "Blue", "Yellow"], answer: "Blue" },
    { q: "Capital of Japan?", options: ["Seoul", "Beijing", "Tokyo", "Bangkok"], answer: "Tokyo" }
];

let currentQuestionIndex = 0;
let score = 0;
let timeLeft = 10;
let timerInterval;

// 2. shuffleQuestions()
function shuffleQuestions() {
    questions.sort(() => Math.random() - 0.5);
}

// 3. startTimer()
function startTimer() {
    timeLeft = 10;
    document.getElementById("time-left").innerText = timeLeft;
    
    // Clear any existing timer first
    clearInterval(timerInterval);
    
    timerInterval = setInterval(function() {
        timeLeft--;
        document.getElementById("time-left").innerText = timeLeft;
        
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            checkAnswer(""); // Time is up, send empty answer
        }
    }, 1000);
}

// 4. displayQuestion()
function displayQuestion() {
    let questionObj = questions[currentQuestionIndex];
    document.getElementById("question-text").innerText = questionObj.q;
    
    let optionsDiv = document.getElementById("options-container");
    optionsDiv.innerHTML = ""; // Clear old options

    // Create buttons for options
    questionObj.options.forEach(function(opt) {
        let btn = document.createElement("button");
        btn.innerText = opt;
        btn.className = "option-btn";
        btn.onclick = function() { checkAnswer(opt); };
        optionsDiv.appendChild(btn);
    });

    // Reset UI for new question
    document.getElementById("feedback").innerText = "";
    document.getElementById("next-btn").style.display = "none";
    
    startTimer();
}

// 5. checkAnswer()
function checkAnswer(userAnswer) {
    clearInterval(timerInterval); // Stop timer
    
    let correctAnswer = questions[currentQuestionIndex].answer;
    let feedback = document.getElementById("feedback");

    if (userAnswer === correctAnswer) {
        score++;
        feedback.innerText = "Correct!";
        feedback.style.color = "green";
    } else {
        feedback.innerText = "Wrong! Answer was: " + correctAnswer;
        feedback.style.color = "red";
    }

    document.getElementById("score").innerText = score;
    document.getElementById("next-btn").style.display = "inline-block";
}

// 6. nextQuestion()
function nextQuestion() {
    currentQuestionIndex++;
    
    if (currentQuestionIndex < questions.length) {
        displayQuestion();
    } else {
        // End of quiz
        document.querySelector(".container").innerHTML = "<h2>Quiz Over!</h2><p>Final Score: " + score + "</p>";
    }
}

// 7. startQuiz()
function startQuiz() {
    shuffleQuestions();
    displayQuestion();
}

// Start the quiz when the page loads
window.onload = startQuiz;