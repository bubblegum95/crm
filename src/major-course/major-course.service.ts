import { Injectable } from '@nestjs/common';
import { CreateMajorCourseDto } from './dto/create-major-course.dto';
import { UpdateMajorCourseDto } from './dto/update-major-course.dto';

@Injectable()
export class MajorCourseService {
  create(createMajorCourseDto: CreateMajorCourseDto) {
    return 'This action adds a new majorCourse';
  }

  findAll() {
    return `This action returns all majorCourse`;
  }

  findOne(id: number) {
    return `This action returns a #${id} majorCourse`;
  }

  update(id: number, updateMajorCourseDto: UpdateMajorCourseDto) {
    return `This action updates a #${id} majorCourse`;
  }

  remove(id: number) {
    return `This action removes a #${id} majorCourse`;
  }
}
