import { useState } from "react";
import type { ColumnDef } from "@tanstack/react-table";
import { DataTable } from "@/shared/ui/components/data-table";
import type { AgentTableModel } from "@/features/main/presentation/models";
import { agentsData } from "@/features/main/presentation/data";
import { PlusCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CreateAgent } from "./create-agent";

const columns: ColumnDef<AgentTableModel>[] = [
    {
        accessorKey: "name",
        header: "Nombre",
    },
    {
        accessorKey: "email",
        header: "Email",
    }
];

export const Agents = () => {
    const [view, setView] = useState<'list' | 'create'>('list');

    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold mb-6 text-brandBlue-600">Agentes</h2>
            {view === 'list' ? (
                <div className="w-full flex mt-6 flex-col items-center">
                    <div className="w-full max-w-3xl">
                        <DataTable columns={columns} data={agentsData} />
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
                <CreateAgent onCancel={() => setView('list')} />
            )}
        </div>
    );
};
