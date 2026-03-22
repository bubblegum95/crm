import { Test, TestingModule } from '@nestjs/testing';
import { EduCenterService } from './edu-center.service';

describe('EduCenterService', () => {
  let service: EduCenterService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EduCenterService],
    }).compile();

    service = module.get<EduCenterService>(EduCenterService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
