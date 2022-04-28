/*var randomNumber1 = Math.random(); //Number b/w 0-0.9999
randomNumber1 = randomNumber1 * 6;
randomNumber1 = Math.floor(randomNumber1) + 1;
console.log(randomNumber1);*/

//  OR


//  Dice 1
var randomNumber1 = Math.floor(Math.random() * 6 + 1); //Number b/w 1-6

var randomDiceImage = "dice" + randomNumber1 + ".png"; //dice1.png to dice6.png

var randomImageSource = "images/" + randomDiceImage // images/dice1.png to images/dice6.png

var Image = document.querySelectorAll("img")[0];

Image.setAttribute("src", randomImageSource);


//  For Dice 2
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
} else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
} else {
    document.querySelector("h1").innerHTML = "🙃DRAW :( 🙃";
}