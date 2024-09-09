---
layout: base
title: My Home Page
description: Home Page
image: /images/mario.png
hide: true
---
<!-- Liquid:  statements -->

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

<html>
<meta name="viewport" content="width=device-width, initial-scale=1">
<head>
    <link rel="stylesheet" href="style.css">
<body>
    <style>
      .submenu {
  position: relative;
  display: inline-block;
}
.submenu-btn {
  background-color: #add1f7;
  color: white;
  padding: 16px;
  font-size: 16px;
  border: none;
  cursor: pointer;
}
.submenu-content {
  display: none;
  position: absolute;
  background-color: #79a9db;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}
.submenu-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}
.submenu-content a:hover {background-color: #ddd;}
.submenu:hover .submenu-content {display: block;}
.submenu:hover .submenu-btn {background-color: #3e6f8e;}
    div {
  background-color: rgb(180, 200, 235);
  width: 400px;
  length: 800px;
  border: 15px solid white;
  padding: 40px;
  margin: 200px;
  }
    .button {
        border: none;
        color: white;
        padding: 15px 32px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
        margin: 4px 2px;
        cursor: pointer;
    }
    .button {background-color: rgb(180,200, 235)}
    .button:hover {
        background-color: rgb(255,255,255)
        color: black;
    }
        p {text-align: center;}
        p {text-align: center;}
    .dropbtn {
  background-color: #add1f7;
  color: white;
  padding: 16px;
  font-size: 16px;
  border: none;
}
.dropdown {
  position: relative;
  display: inline-block;
}
.dropdown-content {
  display: none;
  position: absolute;
  background-color: #79a9db;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}
.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}
.dropdown-content a:hover {background-color: #ddd;}
.dropdown:hover .dropdown-content {display: block;}
.dropdown:hover .dropbtn {background-color: #3e6f8e;}
    </style>
    <div class = "center">
        <p style="color: white; font-family:courier; font-size:48px" class="strong"><i>Hello, my name is Zoe He!</i></p>
    </div>
<center>
<div class="submenu">
      <button class="submenu-btn">Projects</button>
      <div class="submenu-content">
        <a href="http://127.0.0.1:4100/student_2025/tools/">Project 1</a>
        <a href="http://127.0.0.1:4100/student_2025/about/">Project 2</a>
        <a href="http://127.0.0.1:4100/student_2025/picture/">Project 3</a>
</div>
      <!-- End Submenu -->
<div2 class="dropdown">
  <button class="dropbtn">Click here for more!</button>
  <div2 class="dropdown-content">
    <a href="http://127.0.0.1:4100/student_2025/about/">About Me</a>
    <a href="http://127.0.0.1:4100/student_2025/tools/">Tools</a>
    <a href="http://127.0.0.1:4100/student_2025/picture/">My Cat</a>
  </div2>
</div2>
<img src="totoro2.gif" alt="picture" class="center" width="172px" height="200px">
<a href="http://127.0.0.1:4100/student_2025/picture/"
    button class="button">Cat Button
</a>
</center>
<!--<img src="diudiu.png" alt="picture" class="center" width="50px" height="60px">-->
