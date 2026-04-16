import { AgentEntity } from "@modules-agent/domain/entities";
import { TicketEntity } from "@modules-ticket/domain/entities/ticket.entity";

/**
 * @description Servicio de dominio para la asignación de tickets.
 * Los servicios de dominio contienen lógica que involucra múltiples entidades
 * o que no pertenece naturalmente a una sola entidad.
 */
export class TicketAssignmentService {
    /**
     * @description Asigna un ticket al agente con menos carga de trabajo (simulado).
     * @param agents Lista de agentes disponibles
     * @param tickets Lista de tickets actuales para calcular la carga
     * @returns El agente seleccionado para la asignación
     */
    assignToLeastBusyAgent(agents: AgentEntity[], currentTickets: TicketEntity[]): AgentEntity {
        if (agents.length === 0) {
            throw new Error('No agents available for assignment');
        }

        // Calcular cuántos tickets tiene cada agente
        const agentWorkload = agents.map(agent => {
            const ticketCount = currentTickets.filter(t => t.agent?.id === agent.id).length;
            return { agent, ticketCount };
        });

        // Ordenar por menor carga y devolver el primero
        agentWorkload.sort((a, b) => a.ticketCount - b.ticketCount);

        return agentWorkload[0].agent;
    }
}
