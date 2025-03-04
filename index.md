---
layout: base
title: Manahil Khan
description: Welcome to my page! My name is Manahil you can click about to learn more about me.
author: Manahil Khan
image: /images/mario_animation.png
hide: true
---

<div class="header" style="text-align: center; padding: 20px; background-color: #f0f8ff; border-radius: 12px;">
   <h1 style="color: #b074db; font-family: georgia; font-size: 48px; letter-spacing: 2px; text-shadow: 3px 2px #8A2BE2;">
      𖤣.𖥧 Home Page 𖡼.⚘
   </h1>
</div>

<!-- Navigation buttons section -->
<div style="display: flex; justify-content: center; gap: 30px; padding: 40px; background-color: #e0f7fa; border-radius: 20px; box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.2);">
 <div style="text-align: center;">
    <a href="notebook1" style="text-decoration: none;">
       <button style="background-color: #ff6f61; color: white; border: none; padding: 20px 50px; font-size: 18px; border-radius: 50px; cursor: pointer; transition: background-color 0.3s, transform 0.3s;">
          Notebook 1
       </button>
    </a>
 </div>


 <div style="text-align: center;">
    <a href="notebook2" style="text-decoration: none;">
       <button style="background-color: #ffcc00; color: black; border: none; padding: 20px 50px; font-size: 18px; border-radius: 50px; cursor: pointer; transition: background-color 0.3s, transform 0.3s;">
          Notebook 2
       </button>
    </a>
 </div>


 <div style="text-align: center;">
    <a href="notebook3" style="text-decoration: none;">
       <button style="background-color: #00bcd4; color: white; border: none; padding: 20px 50px; font-size: 18px; border-radius: 50px; cursor: pointer; transition: background-color 0.3s, transform 0.3s;">
          Notebook 3
       </button>
    </a>
 </div>
</div>


<style>
 button:hover {
   background-color: #A5BDDA;
   transform: scale(1.1);
 }


 button:active {
   transform: scale(0.95);
 }


 a:nth-child(2) button:hover {
   background-color: #C3DEFF;
 }


 a:nth-child(3) button:hover {
   background-color: #86B499;
 }
</style>

 <img src="images/abt me.jpg">


<!-- Liquid:  statements -->

<!-- Include submenu from _includes to top of pages -->
<!--- Concatenation of site URL to frontmatter image  --->
{% assign sprite_file = site.baseurl | append: page.image %}
<!--- Has is a list variable containing mario metadata for sprite --->
{% assign hash = site.data.mario_metadata %}  
<!--- Size width/height of Sprit images --->
{% assign pixels = 256 %}

<!--- HTML for page contains <p> tag named "Mario" and class properties for a "sprite"  -->

<p id="mario" class="sprite"></p>
  
<!--- Embedded Cascading Style Sheet (CSS) rules, 
        define how HTML elements look 
--->
<style>

  /*CSS style rules for the id and class of the sprite...
  */
  .sprite {
    height: {{pixels}}px;
    width: {{pixels}}px;
    background-image: url('{{sprite_file}}');
    background-repeat: no-repeat;
  }

  /*background position of sprite element
  */
  #mario {
    background-position: calc({{animations[0].col}} * {{pixels}} * -1px) calc({{animations[0].row}} * {{pixels}}* -1px);
  }
</style>

<!--- Embedded executable code--->
<script>
  ////////// convert YML hash to javascript key:value objects /////////

  var mario_metadata = {}; //key, value object
  {% for key in hash %}  
  
  var key = "{{key | first}}"  //key
  var values = {} //values object
  values["row"] = {{key.row}}
  values["col"] = {{key.col}}
  values["frames"] = {{key.frames}}
  mario_metadata[key] = values; //key with values added

  {% endfor %}

  ////////// game object for player /////////

  class Mario {
    constructor(meta_data) {
      this.tID = null;  //capture setInterval() task ID
      this.positionX = 0;  // current position of sprite in X direction
      this.currentSpeed = 0;
      this.marioElement = document.getElementById("mario"); //HTML element of sprite
      this.pixels = {{pixels}}; //pixel offset of images in the sprite, set by liquid constant
      this.interval = 100; //animation time interval
      this.obj = meta_data;
      this.marioElement.style.position = "absolute";
    }

    animate(obj, speed) {
      let frame = 0;
      const row = obj.row * this.pixels;
      this.currentSpeed = speed;

      this.tID = setInterval(() => {
        const col = (frame + obj.col) * this.pixels;
        this.marioElement.style.backgroundPosition = `-${col}px -${row}px`;
        this.marioElement.style.left = `${this.positionX}px`;

        this.positionX += speed;
        frame = (frame + 1) % obj.frames;

        const viewportWidth = window.innerWidth;
        if (this.positionX > viewportWidth - this.pixels) {
          document.documentElement.scrollLeft = this.positionX - viewportWidth + this.pixels;
        }
      }, this.interval);
    }

    startWalking() {
      this.stopAnimate();
      this.animate(this.obj["Walk"], 3);
    }

    startRunning() {
      this.stopAnimate();
      this.animate(this.obj["Run1"], 6);
    }

    startPuffing() {
      this.stopAnimate();
      this.animate(this.obj["Puff"], 0);
    }

    startCheering() {
      this.stopAnimate();
      this.animate(this.obj["Cheer"], 0);
    }

    startFlipping() {
      this.stopAnimate();
      this.animate(this.obj["Flip"], 0);
    }

    startResting() {
      this.stopAnimate();
      this.animate(this.obj["Rest"], 0);
    }

    stopAnimate() {
      clearInterval(this.tID);
    }
  }

  const mario = new Mario(mario_metadata);

  ////////// event control /////////

  window.addEventListener("keydown", (event) => {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      if (event.repeat) {
        mario.startCheering();
      } else {
        if (mario.currentSpeed === 0) {
          mario.startWalking();
        } else if (mario.currentSpeed === 3) {
          mario.startRunning();
        }
      }
    } else if (event.key === "ArrowLeft") {
      event.preventDefault();
      if (event.repeat) {
        mario.stopAnimate();
      } else {
        mario.startPuffing();
      }
    }
  });

  //touch events that enable animations
  window.addEventListener("touchstart", (event) => {
    event.preventDefault(); // prevent default browser action
    if (event.touches[0].clientX > window.innerWidth / 2) {
      // move right
      if (currentSpeed === 0) { // if at rest, go to walking
        mario.startWalking();
      } else if (currentSpeed === 3) { // if walking, go to running
        mario.startRunning();
      }
    } else {
      // move left
      mario.startPuffing();
    }
  });

  //stop animation on window blur
  window.addEventListener("blur", () => {
    mario.stopAnimate();
  });

  //start animation on window focus
  window.addEventListener("focus", () => {
     mario.startFlipping();
  });

  //start animation on page load or page refresh
  document.addEventListener("DOMContentLoaded", () => {
    // adjust sprite size for high pixel density devices
    const scale = window.devicePixelRatio;
    const sprite = document.querySelector(".sprite");
    sprite.style.transform = `scale(${0.2 * scale})`;
    mario.startResting();
  });

</script>

<div style="text-align: center;">
    <a href="calculator" style="text-decoration: none;">
       <button style="background-color: #00bcd4; color: white; border: none; padding: 20px 50px; font-size: 18px; border-radius: 50px; cursor: pointer; transition: background-color 0.3s, transform 0.3s;">
          Calculator
       </button>
    </a>
 </div>