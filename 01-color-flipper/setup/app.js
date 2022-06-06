const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.getElementById("btn");

const color = document.getElementById("color");

btn.addEventListener("click", function(){
const randomNumber = getRandomNumber();
    document.body.style.backgroundColor = randomNumber;
    color.textContent = colors[randomNumber]

})

function getRandomNumber(){
   return colors[Math.floor(Math.random()*colors.length)];
}