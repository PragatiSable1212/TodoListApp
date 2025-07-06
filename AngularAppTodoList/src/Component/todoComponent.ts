import { Component, OnInit } from '@angular/core';
import { TodoEntity } from '../todoEntity';
import { TodoService } from '../Service/todoService';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todo',
  imports: [FormsModule,CommonModule],
  templateUrl: './todo.html',
  styleUrl: './todo.css'
})
export class TodoComponent implements OnInit {

  todos: TodoEntity[] = [];
  newTodo: TodoEntity = new TodoEntity(0, '', '');
  todoService: TodoService;

  constructor(todoService: TodoService) {

    this.todoService = todoService;
  }

  ngOnInit() {
    this.getTodos();
  }
    
  addTodo() {
    if (this.newTodo.title && this.newTodo.description) {
      this.todoService.addTodo(this.newTodo).subscribe({
        next:(resp) => {
          console.log('Todo added successfully:', resp);
        }
      });
    }
  }
  deleteTodo(id: number|undefined) {
    if(id)
    this.todoService.deleteTodo(id).subscribe({
      next: () => {
        console.log('Todo deleted successfully');
        this.getTodos(); // Refresh the list after deletion
      },
      error: (err) => {
        console.error('Error deleting todo:', err);
      }
    });
    
  }

  editTodo(todo: TodoEntity) {
    console.log('Editing todo:', todo.title, todo.description);
    console.log('Todo ID:', this.newTodo);
    todo=this.newTodo;
    this.todoService.updateTodo(todo).subscribe({
      next:(resp) => {
        console.log('Todo updated successfully:', resp);
      }
    });
  }

  getTodos() {
    this.todoService.getTodos().subscribe({
      next:(resp) => {
        this.todos = resp;
        console.log('Todos fetched successfully:', resp);
      }
    });
  }


}
