import { Test, TestingModule } from '@nestjs/testing';
import { SelfStudyService } from './self-study.service';

describe('SelfStudyService', () => {
  let service: SelfStudyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SelfStudyService],
    }).compile();

    service = module.get<SelfStudyService>(SelfStudyService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
