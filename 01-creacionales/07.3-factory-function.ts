//Notificador de errores por sistema
type Sistema = 'GUIA' | 'EPHYTO' | 'SIGA';

function crearNotificador(sistema: Sistema){
    return function(mensaje: String){
        console.log(`[${sistema}] ERROR: ${mensaje}`);
    }
}

// --- USO ---
function main() {

    const notificarGuia = crearNotificador('GUIA');
    const notificarEphyto = crearNotificador('EPHYTO');
    const notificarSiga = crearNotificador('SIGA');

    notificarGuia('No se pudo generar el certificado');
    notificarEphyto('XML inválido');
    notificarSiga('Conexión perdida');

}

main();