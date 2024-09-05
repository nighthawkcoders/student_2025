---
layout: base
title: Home
description: Home Page
hide: true
---

# Yash's Page
<p>This is a button</p>
<button>Button</button>

<div style="padding-top: 33px;">
<a href="./navigation/liverpool.html" style="display: inline-block; padding: 10px 60px; background-color: red; color: black; text-decoration: underline; border-radius: 5px;">Liverpool FC</a>
</div>
<div style="padding-top: 6px;">
<a href="./navigation/journey.md.html" style="display: inline-block; padding: 10px 50px; background-color: black; color: white; text-decoration: underline; border-radius: 5px;">Journey</a>
</div>
<p>Click on these to see my Liverpool FC and Journey pages</p>








![Mario walking](https://media.giphy.com/media/12QMzVeF4QsqTC/giphy.gif)

<style>
  img:nth-of-type(1) {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100px;
    height: 100px; 
    animation: walk 10s linear infinite;
    z-index: 2;
  }

  img:nth-of-type(2) {
    position: fixed;
    bottom: 0;
    left: -150px;
    width: 100px;
    height: 100px; 
    animation: walk 10s linear infinite;
    z-index: 1;
  }

  @keyframes walk {
    from { transform: translateX(-100%); }
    to { transform: translateX(100vw); }
  }
</style>

