import type { prioridad, estado } from "../types/tipos.js";
export interface Incidente {
    readonly id: number;
    titulo: string;
    descripcion: string;
    prioridad: prioridad;
    estado: estado;
    fechaCreacion: Date;
}
//# sourceMappingURL=funcion.d.ts.map