let monto = 0;
let cuotas = 0;
let interes = 0.05;
let total = 0;



const pedirMonto = () => {
    monto = parseInt(prompt("¿cuanto dinero quiere solicitar? (Minimo 1.000$, Maximo 20.000$"));
    while (isNaN((monto)) || monto < 1.000 || monto > 20.000 ) {
        monto = parseInt(prompt("Ingrese el monto que desea, entre 1.000$ y 20.000$. Recuerde separar con puntos."));
    }
    return monto
}
const pedirCuotas = () => {
    cuotas = parseInt(prompt("¿En cuantas cuotas desea devolverlo? 1-12"))
    while (isNaN(cuotas) || cuotas > 12 || cuotas == 0) {
        cuotas = parseInt(prompt("Ingrese en cuantas cuotas desea devolverlo, de 1 a 12"))
    } 
    return cuotas
}
pedirMonto();
pedirCuotas();


const calcularInteres = (monto, interes, cuotas) => {
    total = monto * interes / cuotas
} 


calcularInteres ();
alert("Tu total a pagar durante" +" "+ cuotas +" "+ "meses, es de:" + total)

