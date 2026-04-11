import { CreateTicketUseCase } from "./create-ticket.use-case";
import { FindTicketUseCase } from "./find-ticket.use-case";
import { FindAllTicketsUseCase } from "./find-all-tickets.use-case";
import { UpdateTicketUseCase } from "./update-ticket.use-case";
import { DeleteTicketUseCase } from "./delete-ticket.use-case";
import { TicketRepository } from "@modules-ticket/domain/repositories";
import { TicketEntity, CreateTicketEntity } from "@modules-ticket/domain/entities";

describe("Ticket Use Cases", () => {
    let ticketRepository: jest.Mocked<TicketRepository>;
    let createTicketUseCase: CreateTicketUseCase;
    let findTicketUseCase: FindTicketUseCase;
    let findAllTicketsUseCase: FindAllTicketsUseCase;
    let updateTicketUseCase: UpdateTicketUseCase;
    let deleteTicketUseCase: DeleteTicketUseCase;

    beforeEach(() => {
        ticketRepository = {
            create: jest.fn(),
            findById: jest.fn(),
            findAll: jest.fn(),
            update: jest.fn(),
            delete: jest.fn(),
        } as any;
        createTicketUseCase = new CreateTicketUseCase(ticketRepository);
        findTicketUseCase = new FindTicketUseCase(ticketRepository);
        findAllTicketsUseCase = new FindAllTicketsUseCase(ticketRepository);
        updateTicketUseCase = new UpdateTicketUseCase(ticketRepository);
        deleteTicketUseCase = new DeleteTicketUseCase(ticketRepository);
    });

    describe("CreateTicketUseCase", () => {
        it("should create a ticket and return its id", async () => {
            const ticket: CreateTicketEntity = { subject: "Test", description: "Test", status: "open", clientId: 1, agentId: 1 };
            ticketRepository.create.mockResolvedValue(1);

            const result = await createTicketUseCase.execute(ticket);

            expect(result).toBe(1);
            expect(ticketRepository.create).toHaveBeenCalledWith(ticket);
        });
    });

    describe("FindTicketUseCase", () => {
        it("should return a ticket if found", async () => {
            const ticket: TicketEntity = { id: 1, subject: "Test", description: "Test", status: "open", clientId: 1, agentId: 1, createdAt: new Date() };
            ticketRepository.findById.mockResolvedValue(ticket);

            const result = await findTicketUseCase.execute(1);

            expect(result).toEqual(ticket);
            expect(ticketRepository.findById).toHaveBeenCalledWith(1);
        });
    });

    describe("UpdateTicketUseCase", () => {
        it("should update a ticket and return its id", async () => {
            const ticket: TicketEntity = { id: 1, subject: "Test Updated", description: "Test", status: "open", clientId: 1, agentId: 1, createdAt: new Date() };
            ticketRepository.update.mockResolvedValue(1);

            const result = await updateTicketUseCase.execute(ticket);

            expect(result).toBe(1);
            expect(ticketRepository.update).toHaveBeenCalledWith(ticket);
        });
    });

    describe("DeleteTicketUseCase", () => {
        it("should delete a ticket and return its id", async () => {
            ticketRepository.delete.mockResolvedValue(true);

            const result = await deleteTicketUseCase.execute(1);

            expect(result).toBe(true);
            expect(ticketRepository.delete).toHaveBeenCalledWith(1);
        });
    });
});
