import { DiFactory } from "@/shared/factories/di-factory";
import { useQuery } from "@tanstack/react-query";

export const useFetchTickets = () => { /* Hook para obtener los tickets */
    const ticketsRepository = DiFactory.createTicketsRepository(); /* Instanciamos el factory que tiene todos los repositorios */
    const { data, isLoading, error, refetch } = useQuery({
        queryKey: ["tickets"], /* Key para cachear los datos */
        queryFn: () => ticketsRepository.getTickets(), /* Función que llama al repositorio */
        refetchOnWindowFocus: false, /* No refetch cuando la ventana vuelve a tener foco */
        refetchOnMount: false, /* No refetch cuando el componente se monta */
    });
    return { data, isLoading, error, refetch }; /* Retornamos los datos, el estado de carga y el error */
}