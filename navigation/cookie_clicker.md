---
layout: page
title: Cool Game
search_exclude: true
permalink: /cookie clicker/
---

<html lang="en">
<head>
   <meta charset="UTF-8">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <link href="https://fonts.googleapis.com/css2?family=Cookie&display=swap" rel="stylesheet">
   <style>
       body {
           display: flex;
           flex-direction: column;
           align-items: center;
           justify-content: center;
           background-color: #f1e7d6;
           font-family: georgia, sans-serif;
           height: 100vh;
           margin: 0;
           padding-top: 400px; /* Increased padding for more space for the navigation bar */
       }
       h1 {
           font-family: 'Cookie', cursive;
           color: #FFFFFF;
           font-size: 3rem;
           margin: 0;
       }
       #gameContainer {
           position: relative;
           text-align: center;
           margin-top: 50px; /* Reduced margin for better spacing */
       }
       #cookie {
           width: 190px; /* Adjust the size of the cookie */
           height: 190px;
           cursor: pointer;
           transition: transform 0.1s ease;
       }

       #cookie:active {
           transform: scale(0.9);
       }

       #score {
           margin-top: 20px;
           font-size: 24px;
           color: #333;
       }

       #upgrades {
           margin-top: 30px;
           display: flex;
           flex-wrap: wrap;
           justify-content: center;
           gap: 20px;
       }

       .upgrade {
           background-color: #B19580;
           padding: 10px;
           border: none;
           border-radius: 8px;
           cursor: pointer;
           color: #fff;
           font-size: 16px;
           width: 200px;
       }

       .hidden {
           display: none;
       }

       #youWin {
           font-size: 32px;
           color: #E74C3C;
           margin-top: 50px;
           display: none;
       }

       #playAgain {
           background-color: #2ecc71;
           color: white;
           padding: 10px 20px;
           border: none;
           border-radius: 8px;
           font-size: 16px;
           cursor: pointer;
           display: none;
           margin-top: 20px;
       }
   </style>
</head>
<body>

   <h1>Cookie Clicker</h1>
   <div id="gameContainer">
       <!-- Add your cookie image URL here in the 'src' attribute -->
       <img id="cookie" src="https://cdn-icons-png.flaticon.com/512/5473/5473473.png" alt="Cookie">
       <div id="score">Cookies: 0</div>

       <div id="upgrades">
           <button class="upgrade" onclick="buyUpgrade(10, 1)">+1 Cookie per Click (Cost: 10)</button>
           <button class="upgrade" onclick="buyUpgrade(100, 10)">+10 Cookies per Click (Cost: 100)</button>
           <button class="upgrade" onclick="buyUpgrade(500, 25)">+25 Cookies per Click (Cost: 500)</button>
           <button class="upgrade" onclick="buyUpgrade(1000, 50)">+50 Cookies per Click (Cost: 1000)</button>
           <button class="upgrade" onclick="buyUpgrade(5000, 100)">+100 Cookies per Click (Cost: 5000)</button>
           <button class="upgrade" onclick="buyAutoClicker(500)">Auto Clicker (Cost: 500)</button>
           <button class="upgrade" onclick="buyGoldenCookie(3000)">Golden Cookie (Cost: 3000)</button>
       </div>

       <div id="youWin">You Win! Cookies are raining down!</div>
       <button id="playAgain" onclick="resetGame()">Play Again</button>
   </div>
    <audio id="click-sound" src="{{site.baseurl}}/sounds/crunch.mp3" preload="auto"></audio>
   <script>
       let cookies = 0;
       let cookiesPerClick = 1;
       let upgrades = [
           { cost: 10, increment: 1 },
           { cost: 100, increment: 10 },
           { cost: 500, increment: 25 },
           { cost: 1000, increment: 50 },
           { cost: 5000, increment: 100 }
       ];
       let autoClicker = null;

       const scoreElement = document.getElementById("score");
       const cookieElement = document.getElementById("cookie");
       const youWinElement = document.getElementById("youWin");
       const playAgainButton = document.getElementById("playAgain");
       const clickSound = document.getElementById('click-sound');

       cookieElement.addEventListener("click", function () {
           cookies += cookiesPerClick;
           updateScore();
           checkWinCondition();
           clickSound.currentTime = 0;
           playClickSound();
       });

       function buyUpgrade(cost, increment) {
           if (cookies >= cost) {
               cookies -= cost;
               cookiesPerClick += increment;
               updateScore();
           }
       }

       function buyAutoClicker(cost) {
           if (cookies >= cost && !autoClicker) {
               cookies -= cost;
               updateScore();
               autoClicker = setInterval(() => {
                   cookies += cookiesPerClick;
                   updateScore();
                   checkWinCondition();
               }, 1000);
           }
       }

       function buyGoldenCookie(cost) {
           if (cookies >= cost) {
               cookies -= cost;
               cookiesPerClick *= 2;
               updateScore();
           }
       }

       function updateScore() {
           scoreElement.textContent = `Cookies: ${cookies}`;
       }

       function checkWinCondition() {
           if (cookies >= 10000) {
               clearInterval(autoClicker);
               cookieElement.style.display = "none";
               youWinElement.style.display = "block";
               playAgainButton.style.display = "block";
               // Raining cookies effect
               document.body.style.backgroundImage = 'url("https://prettysimplesweet.com/wp-content/uploads/2020/07/Big-Chocolate-Chip-Cookies-150x150.jpg")';
               document.body.style.backgroundRepeat = "repeat";
           }
       }

       function resetGame() {
           cookies = 0;
           cookiesPerClick = 1;
           updateScore();
           youWinElement.style.display = "none";
           playAgainButton.style.display = "none";
           cookieElement.style.display = "block";
           document.body.style.backgroundImage = "none";
           clearInterval(autoClicker);
           autoClicker = null;
       }
       function playClickSound() {
            clickSound.currentTime = 0;
            clickSound.play();
       }
   </script>

</body>
</html>