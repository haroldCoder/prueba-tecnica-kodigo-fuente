/* Recopilamos todos los repositorios que vamos a usar */

import type { ITicketsRepository, AgentsRepository, ClientsRepository } from "@shared/domain/respositories";
import { HttpTicketsRepository, HttpAgentsRepository, HttpClientsRepository } from "@shared/infrastructure/repositories";

export class DiFactory {
    static createTicketsRepository(): ITicketsRepository {
        return new HttpTicketsRepository();
    }

    static createAgentsRepository(): AgentsRepository {
        return new HttpAgentsRepository();
    }

    static createClientsRepository(): ClientsRepository {
        return new HttpClientsRepository();
    }
}