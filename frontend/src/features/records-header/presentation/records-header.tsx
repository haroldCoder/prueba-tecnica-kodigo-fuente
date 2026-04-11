import { PriorityTicketEnum, StatusTicketEnum } from "@/shared/domain/enums";
import { StatCard } from "@features/records-header/presentation/components";
import { tickets } from "@features/records-header/presentation/data";
import { useFetchTickets } from "@shared/application/hooks";
import { useEffect, useState } from "react";
import { Spinner } from "@shared/ui/components/spinner";

export const RecordsHeader = () => {
    const { data, isLoading, error } = useFetchTickets();
    const [dataTickets, setDataTickets] = useState(data ?? tickets);

    useEffect(() => {
        if (data) {
            setDataTickets(data);
        }
    }, [data]);

    if (isLoading) return (
        <section className="w-full flex justify-center py-8">
            <Spinner size={40} />
        </section>
    );
    if (error) return <div className="w-full flex justify-center py-8 text-red-600">Error: {error.message}</div>;

    return (
        <section className="w-full not-even:border-b py-8 px-6 overflow-x-auto">
            <div className="flex items-center justify-end space-x-8 max-w-7xl mx-auto">
                <StatCard number={dataTickets.length ?? 0} label="Total Tickets" />
                <StatCard
                    color="bg-brandBlue-50"
                    colorNumber="text-red-600"
                    colorLabel="text-red-600"
                    number={dataTickets.filter((ticket) => ticket.status === StatusTicketEnum.OPEN).length}
                    label="Pendientes"
                />
                <StatCard
                    color="bg-gray-200"
                    colorNumber="text-gray-600"
                    colorLabel="text-gray-600"
                    number={dataTickets.filter((ticket) => ticket.status === StatusTicketEnum.IN_PROGRESS).length}
                    label="En Proceso"
                />
                <StatCard
                    color="bg-red-400"
                    colorNumber="text-red-800"
                    colorLabel="text-red-800"
                    number={dataTickets.filter((ticket) => ticket.priority === PriorityTicketEnum.CRITICAL).length}
                    label="Critico"
                />
                <StatCard
                    color="bg-green-600"
                    colorNumber="text-white"
                    colorLabel="text-white"
                    number={dataTickets.filter((ticket) => ticket.status === StatusTicketEnum.CLOSED).length}
                    label="Completados"
                />
            </div>
        </section>
    );
};

export default RecordsHeader;