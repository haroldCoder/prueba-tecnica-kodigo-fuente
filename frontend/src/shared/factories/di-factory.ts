/* Recopilamos todos los repositorios que vamos a usar */

import type { ITicketsRepository } from "@shared/domain/respositories";
import { HttpTicketsRepository } from "@shared/infrastructure/repositories";

export class DiFactory {
    static createTicketsRepository(): ITicketsRepository {
        return new HttpTicketsRepository();
    }
}