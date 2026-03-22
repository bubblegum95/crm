import { IsInt, Min, Max, IsEnum } from 'class-validator';
import {
  PrimaryGeneratedColumn,
  Column,
  Entity,
  CreateDateColumn,
  ManyToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';
import { HighestEduType } from '../type/highestEdu.type';
import { Employee } from '../../employee/entities/employee.entity';
import { InflowPathType } from '../type/inflowPath.type';
import { Entrollment } from '../../entrollment/entities/entrollment.entity';
import { TargetDegreeType } from '../type/target-degree.type';

@Entity({ name: 'STUDENT' })
export class Student {
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

  @IsEnum(HighestEduType)
  @Column({
    name: 'HIGHEST_EDU',
    type: 'enum',
    enum: HighestEduType,
    nullable: false,
  })
  highestEdu: HighestEduType;

  @Column({ name: 'UNIVERSITY', type: 'varchar2', length: 20, nullable: true })
  university: string;

  @IsInt()
  @Min(0)
  @Max(300)
  @Column({ name: 'TRANSFER_CREDIT', type: 'number', nullable: true })
  transferCredit: number;

  @IsEnum(InflowPathType)
  @Column({
    name: 'INFLOW_PATH',
    type: 'enum',
    enum: InflowPathType,
    nullable: true,
  })
  inflowPath: InflowPathType;

  @IsEnum(TargetDegreeType)
  @Column({
    name: 'TARGET_DEGREE',
    type: 'enum',
    enum: TargetDegreeType,
  })
  targetDegree: TargetDegreeType;

  @CreateDateColumn({ name: 'CREATED_AT' })
  createdAt: Date;

  @JoinColumn({ name: 'MANAGER_ID' })
  @ManyToOne(() => Employee, (manager) => manager.students, {
    cascade: ['insert', 'update'],
  })
  manager: Employee;

  @OneToMany(() => Entrollment, (entrollments) => entrollments.student)
  entrollments: Entrollment[];
}
