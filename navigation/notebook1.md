---
layout: base
title: JavaScript Shell
---

# JavaScript Shell

**Welcome to the JavaScript Shell!** Here's a Liverpool-themed trivia game to test your knowledge!

<!-- Liverpool FC Trivia Game Section -->
<h2 style="color: #a0001b;">Liverpool FC Trivia Game</h2>
<div id="trivia-container" style="color: #a0001b; font-family: 'Georgia, serif'; margin-bottom: 20px;">
  <p>Test your knowledge with our Liverpool FC trivia game:</p>
  
  <div id="question-container" style="margin-bottom: 20px;">
    <p id="question" style="font-weight: bold;"></p>
    <div id="options" style="margin-top: 10px;"></div>
  </div>
  
  <button onclick="nextQuestion()" style="background-color: #a0001b; color: white; padding: 10px; border: none; cursor: pointer;">Next Question</button>
  
  <p id="feedback" style="font-weight: bold; margin-top: 15px;"></p>
</div>

<script>
  const questions = [
    {
      question: "What year did Liverpool FC win their first European Cup?",
      options: ["1977", "1981", "2005", "2019"],
      answer: "1977"
    },
    {
      question: "Who is Liverpool FC's all-time leading goal scorer?",
      options: ["Steven Gerrard", "Kenny Dalglish", "Ian Rush", "Mohamed Salah"],
      answer: "Ian Rush"
    },
    {
      question: "Which stadium is the home of Liverpool FC?",
      options: ["Old Trafford", "Anfield", "Stamford Bridge", "Emirates Stadium"],
      answer: "Anfield"
    },
    {
      question: "How many times has Liverpool FC won the Premier League?",
      options: ["1", "2", "3", "19"],
      answer: "1"
    },
    {
      question: "Who was Liverpool FC's manager during their 2005 Champions League victory?",
      options: ["Jürgen Klopp", "Rafael Benítez", "Brendan Rodgers", "Gerard Houllier"],
      answer: "Rafael Benítez"
    }
  ];

  let currentQuestionIndex = 0;

  function loadQuestion() {
    const questionData = questions[currentQuestionIndex];
    document.getElementById('question').innerText = questionData.question;
    const optionsContainer = document.getElementById('options');
    optionsContainer.innerHTML = '';
    
    questionData.options.forEach(option => {
      const button = document.createElement('button');
      button.innerText = option;
      button.style.backgroundColor = '#a0001b';
      button.style.color = 'white';
      button.style.border = 'none';
      button.style.padding = '10px';
      button.style.marginRight = '5px';
      button.style.cursor = 'pointer';
      button.onclick = () => checkAnswer(option);
      optionsContainer.appendChild(button);
    });
  }

  function checkAnswer(selectedOption) {
    const correctAnswer = questions[currentQuestionIndex].answer;
    if (selectedOption === correctAnswer) {
      document.getElementById('feedback').innerText = 'Correct!';
    } else {
      document.getElementById('feedback').innerText = 'Wrong! The correct answer is ' + correctAnswer + '.';
    }
    document.querySelectorAll('#options button').forEach(button => {
      button.disabled = true;
    });
  }

  function nextQuestion() {
    currentQuestionIndex = (currentQuestionIndex + 1) % questions.length;
    loadQuestion();
    document.getElementById('feedback').innerText = '';
  }

  // Load the first question when the page loads
  window.onload = loadQuestion;
</script>
