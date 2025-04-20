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

let input = document.getElementById("inputBox");
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
})
