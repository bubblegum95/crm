import { Test, TestingModule } from '@nestjs/testing';
import { StudentSelfStudyService } from './student-self-study.service';

describe('StudentSelfStudyService', () => {
  let service: StudentSelfStudyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StudentSelfStudyService],
    }).compile();

    service = module.get<StudentSelfStudyService>(StudentSelfStudyService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
