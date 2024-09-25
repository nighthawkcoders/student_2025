---
layout: base
title: CodeFree
permalink: /Codenite/
---

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Shooter Game</title>
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

        // Bullet Class
        class Bullet {
            constructor(x, y) {
                this.x = x;
                this.y = y;
                this.radius = 5;
                this.speed = 500; // pixels per second
            }

            update(deltaTime) {
                this.y -= this.speed * deltaTime; // Move bullet upwards
            }

            draw() {
                GameEnv.ctx.fillStyle = 'red';
                GameEnv.ctx.beginPath();
                GameEnv.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
                GameEnv.ctx.fill();
            }
        }

        // Target Class
        class Target {
            constructor() {
                this.x = Math.random() * GameEnv.innerWidth;
                this.y = Math.random() * (GameEnv.innerHeight / 2);
                this.radius = 20;
            }

            draw() {
                GameEnv.ctx.fillStyle = 'green';
                GameEnv.ctx.beginPath();
                GameEnv.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
                GameEnv.ctx.fill();
            }
        }

        // Shooter Game Class
        class ShooterGame {
            constructor() {
                this.bullets = [];
                this.targets = [];
                this.score = 0;
                this.spawnTarget();

                this.bindEventListeners();
                this.startGameLoop();
            }

            spawnTarget() {
                this.targets.push(new Target());
                setTimeout(() => this.spawnTarget(), 2000); // Spawn a new target every 2 seconds
            }

            draw() {
                GameEnv.ctx.clearRect(0, 0, GameEnv.innerWidth, GameEnv.innerHeight); // Clear canvas

                // Draw bullets
                this.bullets.forEach(bullet => bullet.draw());

                // Draw targets
                this.targets.forEach(target => target.draw());

                // Draw score
                GameEnv.ctx.fillStyle = 'blue';
                GameEnv.ctx.font = '30px Arial';
                GameEnv.ctx.fillText(`Score: ${this.score}`, 10, 30);
            }

            update(deltaTime) {
                // Update bullets
                this.bullets.forEach(bullet => bullet.update(deltaTime));

                // Remove bullets that are off-screen
                this.bullets = this.bullets.filter(bullet => bullet.y > 0);

                // Collision detection
                this.bullets.forEach(bullet => {
                    this.targets.forEach(target => {
                        const dx = bullet.x - target.x;
                        const dy = bullet.y - target.y;
                        const distance = Math.sqrt(dx * dx + dy * dy);

                        if (distance < bullet.radius + target.radius) {
                            this.score++;
                            this.targets = this.targets.filter(t => t !== target);
                        }
                    });
                });

                this.draw();
            }

            handleShoot(x, y) {
                this.bullets.push(new Bullet(x, y));
            }

            bindEventListeners() {
                window.addEventListener('click', (event) => {
                    this.handleShoot(event.clientX, event.clientY);
                });
            }

            startGameLoop() {
                let lastTime = 0;

                const gameLoop = (timeStamp) => {
                    const deltaTime = (timeStamp - lastTime) / 1000; // Time in seconds
                    lastTime = timeStamp;

                    this.update(deltaTime);

                    requestAnimationFrame(gameLoop);
                };

                requestAnimationFrame(gameLoop);
            }
        }

        // Start the Shooter Game
        const game = new ShooterGame();
    </script>
</body>
</html>
