const btns = document.querySelectorAll(".btn")
const value = document.getElementById("value")

let count =0

btns.forEach(function (btn) {
btn.addEventListener("click", function(e){
    const styles = e.currentTarget.classList;
    if (styles.contains("decrease")) {
        count--;
      } else if(styles.contains("increase")){
        count++
      } else{
          count =0;
      }
    if(count<0){
        value.style.color= "red";
    }
    else if(count>0){
        value.style.color= "green";
    }
    else {
        value.style.color= "black";
    }

      value.textContent =count
})
});


