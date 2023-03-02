let numbers = document.getElementsByClassName('numbers');
let result = document.querySelector('.result span');
let signs = document.querySelectorAll('.sign')
let positiveNegative = document.querySelector('.negative');
let equals = document.querySelector('.equal');
let percent = document.querySelector('.percent');
let allClear = document.querySelector('.clear');

let firstValue = "";
let isFirstValue = false;
let secondValue = "";
let isSecondValue = false;
let sign = "";
let resultValue = 0;

for(let i=0; i < numbers.length; i++){
    numbers[i].addEventListener('click' , display);
}

for(let i = 0; i < signs.length; i++){
    signs[i].addEventListener('click' , getSign);
}

equals.addEventListener('click' , getResult);

// allClear.addEventListener('click' , clear);

function display(e){
    let atr = e.target.getAttribute('value');
    if(isFirstValue === false){
       getFirstValue(atr);
    }
    if(isSecondValue === false){
        getSecondValue(atr);
    }
}


function getFirstValue(first){
    result.innerHTML = "";
    firstValue += first;
    result.innerHTML = firstValue;
    firstValue = +firstValue;
}


function getSecondValue(second){
    if(firstValue != "" && sign != ""){
        secondValue += second;
        result.innerHTML = secondValue;
        secondValue = +secondValue;  
    }
}


function getSign(e){
    sign = e.target.getAttribute('value');
    isFirstValue === true;
}


function getResult(){
    result.innerHTML = '';
    if(sign == "+"){
        resultValue = firstValue + secondValue;
    } else if(sign == "-"){
        resultValue = firstValue - secondValue;
    } else if(sign == "x"){
        resultValue = firstValue * secondValue;
    } else if(sign == "/"){
        resultValue = firstValue / secondValue;
    }

    result.innerHTML = +resultValue;
    firstValue = resultValue;
    secondValue = "";

    // checkResultLength();
}



// function checkResultLength(){
//     resultValue = JSON.stringify(resultValue);

//     if(resultValue >= 8){
//         resultValue = JSON.parse(resultValue);
//         result.innerHTML = resultValue.toFixed(5);
//     }
// }


positiveNegative.addEventListener('click' , () => {
    result.innerHTML = "";
    if(firstValue != ""){
        resultValue = -firstValue;
        firstValue = resultValue;
    }
    if(firstValue != "" && sign != "" && secondValue != ""){
        resultValue = -resultValue;
    } 


    result.innerHTML = resultValue;
});


percent.addEventListener('click' , () => {
    result.innerHTML = "";
    if(firstValue != ""){
        resultValue = firstValue / 100;
        firstValue = resultValue;
    }

    if(firstValue != "" && sign != "" && secondValue != ""){
        resultValue = resultValue / 100;
    } 


    result.innerHTML = resultValue;
});


allClear.addEventListener('click' , () => {
    result.innerHTML = 0;

    firstValue = "";
    isFirstValue = false;
    secondValue = "";
    isSecondValue = false;
    sign = "";
    resultValue = 0;
});


