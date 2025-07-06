import { Injectable } from '@nestjs/common';
import { TodoEntity } from './todo.Entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class AppService {

  constructor(
    @InjectRepository(TodoEntity)
    private readonly appRepository: Repository<TodoEntity>,
  ) {}

  async createTodo(todo: TodoEntity): Promise<TodoEntity> {
    return this.appRepository.save(todo);
  }

  async getTodos(): Promise<TodoEntity[]> {
    return this.appRepository.find();
  }

  async updateTodo(id: number, todo: TodoEntity) {
     this.appRepository.update(id, todo);
   
  }
  async deleteTodo(id: number): Promise<void> {
    await this.appRepository.delete(id);
  }

  // createTodo(todo: TodoEntity) {
  //    this.todoEntity.createTodo(todo);
  // }

  // getTodos(): Promise<TodoEntity[]> {
  //   return this.todoEntity.getTodos();
  // }

  // updateTodo(id: number, todo: TodoEntity) {
  //   return this.todoEntity.updateTodo(id, todo);
  // }

  // deleteTodo(id: number) {
  //   console.log("Deleting todo with id:", id);
  //    this.todoEntity.deleteTodo(id);
  // }
}
