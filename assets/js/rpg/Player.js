import GameEnv from './GameEnv.js';

// 🚀 Default constants to control the magic
const SCALE_FACTOR = 25;  // Player size, 1/nth of canvas height (small but mighty!)
const STEP_FACTOR = 100;  // Speed control, player takes 1/nth steps (fast but not too fast)
const ANIMATION_RATE = 1; // Frames per second (FPS) for sprite animations, 'cause smooth is cool

/**
 * Player class brings your character to life! 🕹️
 * Handles all things player-related: state, rendering, movement events, and more.
 * Can either be animated with a sprite sheet, or show up as a legendary red square.
 * 
 * @class Player
 */
class Player {
  /**
   * Sets up your player! Time to play! 🎮
   * @param {Object|null} sprite - Optional sprite data. If null, we rock the red square look.
   */
  constructor(sprite = null) {
    // Step 1: Get the game environment dimensions
    this.scale = { width: GameEnv.innerWidth, height: GameEnv.innerHeight };

    // Step 2: Set player properties (either from sprite data or default values)
    const { SCALE_FACTOR: sf = SCALE_FACTOR, STEP_FACTOR: stf = STEP_FACTOR, ANIMATION_RATE: ar = ANIMATION_RATE } = sprite?.data || {};
    this.scaleFactor = sf;
    this.stepFactor = stf;
    this.animationRate = ar;

    // Step 3: Load up the sprite sheet (or don’t, and be a red square superstar)
    this.spriteSheet = sprite ? this.loadSprite(sprite.src) : null;
    this.spriteData = sprite?.data || {};
    this.frameIndex = 0;    // Start animation from the first frame
    this.frameCounter = 0;  // Slow down animation based on rate
    this.direction = 'down'; // Player’s starting direction (headin' south, partner! 🤠)

    // Step 4: Size matters! Adjust player size relative to the canvas
    this.size = GameEnv.innerHeight / this.scaleFactor;

    // Step 5: Set initial player position and velocity (static until you start moving!)
    this.position = { x: 0, y: GameEnv.innerHeight - this.size }; // 🏃‍♂️ Spawn at the bottom left
    this.velocity = { x: 0, y: 0 }; // Not moving… *yet*

    // Step 6: Let’s resize our player, and hook up some event listeners (move that player!)
    this.resize();
    this.bindEventListeners();
  }

  /**
   * Resizes the player when the window size changes. Adapt or perish! 🖼️
   */
  resize() {
    const newScale = { width: GameEnv.innerWidth, height: GameEnv.innerHeight };

    // Resize player position based on old and new scale—stay proportional, no weird stretching!
    this.position.x = (this.position.x / this.scale.width) * newScale.width;
    this.position.y = (this.position.y / this.scale.height) * newScale.height;

    this.scale = newScale;

    // Time to adjust size and movement based on the new canvas size!
    this.size = this.scale.height / this.scaleFactor;  // Shrink/grow player relative to height
    this.xVelocity = this.scale.width / this.stepFactor; // Player speed on x-axis
    this.yVelocity = this.scale.height / this.stepFactor; // Player speed on y-axis

    // Keep the player nice and square-shaped
    this.width = this.size;
    this.height = this.size;
  }

  /**
   * Draw the player on the canvas! Will it be a pixel-perfect sprite? Or a fearless red square? 🎨
   */
  draw() {
    if (this.spriteSheet) {
      // Calculate sprite frame dimensions—each frame is a piece of the puzzle!
      const frameWidth = this.spriteData.pixels.width / this.spriteData.orientation.columns;
      const frameHeight = this.spriteData.pixels.height / this.spriteData.orientation.rows;

      // Get the right sprite frame based on direction and frame index
      const directionData = this.spriteData[this.direction];
      const frameX = (directionData.start + this.frameIndex) * frameWidth;
      const frameY = directionData.row * frameHeight;

      // Finally, draw the right frame of the sprite sheet onto the canvas!
      GameEnv.ctx.drawImage(
        this.spriteSheet,
        frameX, frameY, frameWidth, frameHeight,  // Which part of the sprite sheet are we grabbing?
        this.position.x, this.position.y, this.width, this.height // Where are we putting it?
      );

      // Update the frame index for that sweet animation, but only if it's time to move!
      this.frameCounter++;
      if (this.frameCounter % this.animationRate === 0) {
        this.frameIndex = (this.frameIndex + 1) % directionData.columns;
      }
    } else {
      // No sprite sheet? No problem! You're a stylish red square now!
      GameEnv.ctx.fillStyle = 'red';
      GameEnv.ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
    }
  }

  /**
   * Update the player’s position and keep them within the game world (no sneaking off-screen!). 🛑
   */
  update() {
    // Step 1: Draw the player in their new spot
    this.draw();

    // Step 2: Move the player based on velocity
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;

    // Step 3: Keep the player inside the canvas bounds (no running off into the void!)
    this.position.x = Math.max(0, Math.min(this.position.x, GameEnv.innerWidth - this.width));
    this.position.y = Math.max(0, Math.min(this.position.y, GameEnv.innerHeight - this.height));
  }

  /**
   * Bind event listeners to make your player move with arrow keys or WASD. Ready to run? 🏃‍♂️💨
   */
  bindEventListeners() {
    addEventListener('keydown', this.handleKeyDown.bind(this));
    addEventListener('keyup', this.handleKeyUp.bind(this));
  }

  /**
   * Handle key presses to set the player's velocity. WASD or arrows: Choose your destiny! 🎮
   * @param {Object} event - The keydown event (aka, which button you just pressed)
   */
  handleKeyDown({ keyCode }) {
    // Velocity settings mapped to WASD/arrow keys
    const directions = {
      87: { y: -this.yVelocity, direction: 'up' },    // 'W' key -> Go up!
      65: { x: -this.xVelocity, direction: 'left' },  // 'A' key -> Go left!
      83: { y: this.yVelocity, direction: 'down' },   // 'S' key -> Go down!
      68: { x: this.xVelocity, direction: 'right' },  // 'D' key -> Go right!
    };

    // Update velocity and direction if a valid key is pressed
    if (directions[keyCode]) {
      this.velocity = { ...this.velocity, ...directions[keyCode] };
      this.direction = directions[keyCode].direction;
    }
  }

  /**
   * Handle key releases to stop the player when you let go of a movement key. 🛑
   * @param {Object} event - The keyup event (aka, which button you just released)
   */
  handleKeyUp({ keyCode }) {
    // Stop player movement when the corresponding key is released
    if ([87, 83].includes(keyCode)) this.velocity.y = 0; // 'W' or 'S' key -> Stop vertical movement
    if ([65, 68].includes(keyCode)) this.velocity.x = 0; // 'A' or 'D' key -> Stop horizontal movement
  }

  /**
   * Helper method to load the sprite sheet for the player.
   * @param {string} src - Path to the sprite sheet image
   * @returns {HTMLImageElement} Loaded image element
   */
  loadSprite(src) {
    const img = new Image();
    img.src = src;
    return img;
  }
}

export default Player;
