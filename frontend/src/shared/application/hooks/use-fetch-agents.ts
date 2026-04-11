import { DiFactory } from "@/shared/factories/di-factory";
import { useQuery } from "@tanstack/react-query";

export const useFetchAgents = () => {
    const agentsRepository = DiFactory.createAgentsRepository();
    const { data, isLoading, error } = useQuery({
        queryKey: ["agents"],
        queryFn: () => agentsRepository.getAgents(),
    });
    return { data, isLoading, error };
}
