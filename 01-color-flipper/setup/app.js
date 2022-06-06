const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.getElementById("btn")

btn.addEventListener("click", function(){
    document.body.style.backgroundColor = colors[Math.random(colors.length)]
})