import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EduCenterService } from './edu-center.service';
import { CreateEduCenterDto } from './dto/create-edu-center.dto';
import { UpdateEduCenterDto } from './dto/update-edu-center.dto';

@Controller('edu-center')
export class EduCenterController {
  constructor(private readonly eduCenterService: EduCenterService) {}

  @Post()
  create(@Body() createEduCenterDto: CreateEduCenterDto) {
    return this.eduCenterService.create(createEduCenterDto);
  }

  @Get()
  findAll() {
    return this.eduCenterService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.eduCenterService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEduCenterDto: UpdateEduCenterDto) {
    return this.eduCenterService.update(+id, updateEduCenterDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.eduCenterService.remove(+id);
  }
}
