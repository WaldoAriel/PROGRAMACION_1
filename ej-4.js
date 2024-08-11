/* Aplicaciones:

Crea un objeto literal que represente una aplicación de tu
teléfono. Este objeto debe tener propiedades como: nombre,
categoría, tamaño y calificación. Puedes utilizar un switch case
para mostrar un mensaje diferente según la categoría de la
aplicación (por ejemplo, "Juego", "Redes sociales", "Utilidad"). */



let insta = {
    nombre: 'Instagram',
    categoria: 'Redes Sociales',
    tamaño: '3 MB',
    calificacion: 5
};
let candyCrush = {
    nombre: 'Candy Crush',
    categoria: 'Juegos',
    tamaño: '6 MB',
    calificacion: 3
};
let tiktok = {
    nombre: 'TikTok',
    categoria: 'Redes Sociales',
    tamaño: '7 MB',
    calificacion: 4
};
let kahoot = {
    nombre: 'Kahoot!',
    categoria: 'Juegos',
    tamaño: '2 MB',
    calificacion: 5
};
let maps = {
    nombre: 'Maps',
    categoria: 'Utilidades',
    tamaño: '9 MB',
    calificacion: 4
};


let menu;
let continuar = true
do {
    menu = parseInt(prompt(`Ejecute una categoría:
        1 - Juegos
        2 - Redes Sociales
        3 - Utilidades
        4 - Salir del Menú
        `))
    switch (menu) {
        case 1: alert(`en esta categoría encontrarás aplicaciones como ${kahoot.nombre}, ${candyCrush.nombre}, entre otras`);       
            break;
        case 2: alert(`en esta categoría encontrarás aplicaciones como ${tiktok.nombre}, ${insta.nombre}, entre otras`);       
            break;
        case 3: alert(`en esta categoría encontrarás aplicaciones como ${maps.nombre}, entre otras`);       
            break;
        case 4: alert(`Regrese pronto!...`);
        continuar = false       
            break;
    
        default: alert('No hay categorías asociadas a esta opción')
            break; 
    };
} while(continuar === true);




