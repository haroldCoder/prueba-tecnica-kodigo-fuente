import type { TicketTableModel } from "@/features/main/presentation/models";

export const ticketsData: TicketTableModel[] = [
    {
        id: 1,
        title: "Error en login",
        description: "No se puede iniciar sesión con Google",
        status: "Abierto",
        priority: "Alta",
        client: "Juan Perez",
        agent: "Agente Smith",
    },
    {
        id: 2,
        title: "Nueva funcionalidad",
        description: "Agregar exportación a PDF",
        status: "En proceso",
        priority: "Media",
        client: "Maria Lopez",
        agent: "Agente 007",
    },
];