import { Injectable } from '@angular/core';
import { TodoEntity } from '../todoEntity';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http:HttpClient) { }

  addTodo(todo: any) {
    // Logic to add a new todo
    return this.http.post<TodoEntity[]>('http://localhost:3000/todos/create', todo);

}
  deleteTodo(id: number) {
    // Logic to delete a todo by id
    return this.http.delete(`http://localhost:3000/todos/${id}`);
  }

  updateTodo(todo: TodoEntity) {
    // Logic to update a todo
    return this.http.put<TodoEntity>(`http://localhost:3000/todos/${todo.id}`, todo);
  }

  getTodos(){
    // Logic to fetch all todos
    return this.http.get<TodoEntity[]>('http://localhost:3000/todos');
  }

}