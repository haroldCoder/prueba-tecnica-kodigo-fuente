import { useState, useEffect } from "react";
import type { ColumnDef } from "@tanstack/react-table";
import { DataTable } from "@/shared/ui/components/data-table";
import type { AgentTableModel } from "@/features/main/presentation/models";
import { agentsData as agentsDataLocal } from "@/features/main/presentation/data";
import { PlusCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CreateAgent } from "./create-agent";
import { useFetchAgents } from "@/shared/application/hooks";
import { Spinner } from "@/shared/ui/components/spinner";
import type { AgentModel } from "@/shared/domain/models";

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
    const { data: agents, isLoading, error } = useFetchAgents();
    const [agentsData, setAgentsData] = useState<AgentModel[]>(agentsDataLocal as AgentModel[]);

    useEffect(() => {
        if (agents) {
            setAgentsData(agents);
        }
    }, [agents]);

    if (isLoading) return (
        <section className="w-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center py-8">
            <Spinner size={20} />
        </section>
    );
    if (error) return <div className="text-red-600">Error: {error.message}</div>;

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
