/* ejerc 1 - Contactos:

Crea un objeto literal que represente a un contacto de tu
teléfono. Este objeto debe tener las propiedades: nombre,
apellido, número de teléfono y correo electrónico. Luego,
muestra toda la información del contacto en un formato legible. */

let contacto1 = {
    nombre: "Waldo",
    apellido: "Fernández",
    telefono: "+5493546511110",
    correo: "fernandez.waldo@gmail.com"
  };
  
  console.info(`
  CONTACTO: ${contacto1.nombre} ${contacto1.apellido}
  TELÉFONO: ${contacto1.telefono}
  CORREO ELECTRÓNICO: ${contacto1.correo}`);
  
  let contacto2 = {
    nombre: "Katy",
    apellido: "Cabak",
    telefono: "+5493546555555",
    correo: "katy@gmail.com"
  };
  
  console.info(`
  CONTACTO: ${contacto2.nombre} ${contacto2.apellido}
  TELÉFONO: ${contacto2.telefono}
  CORREO ELECTRÓNICO: ${contacto2.correo}`);

  let contacto3 = {
    nombre: "Carlos",
    apellido: "Gonzalez",
    telefono: "+5493581223344",
    correo: "profe_carlos@gmail.com"
  };
  
  console.info(`
  CONTACTO: ${contacto3.nombre} ${contacto3.apellido}
  TELÉFONO: ${contacto3.telefono}
  CORREO ELECTRÓNICO: ${contacto3.correo}`);
  
  /* Mensajes de texto:
  
  Simula una conversación de mensajes de texto. Crea un arreglo
  que contenga objetos, donde cada objeto represente un
  mensaje (con propiedades como: remitente, destinatario y
  contenido). Utiliza un “iterador” para recorrer el arreglo y
  mostrar cada mensaje en pantalla. */
  
  let mensajes = [
    {
      remitente: contacto1,
      destinatario: contacto2,
      contenido: "👋 Hola, ¿cómo estás?"
    },
    {
      remitente: contacto2,
      destinatario: contacto1,
      contenido: "Hola, Muy bien!👍"
    },
    {
      remitente: contacto3,
      destinatario: contacto2,
      contenido:
      `Buenas tardes!,
      Recuerden que hoy es el último día
      para la entrega de los ejercicios! 💀`
    }];

    for (let i = 0; i < mensajes.length; i++) {
        alert(`
            Mensaje de ${mensajes[i].remitente.nombre} ${mensajes[i].remitente.apellido}, para ${mensajes[i].destinatario.nombre} ${mensajes[i].destinatario.apellido}
            
            Contenido del mensaje:

            ${mensajes[i].contenido}
            `)
    };
