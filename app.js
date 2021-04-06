const display = document.querySelector("input");
const buttons = document.querySelectorAll("button");

let sereenVal = "";


  
for (button of buttons) {
  button.addEventListener("click", (e) => {
    buttonText = e.target.innerText;

    if (buttonText == "X") {
      buttonText = "*";
      sereenVal += buttonText;
      display.value = sereenVal;
    }
     else if (buttonText == "=") {
        display.value = eval(sereenVal);
    }
    else if(buttonText == "C"){
        sereenVal = '';
        display.value = sereenVal
    }
     else {
      sereenVal += buttonText;
      display.value = sereenVal;
    }
  });
}
