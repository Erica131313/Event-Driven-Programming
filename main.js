let buttons = document.querySelectorAll(".btn");
console.log(buttons);
buttons.forEach((btn)=>{
  btn.addEventListener("click", output);
  function output(){
    alert("I have been clicked");
  }
});
