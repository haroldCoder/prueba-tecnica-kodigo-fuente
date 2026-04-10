import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import databaseConfig from '@config/database.config';
import { DatabaseModule } from '@shared/infrastructure/database/database.module';
import { TicketModule } from '@modules-ticket/ticket.module';
import { ClientModule } from '@modules-client/client.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
      load: [databaseConfig],
    }),
    DatabaseModule,
    TicketModule,
    ClientModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }

