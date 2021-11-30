const buttons = document.querySelectorAll('button');
const display = document.querySelector('.display');
// let dot = document.getElementById('dot')
let dot = ['.'];
let lastChar;
let operators = ['+','-','*','/'];
let hasSubmited = false;
let hasEnteredDot = false;
let allowOpertor = false;
buttons.forEach(function(button) {
      button.addEventListener('click', calculate);
    });

    function calculate(event) {
      const clickedButtonValue = event.target.value;
      if (clickedButtonValue === '=') {
        if (display.value !== '') {
          if (!hasSubmited){
            display.value = eval(display.value);
            hasSubmited = true;
            hasEnteredDot = false

            
          }
        
        }
      } else if (clickedButtonValue === 'del') {
        display.value = '';
      }else if (clickedButtonValue === '<'){
        display.value = display.value.slice(0,-1)
      }
//operators
     else if (operators.indexOf(clickedButtonValue) > -1 ){
         if(allowOpertor || (clickedButtonValue === '-' && lastChar != '.' && lastChar != '-') ){
          
          display.value += clickedButtonValue
          hasSubmited = false
          hasEnteredDot = false
          allowOpertor = false
 
         }
         
       }else if(clickedButtonValue === '.'){
          if(!hasEnteredDot){
            display.value += clickedButtonValue;
            hasEnteredDot = true;
            allowOpertor = false
          }
        
        }else{
          if (hasSubmited){
            display.value = ''
          }
          //numbers
          //console.log(clickedButtonValue)
          display.value += clickedButtonValue;
          hasSubmited = false
          allowOpertor = true
        }
          
          lastChar = clickedButtonValue;
        
        
        }

