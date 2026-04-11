import { DiFactory } from "@/shared/factories/di-factory";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { CreateAgentModel } from "@shared/domain/models";

export const useCreateAgent = () => {
    const queryClient = useQueryClient();
    const agentsRepository = DiFactory.createAgentsRepository();
    const { mutate, isPending, error } = useMutation({
        mutationFn: (agent: CreateAgentModel) => agentsRepository.createAgent(agent),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["agents"] });
        },
    });
    return { createAgent: mutate, isPending, error };
}
