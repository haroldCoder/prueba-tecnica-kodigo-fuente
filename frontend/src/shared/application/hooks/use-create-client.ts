import { DiFactory } from "@/shared/factories/di-factory";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { CreateClientModel } from "@shared/domain/models";

export const useCreateClient = () => {
    const queryClient = useQueryClient();
    const clientsRepository = DiFactory.createClientsRepository();
    const { mutate, isPending, error } = useMutation({
        mutationFn: (client: CreateClientModel) => clientsRepository.createClient(client),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["clients"] });
        },
    });
    return { createClient: mutate, isPending, error };
}
