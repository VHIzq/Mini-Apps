//initial count
let count = 0;
//select all the btns and value
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn"); // lista anidada
/* console.log(btns); */
btns.forEach(function (btn){
  /* console.log(item); */
  btn.addEventListener("click", function(e){
    /* console.log(e.currentTarget); */
    const styles = e.currentTarget.classList;
    if(styles.contains("decrease")){
      count--;
    }
    else if(styles.contains("increase")){
      count++;
    }else{
      count = 0;
    }
    if(count > 0){
      value.style.color = "green";
    }
    if(count < 0){
      value.style.color = "red";
    }
    if(count === 0){
      value.style.color ="#222";
    }
    value.textContent = count;
  });
});