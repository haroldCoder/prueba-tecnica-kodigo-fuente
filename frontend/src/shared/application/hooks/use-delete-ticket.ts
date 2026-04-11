import { DiFactory } from "@/shared/factories/di-factory";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useDeleteTicket = (id: number) => {
    const queryClient = useQueryClient();
    const ticketsRepository = DiFactory.createTicketsRepository();
    const { mutate, isPending, error } = useMutation({
        mutationFn: () => ticketsRepository.deleteTicket(id),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["tickets"] });
        },
    });
    return { deleteTicket: mutate, isPending, error };
}