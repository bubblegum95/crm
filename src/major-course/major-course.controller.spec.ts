import { Test, TestingModule } from '@nestjs/testing';
import { MajorCourseController } from './major-course.controller';
import { MajorCourseService } from './major-course.service';

describe('MajorCourseController', () => {
  let controller: MajorCourseController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MajorCourseController],
      providers: [MajorCourseService],
    }).compile();

    controller = module.get<MajorCourseController>(MajorCourseController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
