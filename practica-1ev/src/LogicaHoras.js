export function actualizarHora(){
    let now = new Date();
    //Parte para obtener el tiempo añadido a los mensajes
    let hours = String(now.getHours()).padStart(2, '0');
    let minutes = String(now.getMinutes()).padStart(2, '0');
    let seconds = String(now.getSeconds()).padStart(2, '0');
    let milliseconds = String(now.getMilliseconds()).padStart(3, '0');

    // Formatear el mensaje en "hh.mm.ss.ms"
    return `${hours}.${minutes}.${seconds}.${milliseconds}`;
}