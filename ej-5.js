/* Plan de datos:

Simula el consumo de datos de un plan móvil. Crea una variable
para almacenar el límite de datos y otra para el consumo actual.
Utiliza por ejemplo un ciclo while para ir incrementando el
consumo hasta alcanzar o superar el límite. Cuando se supere el
límite, muestra un mensaje indicando que se ha alcanzado el
límite de datos. */

let limiteDatos = 2048; //MB
let consumoDatos = 0;

while (consumoDatos <= limiteDatos) {
    consumoDatos += parseInt(prompt('consumo en MB'));

    if (consumoDatos > limiteDatos) {
        alert('ya consumió todos los datos')
    } else {
        alert(`Llevas consumidos ${consumoDatos}MB de tu plan de${limiteDatos}MB.
            Te quedan disponibles: ${limiteDatos - consumoDatos}MB`)
    }
}













/* function elegirPlan() {
    
    const planBasico = { nombre: "Básico", datos: "2 GB", precio: 50000 };
    const planEstandar = { nombre: "Estándar", datos: "5 GB", precio: 80000 };
    const planPremium = { nombre: "Premium", datos: "10 GB", precio: 100000 };


    let eleccion = prompt("Hola capo, escribí un número para elegir el plan de datos que querés: 1 para Básico, 2 para Estándar, 3 para Premium:");

    
    let planSeleccionado;

    // Estructura condicional para determinar el plan que seleccionaste
    if (eleccion === "1") {
        planSeleccionado = planBasico;
    } else if (eleccion === "2") {
        planSeleccionado = planEstandar;
    } else if (eleccion === "3") {
        planSeleccionado = planPremium;
    } else {
        alert("Qué haces chamaco? Escribí bien!");
        return;
    }

    // Calcular el precio 
    let precioFinal = planSeleccionado.precio;

    
    let presupuesto = prompt(`El plan ${planSeleccionado.nombre} cuesta $${precioFinal} ¿Cuánta plata tenés?`);

    // Convertir el presupuesto a número
    presupuesto = parseFloat(presupuesto);

    // Esto es para verificar si la conversión estuvo bien y comparar el presupuesto con el precio final
    if (isNaN(presupuesto)) {
        alert("¿Que escribiste?, ingresa un número válido para el presupuesto, Dios mío.");
    } else if (presupuesto >= precioFinal) {
        alert(`Joya Podes adquirir este ;D ${planSeleccionado.nombre}.`);
    } else {
        alert(`Jaja estás pobre, no te alcanza para el ${planSeleccionado.nombre}. Juntá mas plata la próxima.`);
    }
}

elegirPlan(); */