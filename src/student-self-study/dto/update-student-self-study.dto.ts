import { PartialType } from '@nestjs/swagger';
import { CreateStudentSelfStudyDto } from './create-student-self-study.dto';

export class UpdateStudentSelfStudyDto extends PartialType(CreateStudentSelfStudyDto) {}
