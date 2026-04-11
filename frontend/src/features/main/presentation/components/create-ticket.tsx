import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { STATUS_OPTIONS, PRIORITY_OPTIONS } from "../constants";

interface CreateTicketProps {
    onCancel: () => void;
}

export const CreateTicket = ({ onCancel }: CreateTicketProps) => {

    return (
        <div className="p-6 max-w-2xl mx-auto bg-card rounded-xl shadow-sm">
            <h2 className="text-2xl font-bold mb-6 text-brandBlue-600">Crear Ticket</h2>
            <div className="space-y-4">
                <div className="space-y-2">
                    <Label htmlFor="title">Título</Label>
                    <Input id="title" className="cursor-pointer bg-white" placeholder="Ingrese el título del ticket" />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="description">Descripción</Label>
                    <Input id="description" className="cursor-pointer bg-white" placeholder="Ingrese la descripción" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <Label>Estado</Label>
                        <Select>
                            <SelectTrigger className="cursor-pointer bg-white">
                                <SelectValue placeholder="Seleccione estado" />
                            </SelectTrigger>
                            <SelectContent className="bg-white">
                                {STATUS_OPTIONS.map((opt) => (
                                    <SelectItem key={opt.key} value={opt.key}>
                                        {opt.value}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="space-y-2">
                        <Label>Prioridad</Label>
                        <Select>
                            <SelectTrigger className="cursor-pointer bg-white">
                                <SelectValue placeholder="Seleccione prioridad" />
                            </SelectTrigger>
                            <SelectContent className="bg-white">
                                {PRIORITY_OPTIONS.map((opt) => (
                                    <SelectItem key={opt.key} value={opt.key}>
                                        {opt.value}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>
                </div>
                <div className="pt-4 flex justify-end space-x-2">
                    <Button variant="outline" className="cursor-pointer bg-white text-brandGray-800" onClick={onCancel}>Cancelar</Button>
                    <Button className="bg-brandBlue-600 hover:bg-brandBlue-700 text-white cursor-pointer" onClick={onCancel}>Guardar</Button>
                </div>

            </div>
        </div>
    );
};
