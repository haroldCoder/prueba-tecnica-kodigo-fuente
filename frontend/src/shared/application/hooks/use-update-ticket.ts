import { DiFactory } from "@/shared/factories/di-factory";
import { useMutation } from "@tanstack/react-query";
import type { UpdateTicketModel } from "@shared/domain/models";

export const useUpdateTicket = (id: number, ticket: UpdateTicketModel) => {
    const ticketsRepository = DiFactory.createTicketsRepository();
    const { data, isPending, error } = useMutation({
        mutationFn: () => ticketsRepository.updateTicket(id, ticket),
    });
    return { data, isPending, error };
}