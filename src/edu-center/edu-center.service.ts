import { Injectable } from '@nestjs/common';
import { CreateEduCenterDto } from './dto/create-edu-center.dto';
import { UpdateEduCenterDto } from './dto/update-edu-center.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { EduCenter } from './entities/edu-center.entity';
import { Repository } from 'typeorm';

@Injectable()
export class EduCenterService {
  constructor(
    @InjectRepository(EduCenter)
    private readonly educenterRepository: Repository<EduCenter>,
  ) {}
  create(createEduCenterDto: CreateEduCenterDto): EduCenter | null {
    return this.educenterRepository.create(createEduCenterDto);
  }

  async findAll(isDeleted: boolean | null): Promise<EduCenter[] | null> {
    return await this.educenterRepository.find({
      where: { isDeleted: isDeleted ?? false },
    });
  }

  async findOne(id: number): Promise<EduCenter | null> {
    return await this.educenterRepository.findOne({ where: { id } });
  }

  update(id: number, updateEduCenterDto: UpdateEduCenterDto) {
    return `This action updates a #${id} eduCenter`;
  }

  remove(id: number) {
    return `This action removes a #${id} eduCenter`;
  }
}
