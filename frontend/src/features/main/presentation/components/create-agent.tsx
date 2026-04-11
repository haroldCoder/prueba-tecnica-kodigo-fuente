import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useCreateAgent } from "@/shared/application/hooks";
import { Spinner } from "@/shared/ui/components/spinner";

interface CreateAgentProps {
    onCancel: () => void;
}

export const CreateAgent = ({ onCancel }: CreateAgentProps) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const { createAgent, isPending, error } = useCreateAgent();

    const handleSubmit = async () => {
        await createAgent({ name, email });
        setName("");
        setEmail("");
        onCancel();
    };

    if (isPending) return (
        <section className="w-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center py-8">
            <Spinner size={20} />
        </section>
    );
    if (error) return <div className="text-red-600">Error: {error.message}</div>;

    return (
        <div className="p-6 max-w-2xl mx-auto bg-card rounded-xl shadow-sm">
            <h2 className="text-2xl font-bold mb-6 text-brandBlue-600">Crear Agente</h2>
            <div className="space-y-4">
                <div className="space-y-2">
                    <Label htmlFor="name">Nombre</Label>
                    <Input id="name" className="cursor-pointer bg-white" placeholder="Ingrese nombre del agente" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" className="cursor-pointer bg-white" type="email" placeholder="agente@ejemplo.com" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="pt-4 flex justify-end space-x-2">
                    <Button variant="outline" className="cursor-pointer bg-white text-brandGray-800" onClick={onCancel}>Cancelar</Button>
                    <Button className="bg-brandBlue-600 hover:bg-brandBlue-700 text-white cursor-pointer" onClick={handleSubmit}>Guardar</Button>
                </div>

            </div>
        </div>
    );
};
