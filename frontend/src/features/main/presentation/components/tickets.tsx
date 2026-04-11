import { useEffect, useState } from "react";
import type { ColumnDef } from "@tanstack/react-table";
import { DataTable } from "@/shared/ui/components/data-table";
import { ticketsData } from "@/features/main/presentation/data";
import type { TicketTableModel } from "@/features/main/presentation/models";
import { PlusCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ActionsTableTickets } from "./actions-table-tickets";
import { CreateTicket } from "./create-ticket";
import { UpdateTicket } from "./update-ticket";
import { useFetchTickets } from "@/shared/application/hooks";
import { Spinner } from "@/shared/ui/components/spinner";

export const Tickets = () => {
    const { data, isLoading, error, refetch } = useFetchTickets();
    const [view, setView] = useState<'list' | 'create' | 'update'>('list');

    const [dataTickets, setDataTickets] = useState(data ?? ticketsData);

    useEffect(() => {
        if (data) {
            setDataTickets(data);
        }
    }, [data, refetch]);

    if (isLoading) return (
        <section className="w-full flex justify-center py-8">
            <Spinner size={40} />
        </section>
    );

    if (error) return <div className="w-full flex justify-center py-8 text-red-600">Error: {error.message}</div>;

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
            cell: ({ row }) => (
                <ActionsTableTickets onEdit={() => setView('update')} id_ticket={row.original.id} />
            ),
        }
    ];

    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold mb-6 text-brandBlue-600">Tickets</h2>
            {view === 'list' && (
                <div className="w-full flex mt-6 flex-col items-center">
                    <div className="w-full max-w-5xl">
                        <DataTable columns={columns} data={dataTickets as TicketTableModel[]} />
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