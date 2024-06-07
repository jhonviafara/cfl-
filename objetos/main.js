//crear objetos literales
let computadora = {
    color:"negro",
    marca : "lenovo thinkpad",
    procesador :"intel core i5",
    tieneTargetaBluetoo:true,
    esPantallaTactil: false,
    encender : function () {
        console.log("computadora encendida")
        },
    apagar : function () {
        console.log(this.marca+ " apagada")
    }
}
console.log(computadora.apagar())