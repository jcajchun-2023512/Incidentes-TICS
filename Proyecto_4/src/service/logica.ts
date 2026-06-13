import type { prioridad, estado } from "../types/tipos.js";
import type { Incidente } from "../function/funcion.js";

const incidentes: Incidente[] = [];

const esPrioridad = (p: string): p is prioridad => ["B", "M", "A"].includes(p);
const esEstado = (e: string): e is estado => ["A", "EP", "C"].includes(e);

export const agregarIncidenteLogica = (titulo: string, descripcion: string, prioridad: string, estado: string): Incidente | null => {

    if (!esPrioridad(prioridad) || !esEstado(estado)) {
        console.error("Error: Prioridad (B/M/A) o Estado (A/EP/C) no válido.");
        return null;
    }

    const nuevo: Incidente = {
        id: incidentes.length + 1,
        titulo,
        descripcion,
        prioridad: prioridad as prioridad,
        estado: estado as estado,
        fechaCreacion: new Date()
    };
    incidentes.push(nuevo);
    return nuevo;
};

export const listarIncidentes = () => {
    console.log("\n--- LISTADO DE INCIDENTES ---");
    
    if (incidentes.length === 0) {
        console.log("No hay incidentes reportados.");
        return;
    }

    // Esto imprimirá cada incidente como un bloque de texto, 
    // lo cual evita la visualización de tabla que te molesta.
    incidentes.forEach((inc) => {
        console.log("-----------------------------------");
        console.log(`ID: ${inc.id}`);
        console.log(`Título: ${inc.titulo}`);
        console.log(`Descripción: ${inc.descripcion}`);
        console.log(`Prioridad: ${inc.prioridad}`);
        console.log(`Estado: ${inc.estado}`);
        console.log(`Fecha: ${inc.fechaCreacion.toLocaleString()}`);
    });
    console.log("-----------------------------------\n");
};