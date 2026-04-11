import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

interface CreateClientProps {
    onCancel: () => void;
}

export const CreateClient = ({ onCancel }: CreateClientProps) => {

    return (
        <div className="p-6 max-w-2xl mx-auto bg-card rounded-xl shadow-sm border">
            <h2 className="text-2xl font-bold mb-6 text-brandBlue-600">Crear Cliente</h2>
            <div className="space-y-4">
                <div className="space-y-2">
                    <Label htmlFor="name">Nombre</Label>
                    <Input id="name" className="cursor-pointer bg-white" placeholder="Ingrese nombre completo" />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" className="cursor-pointer bg-white" type="email" placeholder="cliente@ejemplo.com" />
                </div>
                <div className="pt-4 flex justify-end space-x-2">
                    <Button variant="outline" className="cursor-pointer bg-white text-brandGray-800" onClick={onCancel}>Cancelar</Button>
                    <Button className="bg-brandBlue-600 hover:bg-brandBlue-700 text-white cursor-pointer" onClick={onCancel}>Guardar</Button>
                </div>

            </div>
        </div>
    );
};
