import { CreateAgentUseCase } from "./create-agent.use-case";
import { FindAgentUseCase } from "./find-agent.use-case";
import { FindAllAgentsUseCase } from "./find-all-agents.use-case";
import { AgentRepository } from "@modules-agent/domain/repositories";
import { AgentEntity, CreateAgentEntity } from "@modules-agent/domain/entities";

describe("Agent Use Cases", () => {
    let agentRepository: jest.Mocked<AgentRepository>;
    let createAgentUseCase: CreateAgentUseCase;
    let findAgentUseCase: FindAgentUseCase;
    let findAllAgentsUseCase: FindAllAgentsUseCase;

    beforeEach(() => {
        agentRepository = {
            create: jest.fn(),
            findById: jest.fn(),
            findAll: jest.fn(),
        };
        createAgentUseCase = new CreateAgentUseCase(agentRepository);
        findAgentUseCase = new FindAgentUseCase(agentRepository);
        findAllAgentsUseCase = new FindAllAgentsUseCase(agentRepository);
    });

    describe("CreateAgentUseCase", () => {
        it("should create an agent and return its id", async () => {
            const agent: CreateAgentEntity = { name: "John Doe", email: "john@example.com" };
            agentRepository.create.mockResolvedValue(1);

            const result = await createAgentUseCase.execute(agent);

            expect(result).toBe(1);
            expect(agentRepository.create).toHaveBeenCalledWith(agent);
        });
    });

    describe("FindAgentUseCase", () => {
        it("should return an agent if found", async () => {
            const agent: AgentEntity = { id: 1, name: "John Doe", email: "john@example.com" };
            agentRepository.findById.mockResolvedValue(agent);

            const result = await findAgentUseCase.execute(1);

            expect(result).toEqual(agent);
            expect(agentRepository.findById).toHaveBeenCalledWith(1);
        });

        it("should return null if agent not found", async () => {
            agentRepository.findById.mockResolvedValue(null);

            const result = await findAgentUseCase.execute(1);

            expect(result).toBeNull();
            expect(agentRepository.findById).toHaveBeenCalledWith(1);
        });
    });

    describe("FindAllAgentsUseCase", () => {
        it("should return an array of agents", async () => {
            const agents: AgentEntity[] = [{ id: 1, name: "John Doe", email: "john@example.com" }];
            agentRepository.findAll.mockResolvedValue(agents);

            const result = await findAllAgentsUseCase.execute();

            expect(result).toEqual(agents);
            expect(agentRepository.findAll).toHaveBeenCalled();
        });
    });
});
