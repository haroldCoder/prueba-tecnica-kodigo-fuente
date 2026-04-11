import { Pencil, Trash2 } from "lucide-react";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";

interface ActionsTableTicketsProps {
    onEdit: () => void;
}

export const ActionsTableTickets = ({ onEdit }: ActionsTableTicketsProps) => {
    return (
        <div className="flex items-center space-x-2">
            <button
                className="p-1.5 hover:bg-brandBlue-50 rounded-md text-brandBlue-600 transition-colors cursor-pointer"
                onClick={onEdit}
            >
                <Pencil className="h-4 w-4" />
            </button>

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
                        <AlertDialogAction className="bg-red-600 hover:bg-red-700 text-white cursor-pointer border-none">
                            Eliminar
                        </AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </div>
    )
}