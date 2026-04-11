import { DiFactory } from "@/shared/factories/di-factory";
import { useQuery } from "@tanstack/react-query";

export const useFetchClients = () => {
    const clientsRepository = DiFactory.createClientsRepository();
    const { data, isLoading, error } = useQuery({
        queryKey: ["clients"],
        queryFn: () => clientsRepository.getClients(),
    });
    return { data, isLoading, error };
}
