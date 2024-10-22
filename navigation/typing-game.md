---
layout: base
title: Typing Game
permalink: /Typing Game/
---


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Typing Game</title>
    <style>
        canvas {
            border: 1px solid black;
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

        // Typing Game Class
        class TypingGame {
            constructor() {
                this.words = ['apple', 'banana', 'cherry', 'date', 'elderberry', 'dog', 'cat'];
                this.currentWord = '';
                this.typedWord = '';
                this.score = 0;
                this.timer = 5;
                this.gameOver = false;

                this.generateNewWord();
                this.bindEventListeners();
                this.startGameLoop();
            }

            generateNewWord() {
                this.currentWord = this.words[Math.floor(Math.random() * this.words.length)];
                this.typedWord = '';
                this.timer = 5; // Reset timer for new word
            }

            draw() {
                GameEnv.ctx.clearRect(0, 0, GameEnv.innerWidth, GameEnv.innerHeight); // Clear canvas

                GameEnv.ctx.font = '40px Arial';
                GameEnv.ctx.fillStyle = 'red';  // Change word color to red
                GameEnv.ctx.fillText(`Word: ${this.currentWord}`, 100, 100);

                GameEnv.ctx.font = '30px Arial';
                GameEnv.ctx.fillStyle = 'green';
                GameEnv.ctx.fillText(`Typed: ${this.typedWord}`, 100, 150);

                GameEnv.ctx.fillStyle = 'blue';
                GameEnv.ctx.fillText(`Score: ${this.score}`, 100, 200);
                GameEnv.ctx.fillText(`Time: ${this.timer.toFixed(1)}`, 100, 250);

                if (this.gameOver) {
                    GameEnv.ctx.fillStyle = 'red';
                    GameEnv.ctx.fillText('Game Over!', 100, 300);
                }
            }

            update(deltaTime) {
                if (this.gameOver) return;

                this.timer -= deltaTime;

                if (this.timer <= 0) {
                    this.gameOver = true;
                    return;
                }

                if (this.typedWord === this.currentWord) {
                    this.score += 1;
                    this.generateNewWord();
                }

                this.draw();
            }

            handleInput(key) {
                if (this.gameOver) return;

                if (key === 'Backspace') {
                    this.typedWord = this.typedWord.slice(0, -1);
                } else if (key.length === 1 && /^[a-zA-Z]$/.test(key)) {
                    this.typedWord += key;
                }
            }

            bindEventListeners() {
                window.addEventListener('keydown', (event) => {
                    this.handleInput(event.key);
                });
            }

            startGameLoop() {
                let lastTime = 0;

                const gameLoop = (timeStamp) => {
                    const deltaTime = (timeStamp - lastTime) / 1000; // Time in seconds
                    lastTime = timeStamp;

                    this.update(deltaTime);

                    if (!this.gameOver) {
                        requestAnimationFrame(gameLoop);
                    }
                };

                requestAnimationFrame(gameLoop);
            }
        }

        // Start the Typing Game
        const game = new TypingGame();
    </script>
</body>
</html>



