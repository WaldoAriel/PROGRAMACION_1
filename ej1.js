// Variables simples para los planes
let nombre1 = "Básico";
let datos1 = "2 GB";
let precio1 = "10";

let nombre2 = "Estandar";
let datos2 = "5 GB";
let precio2 = "20";

let nombre3 = "Premium";
let datos3 = "10 GB";
let precio3 = "30";

function mostrarBasico() {
    document.getElementById("basico").innerHTML = `
    <h3>Descripción del Plan ${nombre1}</h3>
    <h6>El Plan de Datos Básico de Claro ofrece ${datos1} de datos móviles mensuales, ideal para usuarios que utilizan internet principalmente para navegar por páginas web, usar aplicaciones de mensajería y redes sociales de manera moderada. Este plan es perfecto para quienes buscan una opción económica sin sacrificar la conectividad esencial. Además, incluye acceso a la red 4G LTE de Claro, lo que garantiza una experiencia de navegación rápida y confiable. El plan también permite realizar llamadas y enviar mensajes de texto a nivel nacional, con tarifas adicionales aplicables para servicios fuera del paquete.</h6>
    <h4>Aprovechá la promo a $${precio1} por mes!</h4>
`};
function mostrarEstandar() {
    document.getElementById("estandar").innerHTML = `
    <h3>Descripción del Plan ${nombre2}</h3>
    <h6>El Plan de Datos Estándar de Claro ofrece ${datos2} de datos móviles mensuales, ideal para usuarios que requieren un mayor consumo de internet. Este plan es perfecto para quienes navegan con frecuencia, ven videos en calidad estándar, utilizan redes sociales, y aplicaciones de mensajería. Además de los 5 GB, los usuarios disfrutan de la cobertura de la red 4G LTE de Claro, lo que garantiza una conexión rápida y estable. El plan incluye llamadas y mensajes de texto ilimitados a nivel nacional, proporcionando una solución completa para mantenerse conectado.</h6>
    <h4>Aprovechá la promo a $${precio2} por mes!</h4>
`};
function mostrarPremium() {
    document.getElementById("premium").innerHTML = `
    <h3>Descripción del Plan ${nombre3}</h3>
    <h6>El Plan de Datos Premium de Claro ofrece ${datos3} de datos móviles mensuales, diseñado para usuarios que necesitan un alto consumo de internet. Este plan es ideal para quienes disfrutan de streaming de videos en alta definición, juegos en línea, y el uso intensivo de aplicaciones de redes sociales y mensajería. Con 10 GB disponibles, los usuarios pueden disfrutar de una navegación fluida y sin preocupaciones. Además, el plan incluye llamadas y mensajes de texto ilimitados a nivel nacional y acceso a la red 4G LTE de Claro, asegurando una conexión rápida y confiable en todo momento.</h6>
    <h4>Aprovechá la promo a $${precio3} por mes!</h4>
`};







