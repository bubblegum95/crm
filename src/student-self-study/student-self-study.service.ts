import { Injectable } from '@nestjs/common';
import { CreateStudentSelfStudyDto } from './dto/create-student-self-study.dto';
import { UpdateStudentSelfStudyDto } from './dto/update-student-self-study.dto';

@Injectable()
export class StudentSelfStudyService {
  create(createStudentSelfStudyDto: CreateStudentSelfStudyDto) {
    return 'This action adds a new studentSelfStudy';
  }

  findAll() {
    return `This action returns all studentSelfStudy`;
  }

  findOne(id: number) {
    return `This action returns a #${id} studentSelfStudy`;
  }

  update(id: number, updateStudentSelfStudyDto: UpdateStudentSelfStudyDto) {
    return `This action updates a #${id} studentSelfStudy`;
  }

  remove(id: number) {
    return `This action removes a #${id} studentSelfStudy`;
  }
}
