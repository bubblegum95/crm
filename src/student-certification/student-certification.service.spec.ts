import { Test, TestingModule } from '@nestjs/testing';
import { StudentCertificationService } from './student-certification.service';

describe('StudentCertificationService', () => {
  let service: StudentCertificationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StudentCertificationService],
    }).compile();

    service = module.get<StudentCertificationService>(StudentCertificationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
