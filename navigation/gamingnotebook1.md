---
layout: base
title: Advanced Cookie Clicker
---

# Advanced Cookie Clicker Game 🍪

Click the cookie to earn points! Upgrade your clicking power and buy auto-clickers to generate cookies automatically.

<div style="text-align:center;">
  <img id="cookie" src="https://static.vecteezy.com/system/resources/previews/035/490/024/original/ai-generated-cookie-clipart-design-illustration-free-png.png" alt="Cookie" width="200" height="200" onclick="addCookie()" class="clickable">
  <p>Cookies Collected: <span id="cookieCount">0</span></p>

  <h3>Upgrades</h3>
  <button id="upgradeClick" onclick="buyUpgradeClick()">
    <img src="https://img.icons8.com/ios-filled/50/000000/cookie.png" alt="Click Upgrade Icon" style="width: 20px; vertical-align: middle;">
    Buy Click Upgrade (Cost: 50 cookies) — +1 cookie per click
  </button><br>
  <button id="upgradeAutoClicker" onclick="buyAutoClicker()">
    <img src="https://img.icons8.com/ios-filled/50/000000/automation.png" alt="Auto Clicker Icon" style="width: 20px; vertical-align: middle;">
    Buy Auto Clicker (Cost: 100 cookies) — Generates 1 cookie/second
  </button><br>
  <button id="upgradeGrandma" onclick="buyGrandma()">
    <img src="https://img.icons8.com/ios-filled/50/000000/grandmother.png" alt="Grandma Icon" style="width: 20px; vertical-align: middle;">
    Buy Grandma (Cost: 200 cookies) — Generates 5 cookies/second
  </button><br>
  <button id="upgradeFactory" onclick="buyFactory()">
    <img src="https://img.icons8.com/ios-filled/50/000000/factory.png" alt="Factory Icon" style="width: 20px; vertical-align: middle;">
    Buy Factory (Cost: 500 cookies) — Generates 20 cookies/second
  </button>

  <h3>Stats</h3>
  <p>Cookies Per Click: <span id="cookiesPerClick">1</span></p>
  <p>Auto Clicker Owned: <span id="autoClickerCount">0</span></p>
  <p>Grandma Owned: <span id="grandmaCount">0</span></p>
  <p>Factory Owned: <span id="factoryCount">0</span></p>
  <button onclick="resetGame()">Reset Game</button>

  <h3>Achievements</h3>
  <p id="achievementMessage"></p>
</div>

<style>
  .clickable {
    transition: transform 0.1s ease;
  }

  .clickable:active {
    transform: scale(1.1);
  }

  .clickEffect {
    position: absolute;
    border-radius: 50%;
    background: rgba(255, 223, 0, 0.6);
    pointer-events: none;
    animation: pop 0.3s ease-out;
  }

  @keyframes pop {
    from { transform: scale(0.5); opacity: 1; }
    to { transform: scale(1.5); opacity: 0; }
  }
</style>

