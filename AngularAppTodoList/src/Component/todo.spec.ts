import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoComponent } from './todoComponent';
import { TodoEntity } from '../todoEntity';

describe('TodoComponent', () => {
  let component: TodoComponent;
  let fixture: ComponentFixture<TodoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a title', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h3')?.textContent).toContain('Completed !!!');
  });

   it('should add a new todo', () => {
     const newTodo: TodoEntity = {
       id: 1,
       title: 'Learn Angular Testing',
       description: 'Learn Angular Testing',
       
     };

     component.addTodo();

     const todos = (component as any).todos;
     expect(todos.length).toBe(1);
     expect(todos[0]).toEqual(newTodo);
   });

  });