import { Injectable } from '@nestjs/common';
import { CreateStudentCertificationDto } from './dto/create-student-certification.dto';
import { UpdateStudentCertificationDto } from './dto/update-student-certification.dto';

@Injectable()
export class StudentCertificationService {
  create(createStudentCertificationDto: CreateStudentCertificationDto) {
    return 'This action adds a new studentCertification';
  }

  findAll() {
    return `This action returns all studentCertification`;
  }

  findOne(id: number) {
    return `This action returns a #${id} studentCertification`;
  }

  update(id: number, updateStudentCertificationDto: UpdateStudentCertificationDto) {
    return `This action updates a #${id} studentCertification`;
  }

  remove(id: number) {
    return `This action removes a #${id} studentCertification`;
  }
}
