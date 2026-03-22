import { Injectable } from '@nestjs/common';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { ILike, JoinOptions, Repository } from 'typeorm';
import { Employee } from './entities/employee.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOptions } from './type/find-options.type';

@Injectable()
export class EmployeeService {
  constructor(
    @InjectRepository(Employee)
    private readonly employeeRepository: Repository<Employee>,
  ) {}

  async create(createEmployeeDto: CreateEmployeeDto) {
    return this.employeeRepository.create(createEmployeeDto);
  }

  async findAll<V extends string | number | Date>(
    options: FindOptions,
    value: V,
  ): Promise<Employee[] | null> {
    const queryMap = {
      name: { name: ILike(`%${value}%`) },
      phone: { phone: value },
      department: { department: value },
      hireDate: { hireDate: value },
    };
    const whereCondition = queryMap[options] || {};
    const joinOptions: JoinOptions = {
      alias: 'employee',
      innerJoin: { department: 'employee.department' },
    };
    return await this.employeeRepository.find({
      join: joinOptions,
      where: whereCondition,
    });
  }

  async findOne(id: number): Promise<Employee | null> {
    return await this.employeeRepository.findOneBy({ id });
  }

  async update(id: number, updateEmployeeDto: UpdateEmployeeDto) {
    return `This action updates a #${id} employee`;
  }

  async remove(id: number) {
    return `This action removes a #${id} employee`;
  }
}
