//JAVASCRIPT PROGRAM FOR THE SIMPLE CALCULATOR

/*let num1=document.querySelector("#num1");
let num2=document.querySelector("#num2");
let btnAdd=document.querySelector("#btnAdd");
let btnSub=document.querySelector("#btnSub");
let btnMul=document.querySelector("#btnMul");
let btnDiv=document.querySelector("#btnDiv");
let result=document.querySelector("#result");
let resultbox=document.querySelector("#resultbox");

btnAdd.addEventListener("click",add);
btnSub.addEventListener("click",sub);
btnMul.addEventListener("click",mul);
btnDiv.addEventListener("click",div);

function add()
{
    let a=parseInt(num1.value);
    let b=parseInt(num2.value);
    resultbox.value=a+b;
    result.innerText=a+b;
}

function sub()
{
    let a=parseInt(num1.value);
    let b=parseInt(num2.value);
    resultbox.value=a-b;
    result.innerText=a-b;
}

function mul()
{
    let a=parseInt(num1.value);
    let b=parseInt(num2.value);
    resultbox.value=a*b;
    result.innerText=a*b;
}

function div()
{
    let a=parseInt(num1.value);
    let b=parseInt(num2.value);
    resultbox.value=a/b;
    result.innerText=a/b;
}*/



//JAVASCRIPT PROGRAM FOR THE REAL CALCULATOR

/*let input = document.getElementById("inputBox");
let buttons = document.querySelectorAll("button");

let string = "";
let arr = Array.from(buttons);
arr.forEach((button) => {
    button.addEventListener("click", function (event) {
        event.preventDefault();
    });

    button.addEventListener("click", (e) => {
        if (e.target.innerHTML == "=") { 
            string = eval(string);
            input.value = string;
        }
        else if (e.target.innerHTML == "AC") {
            string = "";
            input.value = string;
        }
        else if(e.target.innerHTML == "DE"){
            string = string.substring(0, string.length - 1);
            input.value = string;
        }
        else{
        string += e.target.innerHTML;
        input.value = string;
    }
    })
})*/



//JAVASCRIPT FOR CALCULATOR DESIGNED BY SIR
let num1 = 0;
let operator = "";
let isreset = false;
let display = document.querySelector("#display");
let digits = document.querySelectorAll(".digits");

let equalBtn = document.querySelector("#equalBtn");
equalBtn.addEventListener("click", equalClick);

let addBtn = document.querySelector("#addBtn");
addBtn.addEventListener("click", addClick);

let subBtn = document.querySelector("#subBtn");
subBtn.addEventListener("click", subClick);


let mulBtn = document.querySelector("#mulBtn");
mulBtn.addEventListener("click", mulClick);


let divBtn = document.querySelector("#divBtn");
divBtn.addEventListener("click", divClick);

let acBtn = document.querySelector("#acBtn");
acBtn.addEventListener("click", acClick);

let deBtn = document.querySelector("#deBtn");
deBtn.addEventListener("click", deClick);


for (i = 0; i < digits.length; i++)
    digits[i].addEventListener("click", digitsClick);

function digitsClick(event) {
    if (display.value == "0") {
        display.value = "";
    }
    else {
        display.value = display.value + event.target.innerText;
    }
}

function addClick() {
    num1 = parseFloat(display.value);
    operator = "+";
    display.value = "0";
}

function subClick() {
    num1 = parseFloat(display.value);
    operator = "-";
    display.value = "0";
}

function mulClick() {
    num1 = parseFloat(display.value);
    operator = "*";
    display.value = "0";
}

function divClick() {
    num1 = parseFloat(display.value);
    operator = "/";
    display.value = "0";
}

function acClick() {
    operator = "AC";
    display.value = "0";
}

function deClick() {
    operator = "DE";
    display.value = display.value.substring(0, display.value.length - 1);
}

function equalClick() {
    if (operator == "+") {
        let num2 = parseFloat(display.value);
        result = num1 + num2;
        display.value = result;
    }
    else if (operator == "-") {
        let num2 = parseFloat(display.value);
        result = num1 - num2;
        display.value = result;
    }
    else if (operator == "*") {
        let num2 = parseFloat(display.value);
        result = num1 * num2;
        display.value = result;
    }
    else if (operator == "/") {
        let num2 = parseFloat(display.value);
        result = num1 / num2;
        display.value = result;
    }
}



//JAVASCRIPT FOR ARRAY BY ADDING AND DELETING ELEMENTS FROM INPUT

let array = [];
let arrayResultBox = document.querySelector("#arrayResultBox");
let arrayAddBox = document.querySelector("#arrayAddBox");
let arrayDelBox = document.querySelector("#arrayDelBox");

let arrayAddBtn = document.querySelector("#arrayAddBtn");
arrayAddBtn.addEventListener("click", arrayAddClick);

let arrayDelBtn = document.querySelector("#arrayDelBtn");
arrayDelBtn.addEventListener("click", arrayDelClick);

function arrayAddClick()
{
    array.push(arrayAddBox.value);
    arrayResultBox.value=array;
    console.log(array);
    arrayAddBox.value="";
}

function arrayDelClick()
{
    array.splice(array.indexOf(arrayDelBox.value),1);
    arrayResultBox.value=array;
    console.log(array);
    arrayDelBox.value="";
}



//JAVASCRIPT FOR SIMPLE LETTER GUESSING GAME

let lives=3;
let title=document.querySelector("#title");
let lifeline=document.querySelector("#lifeline");
let letter=document.querySelector("#letter");
let verify=document.querySelector("#verify");
let hangmanArray=["LUDO", "POLO", "GOLF", "JUDO"];

let correct=[];

let data=hangmanArray(0);

function stars()
{
    let str="";
    for(i=0; i<data.length; i++)
    {
        if(correct.indexOf(data[i]!=-1))
            str=str+data[i];
        else
        str=str+"*";
    }
    title.innerHTML=str;

}

stars(data);
verify.addEventListener("click", verifyClick);

function verifyClick()
{
    let.posn=data.indexOf(letter.value);
    if(posn==-1)
    {
        lives--;
        lifeline.innerHTML=lives;
        if(lives==0)
            verify.style.display="none";
    }
    else{
        correct.push(letter.value);
        stars(data);
    }
}
