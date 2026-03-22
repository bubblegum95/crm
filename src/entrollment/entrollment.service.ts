import { Injectable } from '@nestjs/common';
import { CreateEntrollmentDto } from './dto/create-entrollment.dto';
import { UpdateEntrollmentDto } from './dto/update-entrollment.dto';

@Injectable()
export class EntrollmentService {
  create(createEntrollmentDto: CreateEntrollmentDto) {
    return 'This action adds a new entrollment';
  }

  findAll() {
    return `This action returns all entrollment`;
  }

  findOne(id: number) {
    return `This action returns a #${id} entrollment`;
  }

  update(id: number, updateEntrollmentDto: UpdateEntrollmentDto) {
    return `This action updates a #${id} entrollment`;
  }

  remove(id: number) {
    return `This action removes a #${id} entrollment`;
  }
}
