import type { ColumnDef } from "@tanstack/react-table";
import { DataTable } from "@/shared/ui/components/data-table";
import type { ClientTableModel } from "@/features/main/presentation/models";
import { clientsData } from "@/features/main/presentation/data";

import { PlusCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const columns: ColumnDef<ClientTableModel>[] = [
    {
        accessorKey: "name",
        header: "Nombre",
    },
    {
        accessorKey: "email",
        header: "Email",
    },
];


export const Clients = () => {
    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold mb-6 text-brandBlue-600">Clientes</h2>
            <div className="w-full flex mt-6 flex-col items-center">
                <div className="w-full max-w-3xl">
                    <DataTable columns={columns} data={clientsData} />
                </div>
                <div className="w-full max-w-3xl mt-6 flex justify-end mb-4">
                    <Button className="bg-brandBlue-600 text-white hover:bg-brandBlue-700 cursor-pointer">
                        <PlusCircle className="mr-2 h-4 w-4" /> Crear
                    </Button>
                </div>
            </div>
        </div>
    );
};
