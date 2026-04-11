import { DiFactory } from "@/shared/factories/di-factory";
import { useMutation } from "@tanstack/react-query";
import type { CreateTicketModel } from "@shared/domain/models";

export const useCreateTicket = () => {
    const ticketsRepository = DiFactory.createTicketsRepository();
    const { data, isPending, error } = useMutation({
        mutationFn: (ticket: CreateTicketModel) => ticketsRepository.createTicket(ticket),
    });
    return { data, isPending, error };
}