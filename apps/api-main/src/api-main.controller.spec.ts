import { Test, TestingModule } from '@nestjs/testing';
import { ApiMainController } from './api-main.controller';
import { ApiMainService } from './api-main.service';

describe('ApiMainController', () => {
  let apiMainController: ApiMainController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [ApiMainController],
      providers: [ApiMainService],
    }).compile();

    apiMainController = app.get<ApiMainController>(ApiMainController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(apiMainController.getHello()).toBe('Hello World!');
    });
  });
});
