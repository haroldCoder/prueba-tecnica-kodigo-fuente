import { DiFactory } from "@/shared/factories/di-factory";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { UpdateTicketModel } from "@shared/domain/models";

export const useUpdateTicket = () => {
    const queryClient = useQueryClient();
    const ticketsRepository = DiFactory.createTicketsRepository();
    const { data, isPending, error, mutateAsync } = useMutation({
        mutationFn: ({ id, ticket }: { id: number, ticket: UpdateTicketModel }) => ticketsRepository.updateTicket(id, ticket),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["tickets"] });
        },
    });
    return { data, isPending, error, updateTicket: mutateAsync };
}