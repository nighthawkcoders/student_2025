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
  <audio id="cookie-sound" src="{{site.baseurl}}/sounds/bubble-pop-sound.wav" preload="auto"></audio> 
</div>

<script>
  let counter = 0;
  const cookiePoints = [5, 10, 20, 50, 100];
  const cookieLevels = [
    "Chocolate Chip", 
    "Double Chocolate Chunk",
    "Oreo",
    "Sugar",
    "Macaron"
  ];
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
    document.getElementById('cookie-sound').play(); 
    const index = cookiePoints.indexOf(counter);
    if (index !== -1) {
      alert(`You got the ${cookieLevels[index]} Cookie! `); 
      document.getElementById('cookie').src = cookieImages[index];
    }
  }
  document.getElementById('cookie').addEventListener('click', handleCookieClick);
</script>
