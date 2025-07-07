import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoEntity } from './todo.Entity';

describe('AppController', () => {
  let appController: AppController;
  let appService: AppService;

  const mockTodos: TodoEntity[] = [
    { id: 1, title: 'Test Todo', description: 'Test Description' },
    { id: 2, title: 'Second Todo', description: 'Another description' }
  ];

  const mockAppService = {
    getTodos: jest.fn().mockResolvedValue(mockTodos)
  };

   beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [
        { provide: AppService, useValue: mockAppService }
      ]
    }).compile();

    appController = module.get<AppController>(AppController);
    appService = module.get<AppService>(AppService);
  });

  it('should return all todos', async () => {
    const result = await appController.getTodos();
    expect(result).toEqual(mockTodos);
    expect(appService.getTodos).toHaveBeenCalled();
  });
});
