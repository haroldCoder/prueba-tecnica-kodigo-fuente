import { DiFactory } from "@/shared/factories/di-factory";
import { useMutation } from "@tanstack/react-query";

export const useDeleteTicket = (id: number) => {
    const ticketsRepository = DiFactory.createTicketsRepository();
    const { data, isPending, error } = useMutation({
        mutationFn: () => ticketsRepository.deleteTicket(id),
    });
    return { data, isPending, error };
}