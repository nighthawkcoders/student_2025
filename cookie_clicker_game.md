---
layout: base
title: Cookie Clicker
description: Cookie Clicker Game 🍪
permalink: /cookie/
image: /images/mario.png
hide: true
---
<!-- Cookie Clicker Game -->
<div id="cookie-game-container" style="text-align: center; margin-top: 20px;">
  <h2 style="color: lightblue; font-family: courier new">Cookie Clicker Game</h2>
  <img id="cookie" src="{{site.baseurl}}/images/Fortune_cookie.png" alt="Cookie" style="cursor: pointer;" width="330px" height="290px">
  <img source>
  <p>Cookies clicked: <span id="counter">0</span></p>
</div>
<script>
  let counter = 0;
  document.getElementById('cookie').addEventListener('click', function() {
    counter++;
    document.getElementById('counter').textContent = counter;
  });
</script>