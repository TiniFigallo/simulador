let interes = 0
let resultado = 0

function operando () {
    let monto = Number(prompt("Ingrese el monto de plazo fijo deseado. Hasta 10000 pesos"));
    switch (true) {
        case monto <= 3000:
            interes = 1.1
            resultado = monto * interes;
            return (resultado);    
        case monto <= 5000:
            interes = 1.2
            resultado = monto * interes;
            return (resultado);
        case monto <= 10000:
            interes = 1.25
            resultado = monto * interes;
            return (resultado); 
    }
}

alert(`En base al plazo fijo solicitado, el monto a generar es ${operando()}`);




/* let monto = 0;
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

---- */


/* 


    switch (monto) {
        case >=10000:
           totalConTasa = monto + 0,05;
           alert("Recibiras en 30 días un valor de" + totalConTasa)
           break;
        case <10000:
            TotalConTasa = monto + 0,03;
            alert("Recibiras en 30 días un valor de" + totalConTasa)
            break;
        default:
            alert("Recorda que sea hasta 20.000");
            break;
    }

    return total;
}
const calcularTasa = (TotalconTasa, cuotas) => {
    total += precioProducto * cantidadProducto;

const cuotas = () => {
    let cuantascuotas = parseInt(prompt("Ingrese la cantidad de cuotas 1-12"));
    while (isNaN(cantidad)) {
        cantidad = parseInt(prompt("Ingrese la cantidad de cuotas de 1 a 12 cuotas")); 
    }
    return cantidad;
}

const calcularTotal = (precioProducto, cantidadProducto) => {
    total += precioProducto * cantidadProducto;
    // total = total + precioProducto * cantidadProducto;
}

function init() {
    calcularTotal(pedirProducto(), pedirCantidad());
    console.log(total);
}

init();




// pedirNombre();
// console.log(nombre) */