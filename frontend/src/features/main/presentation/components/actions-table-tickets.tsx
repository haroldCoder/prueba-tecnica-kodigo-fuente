import { Pencil, Trash2 } from "lucide-react";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { useDeleteTicket } from "@/shared/application/hooks";
import { Spinner } from "@/shared/ui/components/spinner";

interface ActionsTableTicketsProps {
    onEdit: () => void;
    id_ticket: number;
    is_update_available?: boolean;
}

export const ActionsTableTickets = ({ onEdit, id_ticket, is_update_available = true }: ActionsTableTicketsProps) => {
    const { deleteTicket, isPending, error } = useDeleteTicket(id_ticket);

    const onDelete = () => {
        deleteTicket();
    };

    if (isPending) return (
        <section className="w-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center py-8">
            <Spinner size={20} />
        </section>
    );
    if (error) return <div className="text-red-600">Error: {error.message}</div>;

    return (
        <div className="flex items-center space-x-2">
            {is_update_available ? (
                <button
                    className="p-1.5 hover:bg-brandBlue-50 rounded-md text-brandBlue-600 transition-colors cursor-pointer"
                    onClick={onEdit}
                >
                    <Pencil className="h-4 w-4" />
                </button>
            ) : (
                <div className="w-7">

                </div>
            )}

            <AlertDialog>
                <AlertDialogTrigger asChild>
                    <button className="p-1.5 hover:bg-red-50 rounded-md text-red-600 transition-colors cursor-pointer">
                        <Trash2 className="h-4 w-4" />
                    </button>
                </AlertDialogTrigger>
                <AlertDialogContent className="bg-white">
                    <AlertDialogHeader>
                        <AlertDialogTitle>¿Está seguro de eliminar este ticket?</AlertDialogTitle>
                        <AlertDialogDescription>
                            Esta acción no se puede deshacer. Esto eliminará permanentemente el ticket de nuestros servidores.
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel className="cursor-pointer">Cancelar</AlertDialogCancel>
                        <AlertDialogAction onClick={onDelete} className="bg-red-600 hover:bg-red-700 text-white cursor-pointer border-none">
                            Eliminar
                        </AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </div>
    )
}