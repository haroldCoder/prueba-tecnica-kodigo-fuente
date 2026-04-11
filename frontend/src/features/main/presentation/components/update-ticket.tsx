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
import { STATUS_OPTIONS, PRIORITY_OPTIONS } from "@/features/main/presentation/constants";
import { useFetchTicketId, useUpdateTicket } from "@/shared/application/hooks";
import { useEffect, useState } from "react";
import type { PriorityTicketEnum, StatusTicketEnum } from "@/shared/domain/enums";
import type { UpdateTicketModel } from "@/shared/domain/models";
import { Spinner } from "@/shared/ui/components/spinner";

interface UpdateTicketProps {
    id: number;
    onCancel: () => void;
}

export const UpdateTicket = ({ id, onCancel }: UpdateTicketProps) => {
    const { data: ticket, isLoading } = useFetchTicketId(id);
    const { updateTicket, isPending, error } = useUpdateTicket();

    const [title, setTitle] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [status, setStatus] = useState<string>("");
    const [priority, setPriority] = useState<string>("");

    useEffect(() => {
        if (ticket) {
            setTitle(ticket.title);
            setDescription(ticket.description);
            setStatus(ticket.status);
            setPriority(ticket.priority);
        }
    }, [ticket]);

    const handleUpdate = () => {
        const updatedTicket: UpdateTicketModel = {
            title,
            description,
            status: status as StatusTicketEnum,
            priority: priority as PriorityTicketEnum,
        };
        updateTicket({ id, ticket: updatedTicket });
        onCancel();
    };

    if (isLoading || isPending) return (
        <section className="w-full flex justify-center py-8">
            <Spinner size={40} />
        </section>
    );

    if (error) return <div className="text-red-600">Error: {(error as Error).message}</div>;

    return (
        <div className="p-6 max-w-2xl mx-auto bg-card rounded-xl shadow-sm">
            <h2 className="text-2xl font-bold mb-6 text-brandBlue-600">Actualizar Ticket</h2>
            <div className="space-y-4">
                <div className="space-y-2">
                    <Label htmlFor="title">Título</Label>
                    <Input id="title" className="cursor-pointer bg-white" value={title} onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="description">Descripción</Label>
                    <Input id="description" className="cursor-pointer bg-white" value={description} onChange={(e) => setDescription(e.target.value)} />
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <Label>Estado</Label>
                        <Select value={status} onValueChange={setStatus}>
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
                        <Select value={priority} onValueChange={setPriority}>
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
                    <Button className="bg-brandBlue-600 hover:bg-brandBlue-700 text-white cursor-pointer" onClick={handleUpdate}>Actualizar</Button>
                </div>

            </div>
        </div>
    );
};
