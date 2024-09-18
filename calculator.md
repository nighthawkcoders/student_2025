---
layout: base
title: Calculator
description: Calculator
permalink: /calc/
image: /images/mario.png
hide: true
---

<html> 
<head> 
	<h style="color: lightblue; font-family: courier new; font-size:45">Number Calculator</h> 
	<script src="https://cdnjs.cloudflare.com/ajax/libs/mathjs/10.6.4/math.js" integrity="sha512-BbVEDjbqdN3Eow8+empLMrJlxXRj5nEitiCAK5A1pUr66+jLVejo3PmjIaucRnjlB0P9R3rBUs3g5jXc8ti+fQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script> 
	<style> 
		table {  
			margin-left: auto; 
			margin-right: auto; 
		} 
		input[type="button"] { 
			width: 100%; 
			padding: 20px 40px; 
			background-color: rgb(180,200, 235); 
			color: white; 
			font-size: 24px; 
			font-weight: bold; 
			border: none; 
			border-radius: 5px; 
		} 
		input[type="text"] { 
			padding: 20px 30px; 
			font-size: 24px; 
			font-weight: bold; 
			border: none; 
			border-radius: 5px; 
			border: 2px solid black; 
		} 
		.history { 
			margin-top: 20px; 
			color: black; 
			font-size: 20px; 
		} 
	</style> 
</head> 
<body> 
	<!-- Calculator Structure -->
	<table id="calcu"> 
		<tr> 
			<td colspan="3"><input type="text" id="result"></td> 
			<td><input type="button" value="clear" onclick="clr()" /> </td> 
		</tr> 
		<tr> 
			<td><input type="button" value="1" onclick="dis('1')"> </td> 
			<td><input type="button" value="2" onclick="dis('2')"> </td> 
			<td><input type="button" value="3" onclick="dis('3')"> </td> 
			<td><input type="button" value="/" onclick="dis('/')"> </td> 
		</tr> 
		<tr> 
			<td><input type="button" value="4" onclick="dis('4')"> </td> 
			<td><input type="button" value="5" onclick="dis('5')"> </td> 
			<td><input type="button" value="6" onclick="dis('6')"> </td> 
			<td><input type="button" value="*" onclick="dis('*')"> </td> 
		</tr> 
		<tr> 
			<td><input type="button" value="7" onclick="dis('7')"> </td> 
			<td><input type="button" value="8" onclick="dis('8')"> </td> 
			<td><input type="button" value="9" onclick="dis('9')"> </td> 
			<td><input type="button" value="-" onclick="dis('-')"> </td> 
		</tr> 
		<tr> 
			<td><input type="button" value="0" onclick="dis('0')"> </td> 
			<td><input type="button" value="." onclick="dis('.')"> </td> 
			<td><input type="button" value="=" onclick="solve()"> </td> 
			<td><input type="button" value="+" onclick="dis('+')"> </td> 
		</tr> 
	</table> 
	