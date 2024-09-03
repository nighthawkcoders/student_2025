---
layout: base
title: Home
description: Home Page
hide: true
---

# Yash's Page

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