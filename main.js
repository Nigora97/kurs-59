function sum(){
    let a = +document.getElementsByName("a")[0].value
    let b = +document.getElementsByName("b")[0].value
    let result = document.getElementById("result")
let c = a + b
result.innerHTML= "Результат: " + c

}

function output(){
    let a = +document.getElementsByName("a")[0].value
    let b = +document.getElementsByName("b")[0].value
    let result = document.getElementById("result")
let c = a - b
result.innerHTML= "Результат: " + c

}

function multiplay(){
    let a = +document.getElementsByName("a")[0].value
    let b = +document.getElementsByName("b")[0].value
    let result = document.getElementById("result")
let c = a * b
result.innerHTML= "Результат: " + c

}

function apple(){
    let a = +document.getElementsByName("a")[0].value
    let b = +document.getElementsByName("b")[0].value
    let result = document.getElementById("result")
let c = a / b
result.innerHTML= "Результат: " + c

}

function orange(){
    let a = +document.getElementsByName("a")[0].value
    let b = +document.getElementsByName("b")[0].value
    let result = document.getElementById("result")
let c = a ** b
result.innerHTML= "Результат: " + c
}