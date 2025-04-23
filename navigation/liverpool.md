---
layout: base
title: Liverpool FC
description: Official Liverpool FC Home Page
---

<!-- Navbar -->
<div style="background-color: black; padding: 15px; text-align: center;">
  <a href="players.html" style="color: #a0001b; text-decoration: none; margin: 0 15px;">Players</a>
  <a href="history.html" style="color: #a0001b; text-decoration: none; margin: 0 15px;">History</a>
  <a href="transfers.html" style="color: #a0001b; text-decoration: none; margin: 0 15px;">Transfers</a>
  <a href="contact.html" style="color: #a0001b; text-decoration: none; margin: 0 15px;">Contact</a>
</div>

<h1 style="color: #a0001b; font-family: 'Georgia, serif';">Liverpool Football Club</h1>
<img src="https://upload.wikimedia.org/wikipedia/en/thumb/0/0c/Liverpool_FC.svg/1200px-Liverpool_FC.svg.png" alt="Liverpool FC Crest" style="width: 200px;">

<h2 style="color: #a0001b;">Welcome to Liverpool FC</h2>
<p>Founded in 1892, Liverpool FC is one of the most iconic and successful football clubs in the world. Our home is the legendary Anfield stadium, where we continue to make history.</p>

<h3 style="color: #a0001b;">Latest News</h3>
<ul>
  <li><a href="#">Arne Slot's first pre-season with Liverpool underway</a></li>
  <li><a href="#">New signings settling in well, says captain Van Dijk</a></li>
  <li><a href="#">Ticket information for upcoming Premier League fixtures</a></li>
</ul>

## Anfield Stadium

![Anfield Stadium](https://www.leisureopportunities.co.uk/images/572951_28864.jpg)

<p>Anfield is the historic home of Liverpool Football Club, known for its incredible atmosphere and passionate fans. Located in the heart of Liverpool, the stadium has been the club's home since its formation in 1892.</p>

<h3 style="color: #a0001b;">Key Facts:</h3>
<ul>
  <li><strong>Capacity:</strong> 53,394</li>
  <li><strong>Opened:</strong> 1884 (Liverpool's home since 1892)</li>
  <li><strong>Famous Stand:</strong> The Kop, known for its powerful chants and support</li>
  <li><strong>Unique Feature:</strong> "You'll Never Walk Alone" anthem sung before every match</li>
  <li><strong>Significant Matches:</strong> Numerous iconic European nights, including Liverpool’s 4-0 victory over Barcelona in the 2019 Champions League semi-final</li>
</ul>

<!-- Liverpool FC Themed Jokes Section -->
<h2 style="color: #a0001b;">Liverpool FC Jokes</h2>
<div id="joke-container" style="color: #a0001b; font-family: 'Georgia, serif'; margin-bottom: 20px;">
  <p>Click the button to hear a Liverpool-themed joke:</p>
  <button onclick="tellJoke()" style="background-color: #a0001b; color: white; padding: 10px; border: none; cursor: pointer;">Get a Joke</button>
  <p id="joke" style="font-weight: bold; margin-top: 15px;"></p>
</div>

<script>
  const jokes = [
    "Why did the Liverpool player bring a ladder to the game? Because they wanted to climb the league table!",
    "Why do Liverpool fans always carry a pencil and paper? In case they need to draw a match!",
    "What does a Liverpool fan do when their team wins the Premier League? They turn off their PlayStation!",
    "Why did the Anfield grass look so good? Because it got plenty of Klopp’s attention!",
    "Why don’t Liverpool players ever get lost? Because they always follow Klopp’s directions!"
  ];

  function tellJoke() {
    const randomIndex = Math.floor(Math.random() * jokes.length);
    document.getElementById('joke').innerText = jokes[randomIndex];
  }
</script>
