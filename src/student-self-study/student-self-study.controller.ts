import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { StudentSelfStudyService } from './student-self-study.service';
import { CreateStudentSelfStudyDto } from './dto/create-student-self-study.dto';
import { UpdateStudentSelfStudyDto } from './dto/update-student-self-study.dto';

@Controller('student-self-study')
export class StudentSelfStudyController {
  constructor(private readonly studentSelfStudyService: StudentSelfStudyService) {}

  @Post()
  create(@Body() createStudentSelfStudyDto: CreateStudentSelfStudyDto) {
    return this.studentSelfStudyService.create(createStudentSelfStudyDto);
  }

  @Get()
  findAll() {
    return this.studentSelfStudyService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.studentSelfStudyService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateStudentSelfStudyDto: UpdateStudentSelfStudyDto) {
    return this.studentSelfStudyService.update(+id, updateStudentSelfStudyDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.studentSelfStudyService.remove(+id);
  }
}
