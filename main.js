// document.getElementById('seven')
//
// // function display(parameters){
// //   if event listener button click is true {
// //     print button value to output
// //   }
//
//   function displayOutput(value of seven) {
//     if true{
//       print value to output
//     }
//   }
//
// seven.addEventListener(onclick, )
//
// button.onclick()

// function displayOutput() {
//     document.getElementById("seven").style.color = "blue";
// }


let outputResult = document.getElementById("result")
//row one
let buttonSeven = document.getElementById("seven")
buttonSeven.addEventListener("click", sevenHandler);
function sevenHandler(){
  outputResult.innerHTML+='7';
}
let buttonEight = document.getElementById("eight")
buttonEight.addEventListener("click", eightHandler);
function eightHandler(){
  outputResult.innerHTML+='8';
}
let buttonNine = document.getElementById("nine")
buttonNine.addEventListener("click", nineHandler);
function nineHandler(){
  outputResult.innerHTML+='9';
}
let buttonDivide = document.getElementById("divide")
buttonDivide.addEventListener("click", divideHandler);
function divideHandler(){
  outputResult.innerHTML+='/';
}
//row two
let buttonFour = document.getElementById("four")
buttonFour.addEventListener("click", fourHandler);
function fourHandler(){
  outputResult.innerHTML+='4';
}
let buttonFive = document.getElementById("five")
buttonFive.addEventListener("click", fiveHandler);
function fiveHandler(){
  outputResult.innerHTML+='5';
}
let buttonSix = document.getElementById("six")
buttonSix.addEventListener("click", sixHandler);
function sixHandler(){
  outputResult.innerHTML+='6';
}
let buttonMultiply = document.getElementById("multiply")
buttonMultiply.addEventListener("click", multiplyHandler);
function multiplyHandler(){
  outputResult.innerHTML+='*';
}
//row three
let buttonOne = document.getElementById("one")
buttonOne.addEventListener("click", oneHandler);
function oneHandler(){
  outputResult.innerHTML+='1';
}
let buttonTwo = document.getElementById("two")
buttonTwo.addEventListener("click", twoHandler);
function twoHandler(){
  outputResult.innerHTML+='2';
}
let buttonThree = document.getElementById("three")
buttonThree.addEventListener("click", threeHandler);
function threeHandler(){
  outputResult.innerHTML+='3';
}
let buttonSubtract = document.getElementById("subtract")
buttonSubtract.addEventListener("click", subtractHandler);
function subtractHandler(){
  outputResult.innerHTML+='-';
}
//row four
let buttonZero = document.getElementById("zero")
buttonZero.addEventListener("click", zeroHandler);
function zeroHandler(){
  outputResult.innerHTML+='0';
}
let buttonDecimal = document.getElementById("decimal")
buttonDecimal.addEventListener("click", decimalHandler);
function decimalHandler(){
  outputResult.innerHTML+='.';
}
let buttonAdd = document.getElementById("add")
buttonTwo.addEventListener("click", addHandler);
function addHandler(){
  outputResult.innerHTML+='+';
}


//equals
let buttonEquals = document.getElementById("equals")
buttonEquals.addEventListener("click", equalsHandler);
function equalsHandler(){
  // outputResult.innerHTML;
let equation = outputResult.innerHTML;
  console.log(equation);
  let result = eval(equation);
  console.log(result);
  outputResult.innerHTML = result;
}


//clear
let buttonClear = document.getElementById("clear")
buttonClear.addEventListener("click", clearHandler);
function clearHandler(){
  outputResult.innerHTML='';
}
