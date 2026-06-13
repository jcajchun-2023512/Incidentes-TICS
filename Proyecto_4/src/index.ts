import { agregarIncidenteLogica, listarIncidentes } from "./service/logica.js";
import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function menu() {
    console.log("\n GESTIÓN DE INCIDENTES ");
    console.log("1. Ingresar un nuevo incidente");
    console.log("2. Listar incidentes");
    console.log("3. Salir");

    rl.question("Seleccione una opción: ", (op) => {
        if (op === '1') { // Cambiado de 'IN' a '1'
            rl.question("Título: ", (titulo) => {
                rl.question("Descripción: ", (desc) => {
                    rl.question("Prioridad (B = baja, M = media, A = alta): ", (prio) => {
                        rl.question("Estado (A = abierto, EP = en-progreso, C = cerrado): ", (est) => {
                            agregarIncidenteLogica(titulo, desc, prio, est);
                            menu();
                        });
                    });
                });
            });
        } else if (op === '2') { // Cambiado de 'G' a '2'
            listarIncidentes();
            menu(); 
        } else {
            rl.close();
        }
    });
}
menu();