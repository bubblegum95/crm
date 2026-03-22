import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { StudentCertificationService } from './student-certification.service';
import { CreateStudentCertificationDto } from './dto/create-student-certification.dto';
import { UpdateStudentCertificationDto } from './dto/update-student-certification.dto';

@Controller('student-certification')
export class StudentCertificationController {
  constructor(private readonly studentCertificationService: StudentCertificationService) {}

  @Post()
  create(@Body() createStudentCertificationDto: CreateStudentCertificationDto) {
    return this.studentCertificationService.create(createStudentCertificationDto);
  }

  @Get()
  findAll() {
    return this.studentCertificationService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.studentCertificationService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateStudentCertificationDto: UpdateStudentCertificationDto) {
    return this.studentCertificationService.update(+id, updateStudentCertificationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.studentCertificationService.remove(+id);
  }
}
