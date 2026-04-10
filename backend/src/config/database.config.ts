import { registerAs } from '@nestjs/config';

export interface DatabaseConfig {
    host: string;
    port: number;
    username: string;
    password: string;
    name: string;
    synchronize: boolean;
    logging: boolean;
}

export default registerAs(
    'database',
    (): DatabaseConfig => ({
        host: process.env.DB_HOST ?? 'localhost',
        port: parseInt(process.env.DB_PORT ?? '5432', 10),
        username: process.env.DB_USER ?? 'postgres',
        password: process.env.DB_PASSWORD ?? '',
        name: process.env.DB_NAME ?? 'prueba_tecnica',
        synchronize: process.env.DB_SYNC === 'true',
        logging: process.env.DB_LOGGING === 'true',
    }),
);
