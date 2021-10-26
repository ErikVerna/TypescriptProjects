"use strict";
var hexValues = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
];
var btn = document.getElementById("btn");
var color = document.querySelector(".color");
btn.addEventListener("click", function () {
    generateCalor(function (x) {
        color.textContent = x;
        document.body.style.backgroundColor = x;
    });
});
function generateCalor(update) {
    var hexColor = "#";
    for (var i = 0; i < 6; i++) {
        hexColor += hexValues[getRandomNumber()];
    }
    update(hexColor);
}
function getRandomNumber() {
    return Math.floor(Math.random() * hexValues.length);
}
