export function iniciarLaberinto() {
    const jugador = document.querySelector('.jugador');
    let posicionActual = 'I'; // Posición inicial

    // Configuración del tablero
    const tablero = {
        A: ['B', 'D'],
        B: ['A', 'C', 'E'],
        C: ['B', 'F'],
        D: ['A', 'E', 'G'],
        E: ['B', 'D', 'F', 'H'],
        F: ['C', 'E', 'I'],
        G: ['D', 'H'],
        H: ['E', 'G', 'I'],
        I: ['F', 'H']
    };

    // Función para mover al jugador
    function moverJugador(dedos) {
        const posiblesMovimientos = tablero[posicionActual];
        const nuevaCelda = posiblesMovimientos[dedos - 1];

        if (nuevaCelda) {
            document.getElementById(`celda${posicionActual}`).classList.remove('jugador');
            posicionActual = nuevaCelda;
            document.getElementById(`celda${posicionActual}`).classList.add('jugador');

            if (document.getElementById(`celda${posicionActual}`).classList.contains('trampa')) {
                alert('¡Has caído en una trampa!');
            } else if (document.getElementById(`celda${posicionActual}`).classList.contains('salida')) {
                alert('¡Has alcanzado la salida!');
            }
        }
    }

    // Exportar el control de movimiento
    window.moverJugador = moverJugador;
}
