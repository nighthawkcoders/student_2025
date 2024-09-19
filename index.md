---
layout: base
title: .✧ My Home Page ✧.
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
    <link rel="stylesheet" href="/style.css">
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@800&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw=="
        crossorigin="anonymous" referrerpolicy="no-referrer" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
<body>
    <style>
body {
    background: rgb(240, 235, 248);
}
.subnav {
  float: left;
  overflow: hidden;
}
.subnav .subnavbtn {
  font-size: 16px;  
  border: none;
  outline: none;
  color: white;
  padding: 14px 16px;
  background-color: inherit;
  font-family: inherit;
  margin: 0;
}
.navbar a:hover, .subnav:hover .subnavbtn {
  background-color: red;
}
.subnav-content {
  display: none;
  position: absolute;
  left: 0;
  background-color: red;
  width: 100%;
  z-index: 1;
}
.subnav-content a {
  float: left;
  color: white;
  text-decoration: none;
}
.subnav-content a:hover {
  background-color: #eee;
  color: black;
}
.subnav:hover .subnav-content {
  display: block;
}
    .button {
        background-color: #6592db
        border: none;
        color: white;
        padding: 15px 32px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
        margin: 4px 2px;
        cursor: pointer;
        opacity: 0.6;
        transition: 0.8s;
    }
    .button {background-color: rgb(180,200, 235)}
    .button:hover {opacity: 1}
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
.toggle {
    background-color: #607d8b;
    color: #607d8b;
    visibility: hidden;
}
.toggle_label {
    position: relative;
    display: inline-block;
    width: 200px;
    height: 60px;
    background-color: rgb(0, 0, 0);
    border-radius: 30px;
}
.slider {
    bottom: 0;
    cursor: pointer;
    position: absolute;
    right: 0px;
    left: 0px;
    top: 0px;
    bottom: 0;
    -webkit-transition: .4s;
    transition: .4s;
}
.slider:before {
    border: 5px solid white;
    content: "";
    height: 36px;
    width: 36px;
    right: 10px;
    left: 7px;
    top: 7px;
    position: absolute;
    transition: .4s;
    border-radius: 50%;
}
div.absolute {
  position: absolute;
  top: 80px;
  right: 70px;
  width: 200px;
  height: 100px;
  border: 3px solid #73AD21;
}
    </style>
<center>
<div style= "color: white; font-family: courier new; font-size:20px">Hi, my name is Zoe He</div>
<p style= "color: white; font-family: courier new; font-size:10px">(Mario can move)</p>

<img src="totoro2.gif" alt="picture" class="center" width="172px" height="200px">
<br>
<br>
<br>
<a href="http://127.0.0.1:4100/student_2025/picture/"
    button class="button"> Click here to see a picture!
</a>
<br>
<iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/1vKlnFo34ktfVDRvR1Oycz?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
<div2 class="dropdown">
  <button class="dropbtn">Click here for more!</button>
  <div2 class="dropdown-content">
    <a href="http://127.0.0.1:4100/student_2025/about/">About Me</a>
    <a href="http://127.0.0.1:4100/student_2025/tools/">Tools</a>
    <a href="http://127.0.0.1:4100/student_2025/emoji/">Emoji</a>
    <a href="http://127.0.0.1:4100/student_2025/javascript/">Javascript</a>
    <a href="http://127.0.0.1:4100/student_2025/reflection/">Reflection </a>

  </div2>
<div class="dropdown">
  <button class="dropbtn">Click here for games!</button>
  <div class="dropdown-content">
    <a href="http://127.0.0.1:4100/student_2025/cookie/">Cookie Clicker</a>
    <a href="http://127.0.0.1:4100/student_2025/calc/">Calculator</a>
    <a href="http://127.0.0.1:4100/student_2025/snake/">Snake Game</a>
  </div>
<!--<div class="container">
  <label class="toggle_label">
    <input type="checkbox" id="mode" class="toggle">
    <span class="slider round">
      <i class="fa-solid circle"></i>
      <i class="fa-solid circle"></i>
    </span>
  </label>
  <p id="theme"></p>
  </div>
</center>

<!--<img src="diudiu.png" alt="picture" class="center" width="50px" height="60px">-->