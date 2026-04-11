import { useEffect, useState } from "react";
import type { ColumnDef } from "@tanstack/react-table";
import { DataTable } from "@/shared/ui/components/data-table";
import type { ClientTableModel } from "@/features/main/presentation/models";
import { clientsData } from "@/features/main/presentation/data";

import { PlusCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CreateClient } from "./create-client";
import { useFetchClients } from "@/shared/application/hooks";
import { Spinner } from "@/shared/ui/components/spinner";

const columns: ColumnDef<ClientTableModel>[] = [
    {
        accessorKey: "name",
        header: "Nombre",
    },
    {
        accessorKey: "email",
        header: "Email",
    }
];

export const Clients = () => {
    const [view, setView] = useState<'list' | 'create'>('list');
    const { data: clients, isLoading, error } = useFetchClients();

    const [dataClients, setDataClients] = useState(clients ?? clientsData);

    useEffect(() => {
        if (clients) {
            setDataClients(clients);
        }
    }, [clients]);

    if (isLoading) return (
        <section className="w-full flex justify-center py-8">
            <Spinner size={40} />
        </section>
    );
    if (error) return (
        <div className="w-full flex justify-center py-8 text-red-600">Error: {error.message}</div>
    );

    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold mb-6 text-brandBlue-600">Clientes</h2>
            {view === 'list' ? (
                <div className="w-full flex mt-6 flex-col items-center">
                    <div className="w-full max-w-3xl">
                        <DataTable columns={columns} data={dataClients as ClientTableModel[]} />
                    </div>

                    <div className="w-full max-w-3xl mt-6 flex justify-end mb-4">
                        <Button
                            className="bg-brandBlue-600 text-white hover:bg-brandBlue-700 cursor-pointer"
                            onClick={() => setView('create')}
                        >
                            <PlusCircle className="mr-2 h-4 w-4" /> Crear
                        </Button>
                    </div>
                </div>
            ) : (
                <CreateClient onCancel={() => setView('list')} />
            )}
        </div>
    );
};
