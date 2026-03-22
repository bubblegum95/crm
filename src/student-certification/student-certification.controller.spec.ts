import { Test, TestingModule } from '@nestjs/testing';
import { StudentCertificationController } from './student-certification.controller';
import { StudentCertificationService } from './student-certification.service';

describe('StudentCertificationController', () => {
  let controller: StudentCertificationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StudentCertificationController],
      providers: [StudentCertificationService],
    }).compile();

    controller = module.get<StudentCertificationController>(StudentCertificationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
