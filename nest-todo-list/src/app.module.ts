import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoEntity } from './todo.Entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [ TypeOrmModule.forRoot({
      type: 'mysql',            // or 'postgres'
      host: 'localhost',
      port: 3306,               // 5432 for PostgreSQL
      username: 'root',         // your DB username
      password: 'root',     // your DB password
      database: 'demo1',       // your DB name
      entities: [TodoEntity],
      synchronize: true,        // auto-create tables (off in prod)
    }),TypeOrmModule.forFeature([TodoEntity])],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
