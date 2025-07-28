/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './modules/users/users.module';

import { DataSource } from 'typeorm';
import { User } from './modules/users/entities/user.entity';
import { MessagesModule } from './modules/messages/messages.module';
import { LiveModule } from './modules/live/live.module';
import { PlatformModule } from './modules/platform/platform.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'Zz608003.',
      database: 'dianta',
      entities: [User],
      synchronize: true,
    }),
    UsersModule,
    MessagesModule,
    LiveModule,
    PlatformModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
