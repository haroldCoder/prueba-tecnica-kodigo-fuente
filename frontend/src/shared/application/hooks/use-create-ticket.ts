import { DiFactory } from "@/shared/factories/di-factory";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { CreateTicketModel } from "@shared/domain/models";

export const useCreateTicket = () => {
    const queryClient = useQueryClient();
    const ticketsRepository = DiFactory.createTicketsRepository();
    const { data, isPending, error, mutate } = useMutation({
        mutationFn: (ticket: CreateTicketModel) => ticketsRepository.createTicket(ticket),
        onSuccess: () => { // con esto invalidamos la query y se vuelve a ejecutar el useFetchTickets
            queryClient.invalidateQueries({ queryKey: ["tickets"] });
        },
    });
    return { data, isPending, error, createTicket: mutate };
}