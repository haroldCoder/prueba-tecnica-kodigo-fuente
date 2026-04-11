import { useState } from "react";
import type { ColumnDef } from "@tanstack/react-table";
import { DataTable } from "@/shared/ui/components/data-table";
import { ticketsData } from "@/features/main/presentation/data";
import type { TicketTableModel } from "@/features/main/presentation/models";
import { PlusCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ActionsTableTickets } from "./actions-table-tickets";
import { CreateTicket } from "./create-ticket";
import { UpdateTicket } from "./update-ticket";

export const Tickets = () => {
    const [view, setView] = useState<'list' | 'create' | 'update'>('list');

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
            cell: () => (
                <ActionsTableTickets onEdit={() => setView('update')} />
            ),
        }
    ];

    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold mb-6 text-brandBlue-600">Tickets</h2>
            {view === 'list' && (
                <div className="w-full flex mt-6 flex-col items-center">
                    <div className="w-full max-w-5xl">
                        <DataTable columns={columns} data={ticketsData} />
                    </div>
                    <div className="w-full max-w-5xl mt-6 flex justify-end mb-4">
                        <Button
                            className="bg-brandBlue-600 text-white hover:bg-brandBlue-700 cursor-pointer"
                            onClick={() => setView('create')}
                        >
                            <PlusCircle className="mr-2 h-4 w-4" /> Crear
                        </Button>
                    </div>
                </div>
            )}

            {view === 'create' && <CreateTicket onCancel={() => setView('list')} />}
            {view === 'update' && <UpdateTicket onCancel={() => setView('list')} />}
        </div>
    );
};