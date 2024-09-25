---
layout: base
title: ss
permalink: /ss/
---
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Simple Soccer Game</title>
    <style>
        canvas {
            border: 1px solid black;
            display: block;
            margin: auto;
            background-color: green; /* Green background for the soccer field */
        }
    </style>
</head>
<body>
    <canvas id="gameCanvas"></canvas>

    <script type="module">
        // Set up canvas and context
        const canvas = document.getElementById('gameCanvas');
        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        // Game environment object
        const GameEnv = {
            ctx: ctx,
            innerWidth: canvas.width,
            innerHeight: canvas.height
        };

        // Player class
        class Player {
            constructor(x, y, color = 'blue') {
                this.x = x;
                this.y = y;
                this.radius = 30;
                this.speed = 5;
                this.color = color;
            }

            move(direction) {
                switch (direction) {
                    case 'up':
                        if (this.y - this.radius > 0) this.y -= this.speed;
                        break;
                    case 'down':
                        if (this.y + this.radius < GameEnv.innerHeight) this.y += this.speed;
                        break;
                    case 'left':
                        if (this.x - this.radius > 0) this.x -= this.speed;
                        break;
                    case 'right':
                        if (this.x + this.radius < GameEnv.innerWidth) this.x += this.speed;
                        break;
                }
            }

            draw() {
                GameEnv.ctx.fillStyle = this.color;
                GameEnv.ctx.beginPath();
                GameEnv.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
                GameEnv.ctx.fill();
            }
        }

        // Ball class
        class Ball {
            constructor(x, y) {
                this.x = x;
                this.y = y;
                this.radius = 20;
                this.color = 'white';
                this.dx = Math.random() * 4 - 2; // Ball's velocity on x-axis
                this.dy = Math.random() * 4 - 2; // Ball's velocity on y-axis
            }

            move() {
                this.x += this.dx;
                this.y += this.dy;

                // Bounce off walls
                if (this.x - this.radius < 0 || this.x + this.radius > GameEnv.innerWidth) {
                    this.dx = -this.dx;
                }

                if (this.y - this.radius < 0 || this.y + this.radius > GameEnv.innerHeight) {
                    this.dy = -this.dy;
                }
            }

            draw() {
                GameEnv.ctx.fillStyle = this.color;
                GameEnv.ctx.beginPath();
                GameEnv.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
                GameEnv.ctx.fill();
            }
        }

        // Goal class
        class Goal {
            constructor(x, y, width, height) {
                this.x = x;
                this.y = y;
                this.width = width;
                this.height = height;
            }

            draw() {
                GameEnv.ctx.strokeStyle = 'yellow';
                GameEnv.ctx.lineWidth = 5;
                GameEnv.ctx.strokeRect(this.x, this.y, this.width, this.height);
            }
        }

        // Soccer Game class
        class SoccerGame {
            constructor() {
                this.player = new Player(GameEnv.innerWidth / 2, GameEnv.innerHeight - 100);
                this.ball = new Ball(GameEnv.innerWidth / 2, GameEnv.innerHeight / 2);
                this.goal = new Goal(GameEnv.innerWidth / 2 - 50, 10, 100, 30);
                this.score = 0;

                this.bindEventListeners();
                this.startGameLoop();
            }

            checkGoal() {
                if (
                    this.ball.x > this.goal.x &&
                    this.ball.x < this.goal.x + this.goal.width &&
                    this.ball.y - this.ball.radius < this.goal.y + this.goal.height
                ) {
                    this.score += 1;
                    this.ball.x = GameEnv.innerWidth / 2;
                    this.ball.y = GameEnv.innerHeight / 2;
                    this.ball.dx = Math.random() * 4 - 2;
                    this.ball.dy = Math.random() * 4 - 2;
                }
            }

            draw() {
                GameEnv.ctx.clearRect(0, 0, GameEnv.innerWidth, GameEnv.innerHeight); // Clear canvas

                // Draw player, ball, and goal
                this.player.draw();
                this.ball.draw();
                this.goal.draw();

                // Draw score
                GameEnv.ctx.fillStyle = 'blue';
                GameEnv.ctx.font = '30px Arial';
                GameEnv.ctx.fillText(`Score: ${this.score}`, 10, 30);
            }

            update() {
                this.ball.move();
                this.checkGoal();
            }

            bindEventListeners() {
                window.addEventListener('keydown', (event) => {
                    switch (event.key) {
                        case 'ArrowUp':
                            this.player.move('up');
                            break;
                        case 'ArrowDown':
                            this.player.move('down');
                            break;
                        case 'ArrowLeft':
                            this.player.move('left');
                            break;
                        case 'ArrowRight':
                            this.player.move('right');
                            break;
                    }
                });
            }

            startGameLoop() {
                const gameLoop = () => {
                    this.update();
                    this.draw();
                    requestAnimationFrame(gameLoop);
                };
                requestAnimationFrame(gameLoop);
            }
        }

        // Start the Soccer Game
        const game = new SoccerGame();
    </script>
</body>
</html>
  
