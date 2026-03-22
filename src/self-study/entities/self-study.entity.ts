import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { LevelType } from '../type/level.type';
import { StudentCertification } from '../../student-certification/entities/student-certification.entity';
import { Major } from '../../major/entities/major.entity';

@Entity({ name: 'SELF_STUDY' })
export class SelfStudy {
  @PrimaryGeneratedColumn({ name: 'ID' })
  id: string;

  @Column({ name: 'LEVEL', type: 'enum', enum: LevelType, nullable: false })
  level: LevelType;

  @Column({ name: 'NAME', type: 'varchar2', unique: true, nullable: true })
  name: string;

  @Column({ name: 'CREDIT', type: 'number', nullable: true })
  credit: number;

  @Column({ name: 'START_DATE', type: 'date', nullable: false })
  startDate: Date;

  @Column({ name: 'RES_DATE', type: 'date', nullable: false })
  resDate: Date;

  @OneToMany(
    () => StudentCertification,
    (studentCertification) => studentCertification.selfStudy,
  )
  studentCertifications: StudentCertification[];

  @ManyToOne(() => Major, (major) => major.selfStudies, {
    cascade: ['insert', 'update'],
  })
  major: Major;
}
