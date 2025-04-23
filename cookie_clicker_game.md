---
layout: base
title: Cookie Clicker
description: Cookie Clicker Game 🍪
permalink: /cookie/
image: /images/mario.png
hide: true
---

<div id="cookie-game-container" style="text-align: center; margin-top: 20px;">
  <h2 style="color: lightblue; font-family: courier new">Cookie Clicker Game</h2> 
  <img id="cookie" src="{{site.baseurl}}/images/chocochipcookie.png" alt="Cookie" style="cursor: pointer;" width="330px" height="290px">
  <p>Number of clicks: <span id="counter">0</span></p>
  <audio id="cookie-sound" src="{{site.baseurl}}/sounds/bubble-pop-sound.wav" preload="auto"></audio> <!-- Added a short and playful popping sound -->
</div>

<script>
  let counter = 0;
// These cookies will appear when the user hits the required number of points for each cookie
  const cookiePoints = [5, 10, 20, 50, 100];
  const cookieLevels = [
    "Chocolate Chip", 
    "Double Chocolate Chunk",
    "Oreo",
    "Sugar",
    "Macaron"
  ];
// The images of different cookies
  const cookieImages = [
    "{{site.baseurl}}/images/chocochipcookie.png", 
    "{{site.baseurl}}/images/doublechocolatechip.png", 
    "{{site.baseurl}}/images/oreo.png", 
    "{{site.baseurl}}/images/sugarcookie.png",
    "{{site.baseurl}}/images/macaron.png" 
  ];

  function handleCookieClick() {
    counter++;
    document.getElementById('counter').textContent = counter;
    document.getElementById('cookie-sound').play(); // The popping sound will play every time it is clicked
    const index = cookiePoints.indexOf(counter);
    if (index !== -1) {
      alert(`You got the ${cookieLevels[index]} Cookie! `); // When the user gets enough clicks, then their new cookie will be announced by the webpage
      document.getElementById('cookie').src = cookieImages[index];
    }
  }
  document.getElementById('cookie').addEventListener('click', handleCookieClick);
</script>
