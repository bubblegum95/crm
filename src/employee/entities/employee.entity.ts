import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Department } from './department.entity';
import { IsDate } from 'class-validator';
import { Student } from '../../student/entities/student.entity';
import { Notice } from '../../notice/entities/notice.entity';

@Entity({ name: 'EMPLOYEE' })
export class Employee {
  @PrimaryGeneratedColumn({ name: 'ID' })
  id: number;

  @Column({ name: 'NAME', type: 'varchar2', length: 10, nullable: false })
  name: string;

  @Column({
    name: 'PHONE',
    type: 'varchar2',
    length: 11,
    nullable: false,
    unique: true,
  })
  phone: string;

  @IsDate()
  @Column({ name: 'HIRE_DATE', type: 'date', nullable: false })
  hireDate: Date;

  @CreateDateColumn({ name: 'CREATED_AT' })
  createdAt: Date;

  @JoinColumn({ name: 'DEPARTMENT_ID' })
  @ManyToOne(() => Department, (department) => department.employees, {
    cascade: ['insert', 'update'],
  })
  department: Department;

  @OneToMany(() => Student, (students) => students.manager)
  students: Student[];

  @OneToMany(() => Notice, (notices) => notices.authorId)
  notices: Notice[];
}
