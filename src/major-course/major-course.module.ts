import { Module } from '@nestjs/common';
import { MajorCourseService } from './major-course.service';
import { MajorCourseController } from './major-course.controller';

@Module({
  controllers: [MajorCourseController],
  providers: [MajorCourseService],
})
export class MajorCourseModule {}
