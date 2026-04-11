import { DiFactory } from "@/shared/factories/di-factory";
import { useQuery } from "@tanstack/react-query";

export const useFetchTicketId = (id: number) => {
    const ticketsRepository = DiFactory.createTicketsRepository();
    const { data, isLoading, error } = useQuery({
        queryKey: ["ticket", id],
        queryFn: () => ticketsRepository.getTicketById(id),
    });
    return { data, isLoading, error };
}