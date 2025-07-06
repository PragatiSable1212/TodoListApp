import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { AppService } from './app.service';
import { TodoEntity } from './todo.Entity';

@Controller('todos')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getTodos() {
    return this.appService.getTodos();
  }

  @Post('create')
  createTodo(@Body() todo: TodoEntity) {
    console.log("Creating todo:", todo);
    return this.appService.createTodo(todo);
  }

  @Put(':id')
  updateTodo(@Param('id') id: number, @Body() todo: TodoEntity) {
    return this.appService.updateTodo(id, todo);
  }
  @Delete(':id')
  deleteTodo(@Param('id') id: number) {
    console.log("Deleting todo with id:", id);
    return this.appService.deleteTodo(id);
  }

}
