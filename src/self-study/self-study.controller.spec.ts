import { Test, TestingModule } from '@nestjs/testing';
import { SelfStudyController } from './self-study.controller';
import { SelfStudyService } from './self-study.service';

describe('SelfStudyController', () => {
  let controller: SelfStudyController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SelfStudyController],
      providers: [SelfStudyService],
    }).compile();

    controller = module.get<SelfStudyController>(SelfStudyController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
