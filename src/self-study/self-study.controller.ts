import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SelfStudyService } from './self-study.service';
import { CreateSelfStudyDto } from './dto/create-self-study.dto';
import { UpdateSelfStudyDto } from './dto/update-self-study.dto';

@Controller('self-study')
export class SelfStudyController {
  constructor(private readonly selfStudyService: SelfStudyService) {}

  @Post()
  create(@Body() createSelfStudyDto: CreateSelfStudyDto) {
    return this.selfStudyService.create(createSelfStudyDto);
  }

  @Get()
  findAll() {
    return this.selfStudyService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.selfStudyService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSelfStudyDto: UpdateSelfStudyDto) {
    return this.selfStudyService.update(+id, updateSelfStudyDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.selfStudyService.remove(+id);
  }
}
