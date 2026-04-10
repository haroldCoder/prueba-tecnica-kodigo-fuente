import { TypeOrmModuleAsyncOptions } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { DatabaseConfig } from '@config/database.config';

export const typeOrmAsyncOptions: TypeOrmModuleAsyncOptions = {
    imports: [ConfigModule],
    inject: [ConfigService],
    useFactory: (configService: ConfigService) => {
        const db = configService.get<DatabaseConfig>('database')!;
        return {
            type: 'postgres',
            host: db.host,
            port: db.port,
            username: db.username,
            password: db.password,
            database: db.name,
            synchronize: db.synchronize,
            logging: db.logging,
            // Rutas donde TypeORM buscará las entidades de cada módulo
            entities: [__dirname + '/../../../**/*.entity{.ts,.js}'],
            autoLoadEntities: true,
        };
    },
};
