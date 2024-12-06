---
layout: page
title: Snake
permalink: /snake/
---
## Snake Game


<div id="gameContainer">
   <canvas id="snakeGame"></canvas>
</div>


<style>
   #gameContainer {
       width: 80vw;
       height: 80vh;
       display: flex;
       justify-content: center;
       align-items: center;
       flex-direction: column;
   }


   canvas {
       background-color: #C8D2E6;
       border: 3px solid #333;
       box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
       border-radius: 10px;
   }


</style>


<script>
   const canvas = document.getElementById("snakeGame");
   const ctx = canvas.getContext("2d");


   // Set canvas size to smaller than full-screen (80% of window size)
   canvas.width = Math.min(window.innerWidth * 0.8, 450);
   canvas.height = Math.min(window.innerHeight * 0.8, 450);


   // Increase the size of the snake and the apples
   const box = 30; // Larger size for snake and food


   const canvasCols = Math.floor(canvas.width / box);
   const canvasRows = Math.floor(canvas.height / box);


   let snake = [];
   snake[0] = { x: Math.floor(canvasCols / 2) * box, y: Math.floor(canvasRows / 2) * box };


   let food = {
       x: Math.floor(Math.random() * canvasCols) * box,
       y: Math.floor(Math.random() * canvasRows) * box,
   };


   let score = 0;
   let direction;


   document.addEventListener("keydown", setDirection);


   // Prevent the default behavior of arrow keys (like scrolling)
   window.addEventListener("keydown", (e) => {
       if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(e.key)) {
           e.preventDefault();
       }
   });


   function setDirection(event) {
       if (event.keyCode === 37 && direction !== "RIGHT") direction = "LEFT";
       else if (event.keyCode === 38 && direction !== "DOWN") direction = "UP";
       else if (event.keyCode === 39 && direction !== "LEFT") direction = "RIGHT";
       else if (event.keyCode === 40 && direction !== "UP") direction = "DOWN";
   }


   function collision(newHead, array) {
       for (let i = 0; i < array.length; i++) {
           if (newHead.x === array[i].x && newHead.y === array[i].y) {
               return true;
           }
       }
       return false;
   }


   function drawGame() {
       ctx.clearRect(0, 0, canvas.width, canvas.height);


       for (let i = 0; i < snake.length; i++) {
           ctx.fillStyle = (i === 0) ? "#333" : "#8EA8D2";
           ctx.fillRect(snake[i].x, snake[i].y, box, box);
           ctx.strokeStyle = "#FFF";
           ctx.strokeRect(snake[i].x, snake[i].y, box, box);
       }


       ctx.fillStyle = "#8EA8D2";
       ctx.fillRect(food.x, food.y, box, box);


       let snakeX = snake[0].x;
       let snakeY = snake[0].y;


       if (direction === "LEFT") snakeX -= box;
       if (direction === "UP") snakeY -= box;
       if (direction === "RIGHT") snakeX += box;
       if (direction === "DOWN") snakeY += box;


       if (snakeX === food.x && snakeY === food.y) {
           score++;
           food = {
               x: Math.floor(Math.random() * canvasCols) * box,
               y: Math.floor(Math.random() * canvasRows) * box,
           };
       } else {
           snake.pop();
       }


       let newHead = { x: snakeX, y: snakeY };


       if (
           snakeX < 0 || snakeY < 0 ||
           snakeX >= canvas.width || snakeY >= canvas.height ||
           collision(newHead, snake)
       ) {
           clearInterval(game);
       }


       snake.unshift(newHead);


       ctx.fillStyle = "#000";
       ctx.font = "20px georgia";
       ctx.fillText("Score: " + score, 10, canvas.height - 20);
   }


   let game = setInterval(drawGame, 100);


   // Resize canvas if the window size changes
   window.addEventListener("resize", function() {
       canvas.width = Math.min(window.innerWidth * 0.8, 600);
       canvas.height = Math.min(window.innerHeight * 0.8, 600);
   });
</script>




