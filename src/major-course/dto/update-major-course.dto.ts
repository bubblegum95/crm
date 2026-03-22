import { PartialType } from '@nestjs/swagger';
import { CreateMajorCourseDto } from './create-major-course.dto';

export class UpdateMajorCourseDto extends PartialType(CreateMajorCourseDto) {}
