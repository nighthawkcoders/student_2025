---
layout: base
title: Calculator
description: Calculator
permalink: /binarycalc/
image: /images/mario.png
hide: true
---
<head>
  <meta charset="utf-8">
  <title>Binary Calculator</title>
  <link href='https://fonts.googleapis.com/css?family=Share+Tech+Mono' rel='stylesheet' type='text/css'>
  <!-- Latest compiled and minified CSS -->
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">
  <!-- jQuery library -->
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.0/jquery.min.js"></script>
  <!-- Latest compiled JavaScript -->
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>
</head>
<body>
  <div class="container-fluid">
    <div class="jumbotron">
      <h1>Binary Input/Output Calculator</h2>
      <h3>Perform basic arithmetic with binary numbers</h3>
      <div id="res" maxlength="8"></div>
      <div id="btns" class="btn">
        <div class="upper">
          <button class="lgreen" id="btn0" onclick="key('0')">0</button>
          <button class="lgreen" id="btn1" onclick="key('1')">1</button>
          <button class="dgreen" id="btnClr" onclick="cl()">C</button>
          <button class="dgreen" id="btnEql" onclick="operatorFunx()">=</button>
        </div>
        <div class="lower">
          <button id="btnSum" class="operator" onclick="key('+')">
                  +</button>
          <button id="btnSub" class="operator" onclick="key('-')">
                  -</button>
          <button id="btnMul" class="operator" onclick="key('*')">
                  *</button>
          <button id="btnDiv" class="operator" onclick="key('/')">
                  /</button>
        </div>
      </div>
    </div>
  </div>
</body>
</html>