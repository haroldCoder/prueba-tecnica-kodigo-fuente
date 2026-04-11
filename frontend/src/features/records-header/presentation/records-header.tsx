import { StatusTicketEnum } from "@/shared/domain/enums";
import { StatCard } from "@features/records-header/presentation/components";
import { tickets } from "@features/records-header/presentation/data/tickets";

export const RecordsHeader = () => {
    return (
        <section className="w-full not-even:border-b py-8 px-6 overflow-x-auto">
            <div className="flex items-center justify-end space-x-8 max-w-7xl mx-auto">
                <StatCard number={tickets.length} label="Total Tickets" />
                <StatCard
                    color="bg-brandBlue-50"
                    colorNumber="text-red-600"
                    colorLabel="text-red-600"
                    number={tickets.filter((ticket) => ticket.label === StatusTicketEnum.OPEN).length}
                    label="Pendientes"
                />
                <StatCard
                    color="bg-gray-200"
                    colorNumber="text-gray-600"
                    colorLabel="text-gray-600"
                    number={tickets.filter((ticket) => ticket.label === StatusTicketEnum.IN_PROGRESS).length}
                    label="En Proceso"
                />
                <StatCard
                    color="bg-green-600"
                    colorNumber="text-white"
                    colorLabel="text-white"
                    number={tickets.filter((ticket) => ticket.label === StatusTicketEnum.CLOSED).length}
                    label="Completados"
                />
            </div>
        </section>
    );
};

export default RecordsHeader;