const numeros = document.querySelectorAll(".btnNum");
const operador = document.querySelectorAll(".btnOp");
const visor = document.getElementById("mostrar")

let primerNum = [];
let segundoNum = [];
let operacion = undefined;
let subTotal = [];


function sumar(a,b) {
    return parseFloat(a) + parseFloat(b);
}
function restar (a,b){
    return parseFloat(a)- parseFloat(b);
}
function multiplicar(a,b) {
    return parseFloat(a) * parseFloat(b);
}
function dividir(a,b) {
    return parseFloat(a) / parseFloat(b);
};
numeros.forEach((boton)=>{
    boton.addEventListener("click",()=>{
        if (operacion == undefined) {
            primerNum += boton.textContent
            primerNum = parseInt(primerNum)
            visor.textContent = primerNum
        }
        else{
            segundoNum += boton.textContent
            segundoNum = parseInt(segundoNum)
            visor.textContent = segundoNum
        }  
    })   
});
function dellete(event) {
    visor.textContent = ""
}

operador.forEach((e)=>{
    e.addEventListener("click",()=>{
        operacion = e.textContent;
        visor.textContent = operacion
    })
});
function resultado() {
    let resultadoFinal;
    switch (operacion) {
            case "+":
              resultadoFinal = sumar(primerNum,segundoNum)
                break;
            case "-":
                resultadoFinal = restar(primerNum,segundoNum)
                break;
            case "*":
                resultadoFinal = multiplicar(primerNum,segundoNum)
                break;
            case "/":
                 resultadoFinal = dividir(primerNum,segundoNum)
                break;
  
            default:
                resultadoFinal = "operacion invalida"
                break;
    } 
    visor.textContent = resultadoFinal

     primerNum = [];
    segundoNum = [];
    operacion = undefined;

}
