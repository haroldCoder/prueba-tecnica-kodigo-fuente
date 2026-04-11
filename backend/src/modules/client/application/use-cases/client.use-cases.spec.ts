import { CreateClientUseCase } from "./create-client.use-case";
import { FindClientUseCase } from "./find-client.use-case";
import { FindAllClientsUseCase } from "./find-all-clients.use-case";
import { ClientRepository } from "@modules-client/domain/repositories";
import { ClientEntity, CreateClientEntity } from "@modules-client/domain/entities";

describe("Client Use Cases", () => {
    let clientRepository: jest.Mocked<ClientRepository>;
    let createClientUseCase: CreateClientUseCase;
    let findClientUseCase: FindClientUseCase;
    let findAllClientsUseCase: FindAllClientsUseCase;

    beforeEach(() => {
        clientRepository = {
            create: jest.fn(),
            findById: jest.fn(),
            findAll: jest.fn(),
        };
        createClientUseCase = new CreateClientUseCase(clientRepository);
        findClientUseCase = new FindClientUseCase(clientRepository);
        findAllClientsUseCase = new FindAllClientsUseCase(clientRepository);
    });

    describe("CreateClientUseCase", () => {
        it("should create a client and return its id", async () => {
            const client: CreateClientEntity = { name: "Jane Doe", email: "jane@example.com" };
            clientRepository.create.mockResolvedValue(1);

            const result = await createClientUseCase.execute(client);

            expect(result).toBe(1);
            expect(clientRepository.create).toHaveBeenCalledWith(client);
        });
    });

    describe("FindClientUseCase", () => {
        it("should return a client if found", async () => {
            const client: ClientEntity = { id: 1, name: "Jane Doe", email: "jane@example.com" };
            clientRepository.findById.mockResolvedValue(client);

            const result = await findClientUseCase.execute(1);

            expect(result).toEqual(client);
            expect(clientRepository.findById).toHaveBeenCalledWith(1);
        });

        it("should return null if client not found", async () => {
            clientRepository.findById.mockResolvedValue(null);

            const result = await findClientUseCase.execute(1);

            expect(result).toBeNull();
            expect(clientRepository.findById).toHaveBeenCalledWith(1);
        });
    });

    describe("FindAllClientsUseCase", () => {
        it("should return an array of clients", async () => {
            const clients: ClientEntity[] = [{ id: 1, name: "Jane Doe", email: "jane@example.com" }];
            clientRepository.findAll.mockResolvedValue(clients);

            const result = await findAllClientsUseCase.execute();

            expect(result).toEqual(clients);
            expect(clientRepository.findAll).toHaveBeenCalled();
        });
    });
});
