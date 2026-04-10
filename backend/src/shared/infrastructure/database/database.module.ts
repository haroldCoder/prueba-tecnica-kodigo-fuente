import { Global, Logger, Module, OnApplicationBootstrap } from '@nestjs/common';
import { InjectDataSource } from '@nestjs/typeorm';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { typeOrmAsyncOptions } from './typeorm.config';

/**
 * DatabaseModule (Global)
 *
 * Capa de infraestructura compartida. Se registra una sola vez en AppModule
 * y queda disponible para todos los módulos del dominio.
 */
@Global()
@Module({
    imports: [TypeOrmModule.forRootAsync(typeOrmAsyncOptions)],
    exports: [TypeOrmModule],
})
export class DatabaseModule implements OnApplicationBootstrap {
    private readonly logger = new Logger(DatabaseModule.name);

    constructor(@InjectDataSource() private readonly dataSource: DataSource) { }

    onApplicationBootstrap(): void {
        if (this.dataSource.isInitialized) {
            this.logger.log(
                `Successfully connected to PostgreSQL 🟢 — database: "${this.dataSource.options.database}"`,
            );
        } else {
            this.logger.error(
                'Connection to PostgreSQL failed 🔴 — DataSource is not initialized',
            );
        }
    }
}
