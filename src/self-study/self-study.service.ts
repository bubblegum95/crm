import { Injectable } from '@nestjs/common';
import { CreateSelfStudyDto } from './dto/create-self-study.dto';
import { UpdateSelfStudyDto } from './dto/update-self-study.dto';

@Injectable()
export class SelfStudyService {
  create(createSelfStudyDto: CreateSelfStudyDto) {
    return 'This action adds a new selfStudy';
  }

  findAll() {
    return `This action returns all selfStudy`;
  }

  findOne(id: number) {
    return `This action returns a #${id} selfStudy`;
  }

  update(id: number, updateSelfStudyDto: UpdateSelfStudyDto) {
    return `This action updates a #${id} selfStudy`;
  }

  remove(id: number) {
    return `This action removes a #${id} selfStudy`;
  }
}
