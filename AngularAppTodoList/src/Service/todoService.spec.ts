import { TestBed } from '@angular/core/testing';

import { TodoService } from './todoService';
import { TodoEntity } from '../todoEntity';

describe('TodoService', () => {
  let service: TodoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

 

});
