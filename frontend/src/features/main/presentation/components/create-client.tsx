import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useCreateClient } from "@/shared/application/hooks";
import { Spinner } from "@/shared/ui/components/spinner";

interface CreateClientProps {
    onCancel: () => void;
}

export const CreateClient = ({ onCancel }: CreateClientProps) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const { createClient, isPending, error } = useCreateClient();

    const handleSubmit = async () => {
        await createClient({ name, email });
        setName("");
        setEmail("");
        if (!isPending && !error) {
            onCancel();
        }
    };

    if (isPending) return (
        <section className="w-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center py-8">
            <Spinner size={20} />
        </section>
    );
    if (error) return <div className="text-red-600">Error: {error.message}</div>;

    return (
        <div className="p-6 max-w-2xl mx-auto bg-card rounded-xl shadow-sm border">
            <h2 className="text-2xl font-bold mb-6 text-brandBlue-600">Crear Cliente</h2>
            <div className="space-y-4">
                <div className="space-y-2">
                    <Label htmlFor="name">Nombre</Label>
                    <Input id="name" className="cursor-pointer bg-white" placeholder="Ingrese nombre completo" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" className="cursor-pointer bg-white" type="email" placeholder="cliente@ejemplo.com" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="pt-4 flex justify-end space-x-2">
                    <Button variant="outline" className="cursor-pointer bg-white text-brandGray-800" onClick={onCancel}>Cancelar</Button>
                    <Button className="bg-brandBlue-600 hover:bg-brandBlue-700 text-white cursor-pointer" onClick={handleSubmit}>Guardar</Button>
                </div>

            </div>
        </div>
    );
};
