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
import { useCreateTicket } from "@/shared/application/hooks";
import { useState } from "react";
import type { CreateTicketModel } from "@/shared/domain/models";
import type { PriorityTicketEnum, StatusTicketEnum } from "@/shared/domain/enums";
import { Spinner } from "@/shared/ui/components/spinner";

interface CreateTicketProps {
    onCancel: () => void;
}

export const CreateTicket = ({ onCancel }: CreateTicketProps) => {
    const { createTicket, isPending, error } = useCreateTicket();

    const [title, setTitle] = useState<string>(""); // aca se puede usar react hook form, pero por cuestion de tiempo se hara con usestate
    const [description, setDescription] = useState<string>("");
    const [status, setStatus] = useState<string>("");
    const [priority, setPriority] = useState<string>("");
    const [clientId, setClientId] = useState<number | "">("");

    const handleSubmit = () => {
        if (!clientId) return;

        const ticket: CreateTicketModel = {
            title,
            description,
            status: status as StatusTicketEnum,
            priority: priority as PriorityTicketEnum,
            client_id: Number(clientId),
        };
        createTicket(ticket);
        setTitle("");
        setDescription("");
        setStatus("");
        setPriority("");
        setClientId("");
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
            <h2 className="text-2xl font-bold mb-6 text-brandBlue-600">Crear Ticket</h2>
            <div className="space-y-4">
                <div className="space-y-2">
                    <Label htmlFor="title">Título</Label>
                    <Input id="title" className="cursor-pointer bg-white" placeholder="Ingrese el título del ticket" value={title} onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="description">Descripción</Label>
                    <Input id="description" className="cursor-pointer bg-white" placeholder="Ingrese la descripción" value={description} onChange={(e) => setDescription(e.target.value)} />
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <Label>Estado</Label>
                        <Select value={status} onValueChange={(value) => setStatus(value)}>
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
                        <Select value={priority} onValueChange={(value) => setPriority(value)}>
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
                        <Input type="text" placeholder="Cliente id" className="cursor-pointer bg-white" value={clientId} onChange={(e) => setClientId(e.target.value === '' ? '' : Number(e.target.value))} />
                    </div>
                </div>
                <div className="pt-4 flex justify-end space-x-2">
                    <Button variant="outline" className="cursor-pointer bg-white text-brandGray-800" onClick={onCancel}>Cancelar</Button>
                    <Button disabled={isPending} onClick={handleSubmit} className="bg-brandBlue-600 hover:bg-brandBlue-700 text-white cursor-pointer">Guardar</Button>
                </div>

            </div>
        </div>
    );
};
