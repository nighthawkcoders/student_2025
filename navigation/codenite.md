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
            display: block;
            margin: auto;
            background-color: #f0f0f0; /* Light background for contrast */
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

        // Bullet class
        class Bullet {
            constructor(x, y) {
                this.x = x;
                this.y = y;
                this.radius = 5;
                this.speed = 5;
            }

            update() {
                this.y -= this.speed; // Move bullet upwards
            }

            draw() {
                GameEnv.ctx.fillStyle = 'black'; // Color of the bullet
                GameEnv.ctx.beginPath();
                GameEnv.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
                GameEnv.ctx.fill();
            }
        }

        // Target class
        class Target {
            constructor() {
                this.x = Math.random() * (GameEnv.innerWidth - 30); // Random x position
                this.y = Math.random() * (GameEnv.innerHeight / 2); // Random y position
                this.size = 30; // Size of the target
            }

            draw() {
                GameEnv.ctx.fillStyle = 'black'; // Color of the target
                GameEnv.ctx.fillRect(this.x, this.y, this.size, this.size); // Draw target as a square
            }
        }

        // Shooter Game class
        class ShooterGame {
            constructor() {
                this.bullets = [];
                this.targets = [new Target()]; // Create an initial target
                this.score = 0;
                this.gunX = GameEnv.innerWidth / 2;
                this.gunY = GameEnv.innerHeight - 50; // Position above the bottom

                this.bindEventListeners();
                this.startGameLoop();
            }

            drawGun() {
                GameEnv.ctx.fillStyle = 'blue'; // Color of the gun
                GameEnv.ctx.fillRect(this.gunX - 25, this.gunY, 50, 20); // Simple rectangle as gun
            }

            draw() {
                GameEnv.ctx.clearRect(0, 0, GameEnv.innerWidth, GameEnv.innerHeight); // Clear canvas

                // Draw bullets
                this.bullets.forEach(bullet => bullet.draw());

                // Draw targets
                this.targets.forEach(target => target.draw());

                // Draw the gun
                this.drawGun();

                // Draw score
                GameEnv.ctx.fillStyle = 'blue';
                GameEnv.ctx.font = '30px Arial';
                GameEnv.ctx.fillText(`Score: ${this.score}`, 10, 30);
            }

            update() {
                // Update bullets
                this.bullets.forEach(bullet => bullet.update());
                this.bullets = this.bullets.filter(bullet => bullet.y > 0); // Remove bullets that are off screen

                // Check for collisions with targets
                this.checkCollisions();
            }

            checkCollisions() {
                this.bullets.forEach((bullet, bulletIndex) => {
                    this.targets.forEach((target, targetIndex) => {
                        if (
                            bullet.x > target.x &&
                            bullet.x < target.x + target.size &&
                            bullet.y > target.y &&
                            bullet.y < target.y + target.size
                        ) {
                            // Remove target and bullet if they collide
                            this.targets.splice(targetIndex, 1);
                            this.bullets.splice(bulletIndex, 1);
                            this.score += 1; // Increment score

                            // Create a new target
                            this.targets.push(new Target());
                        }
                    });
                });
            }

            shoot() {
                const bullet = new Bullet(this.gunX, this.gunY); // Start bullet from gun's position
                this.bullets.push(bullet);
            }

            bindEventListeners() {
                window.addEventListener('mousemove', (event) => {
                    this.gunX = event.clientX; // Update gun position to mouse's x coordinate
                });

                window.addEventListener('click', () => {
                    this.shoot(); // Shoot bullet on mouse click
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

        // Start the Shooter Game
        const game = new ShooterGame();
    </script>
</body>
</html>

