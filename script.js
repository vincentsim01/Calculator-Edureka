const oneButton=document.getElementById('oneButton');
const twoButton=document.getElementById('twoButton');
const plusButton=document.getElementById('plusButton');
const equalButton=document.getElementById('equalButton');
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

plusButton.onclick=function(){
    char=char+plusButton.value;
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
};