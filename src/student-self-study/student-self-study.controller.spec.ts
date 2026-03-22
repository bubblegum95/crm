import { Test, TestingModule } from '@nestjs/testing';
import { StudentSelfStudyController } from './student-self-study.controller';
import { StudentSelfStudyService } from './student-self-study.service';

describe('StudentSelfStudyController', () => {
  let controller: StudentSelfStudyController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StudentSelfStudyController],
      providers: [StudentSelfStudyService],
    }).compile();

    controller = module.get<StudentSelfStudyController>(StudentSelfStudyController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
