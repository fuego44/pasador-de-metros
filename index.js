/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/


let btn = document.getElementById("btn")
let inputEl = document.getElementById("input-el")
let metroP = document.getElementById("metros");
let litroD = document.getElementById("litros")
let kilosD = document.getElementById("kilos")
let error = document.getElementById("texto")

function metros(n) {
    let valor = 0
    valor += Number(n)
    let metros =(valor * 3.28084).toFixed(3)
    let feet = (valor * 0.3048).toFixed(3)
    metroP.innerHTML = `<p>${Number(n)} metros = ${metros} feet | ${Number(n)} feet = ${feet} metros</p>`
}

function litros(n) {
    let valor = 0
    valor += Number(n)
    let litro =(valor * 0.264).toFixed(3)
    let gallons = (valor * 3.78541).toFixed(3)
    litroD.innerHTML = `<p>${Number(n)} litros = ${litro} gallons | ${Number(n)} gallons = ${gallons} litros</p>`
}

function kilos(n) {
    let valor = 0
    valor += Number(n)
    let kilos =(valor * 2.204).toFixed(3)
    let pound = (valor * 0.45).toFixed(3)
    kilosD.innerHTML = `<p>${Number(n)} kilogram = ${kilos} pounds | ${Number(n)} pound = ${pound} kilogram</p>`
}

btn.addEventListener("click", function() {
    if(Number(inputEl.value) || Number(inputEl.value) === 0 ) {
        error.innerHTML = ""
   metros(inputEl.value)
   litros(inputEl.value)
   kilos(inputEl.value)
  }
   else {
       error.innerHTML = `<p id="error">Ponga un numero</p>`
   }
    inputEl.value = ""
})