import { Test, TestingModule } from '@nestjs/testing';
import { EduCenterController } from './edu-center.controller';
import { EduCenterService } from './edu-center.service';

describe('EduCenterController', () => {
  let controller: EduCenterController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EduCenterController],
      providers: [EduCenterService],
    }).compile();

    controller = module.get<EduCenterController>(EduCenterController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
