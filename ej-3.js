/* Llamadas:

Crea un programa que simule el registro de llamadas. Utiliza un
arreglo para almacenar objetos que representen cada llamada
(con propiedades como: número marcado, duración y fecha).
Luego, utilizando un ciclo y condicionales, muestra un resumen
de las llamadas, indicando las llamadas de más de 5 minutos. */

let listaDeLlamadas = [
    {
        numeroMarcado: '+5493546511110',
        duracionLlamada: 330, // en segundos
        fecha: '2019/11/17'
    },
    {
        numeroMarcado: '+5493546511119',
        duracionLlamada: 210, // en segundos
        fecha: '2020/01/20'
    },
    {
        numeroMarcado: '+5493546511118',
        duracionLlamada: 25, // en segundos
        fecha: '2023/03/01'
    },
    {
        numeroMarcado: '+5493546511117',
        duracionLlamada: 433, // en segundos
        fecha: '2000/05/05'
    },
    {
        numeroMarcado: '+5493546511116',
        duracionLlamada: 3821, // en segundos
        fecha: '2002/02/20'
    },
    {
        numeroMarcado: '+5493546511115',
        duracionLlamada: 1954, // en segundos
        fecha: '2024/08/10'
    },];

   

    listaDeLlamadas.forEach(element => {
        if (element.duracionLlamada > 300){
            console.log(`📲 Esta llamada al teléfono ${element.numeroMarcado}, fechada el ${element.fecha} fue de ${element.duracionLlamada} segundos (superó los 5 minutos de duración)`);
        } else {
            console.log(`Esta llamada al teléfono ${element.numeroMarcado}, fechada el ${element.fecha} fue de ${element.duracionLlamada} segundos (es menor a los los 5 minutos de duración)`);
        }
    });

