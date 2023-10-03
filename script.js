const oneButton=document.getElementById('oneButton');
const twoButton=document.getElementById('twoButton');
const threeButton=document.getElementById('threeButton');
const fourButton=document.getElementById('fourButton');
const fiveButton=document.getElementById('fiveButton');
const sixButton=document.getElementById('sixButton');
const sevenButton=document.getElementById('sevenButton');
const eightButton=document.getElementById('eightButton');
const nineButton=document.getElementById('nineButton');
const zeroButton=document.getElementById('zeroButton');
const plusButton=document.getElementById('plusButton');
const minusButton=document.getElementById('minusButton');
const timesButton=document.getElementById('timesButton');
const divideButton=document.getElementById('divideButton');
const equalButton=document.getElementById('equalButton');
const clearButton=document.getElementById('clearButton');
var calculatorDisplay=document.getElementById('calculatorDisplay');
var char="";

oneButton.onclick=function(){
    char=char+parseInt(oneButton.value);
    calculatorDisplay.innerHTML=char;
}

twoButton.onclick=function(){
    char=char+parseInt(twoButton.value);
    calculatorDisplay.innerHTML=char;
}

threeButton.onclick=function(){
    char=char+parseInt(threeButton.value);
    calculatorDisplay.innerHTML=char;
}

fourButton.onclick=function(){
    char=char+parseInt(fourButton.value);
    calculatorDisplay.innerHTML=char;
}

fiveButton.onclick=function(){
    char=char+parseInt(fiveButton.value);
    calculatorDisplay.innerHTML=char;
}

sixButton.onclick=function(){
    char=char+parseInt(sixButton.value);
    calculatorDisplay.innerHTML=char;
}

oneButton.onclick=function(){
    char=char+parseInt(oneButton.value);
    calculatorDisplay.innerHTML=char;
}

sevenButton.onclick=function(){
    char=char+parseInt(sevenButton.value);
    calculatorDisplay.innerHTML=char;
}

eightButton.onclick=function(){
    char=char+parseInt(eightButton.value);
    calculatorDisplay.innerHTML=char;
}

nineButton.onclick=function(){
    char=char+parseInt(nineButton.value);
    calculatorDisplay.innerHTML=char;
}

oneButton.onclick=function(){
    char=char+parseInt(oneButton.value);
    calculatorDisplay.innerHTML=char;
}

zeroButton.onclick=function(){
    char=char+parseInt(zeroButton.value);
    calculatorDisplay.innerHTML=char;
}

plusButton.onclick=function(){
    char=char+plusButton.value;
    calculatorDisplay.innerHTML=char;
}

minusButton.onclick=function(){
    char=char+minusButton.value;
    calculatorDisplay.innerHTML=char;
}

timesButton.onclick=function(){
    char=char+timesButton.value;
    calculatorDisplay.innerHTML=char;
}

divideButton.onclick=function(){
    char=char+divideButton.value;
    calculatorDisplay.innerHTML=char;
}

equalButton.onclick=function(){
    var splicer=char.split("+");
    // for(var i=0;i<splicer.length;i){
    //     var sum=0;
    //     sum=sum+splicer;
    // }
    console.log(eval(char));

    calculatorDisplay.innerHTML=eval(char);
    char=eval(char);
};

clearButton.onclick=function(){
    char="0";
    calculatorDisplay.innerHTML=char;
};