import type { ColumnDef } from "@tanstack/react-table";
import { DataTable } from "@/shared/ui/components/data-table";
import { ticketsData } from "@/features/main/presentation/data";
import type { TicketTableModel } from "@/features/main/presentation/models";

import { PlusCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ActionsTableTickets } from "./actions-table-tickets";


const columns: ColumnDef<TicketTableModel>[] = [
    {
        accessorKey: "title",
        header: "Título",
    },
    {
        accessorKey: "description",
        header: "Descripción",
    },
    {
        accessorKey: "status",
        header: "Estado",
    },
    {
        accessorKey: "priority",
        header: "Prioridad",
    },
    {
        id: "actions",
        header: "Acciones",
        cell: () => {
            return (
                <ActionsTableTickets />
            );
        },
    }
];


export const Tickets = () => {
    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold mb-6 text-brandBlue-600">Tickets</h2>
            <div className="w-full flex mt-6 flex-col items-center">
                <div className="w-full max-w-5xl">
                    <DataTable columns={columns} data={ticketsData} />
                </div>
                <div className="w-full max-w-5xl mt-6 flex justify-end mb-4">
                    <Button className="bg-brandBlue-600 text-white hover:bg-brandBlue-700 cursor-pointer">
                        <PlusCircle className="mr-2 h-4 w-4" /> Crear
                    </Button>
                </div>
            </div>
        </div>
    );
};