const incidentes = [];
const esPrioridad = (p) => ["B", "M", "A"].includes(p);
const esEstado = (e) => ["A", "EP", "C"].includes(e);
export const agregarIncidenteLogica = (titulo, descripcion, prioridad, estado) => {
    if (!esPrioridad(prioridad) || !esEstado(estado)) {
        console.error("Error: Prioridad (B/M/A) o Estado (A/EP/C) no válido.");
        return null;
    }
    const nuevo = {
        id: incidentes.length + 1,
        titulo,
        descripcion,
        prioridad: prioridad,
        estado: estado,
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
//# sourceMappingURL=logica.js.map