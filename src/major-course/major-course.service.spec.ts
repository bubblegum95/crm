import { Test, TestingModule } from '@nestjs/testing';
import { MajorCourseService } from './major-course.service';

describe('MajorCourseService', () => {
  let service: MajorCourseService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MajorCourseService],
    }).compile();

    service = module.get<MajorCourseService>(MajorCourseService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