<script>
  let cookieCount = 0;
  let cookiesPerClick = 1;
  let autoClickerCount = 0;
  let grandmaCount = 0;
  let factoryCount = 0;
  let autoClickerCost = 100;
  let upgradeClickCost = 50;
  let grandmaCost = 200;
  let factoryCost = 500;
  
  function addCookie() {
    cookieCount += cookiesPerClick;
    document.getElementById('cookieCount').innerText = cookieCount;
    createClickEffect(event.clientX, event.clientY);
    checkAchievements();
  }

  function createClickEffect(x, y) {
    const effect = document.createElement('div');
    effect.classList.add('clickEffect');
    effect.style.width = '50px';
    effect.style.height = '50px';
    effect.style.left = `${x - 25}px`;
    effect.style.top = `${y - 25}px`;
    document.body.appendChild(effect);

    setTimeout(() => {
      effect.remove();
    }, 300);
  }

  function buyUpgradeClick() {
    if (cookieCount >= upgradeClickCost) {
      cookieCount -= upgradeClickCost;
      cookiesPerClick++;
      upgradeClickCost = Math.floor(upgradeClickCost * 1.5);
      document.getElementById('cookieCount').innerText = cookieCount;
      document.getElementById('cookiesPerClick').innerText = cookiesPerClick;
      document.getElementById('upgradeClick').innerText = `Buy Click Upgrade (Cost: ${upgradeClickCost} cookies) — +1 cookie per click`;
    } else {
      alert("Not enough cookies!");
    }
  }

  function buyAutoClicker() {
    if (cookieCount >= autoClickerCost) {
      cookieCount -= autoClickerCost;
      autoClickerCount++;
      autoClickerCost = Math.floor(autoClickerCost * 1.5);
      document.getElementById('cookieCount').innerText = cookieCount;
      document.getElementById('autoClickerCount').innerText = autoClickerCount;
      document.getElementById('upgradeAutoClicker').innerText = `Buy Auto Clicker (Cost: ${autoClickerCost} cookies) — Generates ${autoClickerCount} cookie/second`;
      startAutoClicker();
    } else {
      alert("Not enough cookies!");
    }
  }

  function buyGrandma() {
    if (cookieCount >= grandmaCost) {
      cookieCount -= grandmaCost;
      grandmaCount++;
      grandmaCost = Math.floor(grandmaCost * 1.5);
      document.getElementById('cookieCount').innerText = cookieCount;
      document.getElementById('grandmaCount').innerText = grandmaCount;
      document.getElementById('upgradeGrandma').innerText = `Buy Grandma (Cost: ${grandmaCost} cookies) — Generates ${5 * grandmaCount} cookies/second`;
      startGrandma();
    } else {
      alert("Not enough cookies!");
    }
  }

  function buyFactory() {
    if (cookieCount >= factoryCost) {
      cookieCount -= factoryCost;
      factoryCount++;
      factoryCost = Math.floor(factoryCost * 1.5);
      document.getElementById('cookieCount').innerText = cookieCount;
      document.getElementById('factoryCount').innerText = factoryCount;
      document.getElementById('upgradeFactory').innerText = `Buy Factory (Cost: ${factoryCost} cookies) — Generates ${20 * factoryCount} cookies/second`;
      startFactory();
    } else {
      alert("Not enough cookies!");
    }
  }

  function startAutoClicker() {
    setInterval(function() {
      cookieCount += autoClickerCount;
      document.getElementById('cookieCount').innerText = cookieCount;
    }, 1000);
  }

  function startGrandma() {
    setInterval(function() {
      cookieCount += 5 * grandmaCount;
      document.getElementById('cookieCount').innerText = cookieCount;
    }, 1000);
  }

  function startFactory() {
    setInterval(function() {
      cookieCount += 20 * factoryCount;
      document.getElementById('cookieCount').innerText = cookieCount;
    }, 1000);
  }

  function resetGame() {
    cookieCount = 0;
    cookiesPerClick = 1;
    autoClickerCount = 0;
    grandmaCount = 0;
    factoryCount = 0;
    upgradeClickCost = 50;
    autoClickerCost = 100;
    grandmaCost = 200;
    factoryCost = 500;
    document.getElementById('cookieCount').innerText = cookieCount;
    document.getElementById('cookiesPerClick').innerText = cookiesPerClick;
    document.getElementById('autoClickerCount').innerText = autoClickerCount;
    document.getElementById('grandmaCount').innerText = grandmaCount;
    document.getElementById('factoryCount').innerText = factoryCount;
    document.getElementById('upgradeClick').innerText = `Buy Click Upgrade (Cost: ${upgradeClickCost} cookies) — +1 cookie per click`;
    document.getElementById('upgradeAutoClicker').innerText = `Buy Auto Clicker (Cost: ${autoClickerCost} cookies) — Generates ${autoClickerCount} cookie/second`;
    document.getElementById('upgradeGrandma').innerText = `Buy Grandma (Cost: ${grandmaCost} cookies) — Generates ${5 * grandmaCount} cookies/second`;
    document.getElementById('upgradeFactory').innerText = `Buy Factory (Cost: ${factoryCost} cookies) — Generates ${20 * factoryCount} cookies/second`;
  }

  function checkAchievements() {
    const achievementMessage = document.getElementById('achievementMessage');
    if (cookieCount >= 1000 && !achievementMessage.innerText.includes("Cookie Master")) {
      achievementMessage.innerText = "Achievement Unlocked: Cookie Master - Collected 1000 cookies!";
    }
  }
</script>
