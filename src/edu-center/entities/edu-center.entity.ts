import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Course } from '../../course/entities/course.entity';
import { Notice } from '../../notice/entities/notice.entity';

@Entity({ name: 'EDUCENTER' })
export class EduCenter {
  @PrimaryGeneratedColumn({ name: 'ID' })
  id: number;

  @Column({ name: 'NAME', type: 'varchar2', nullable: false })
  name: string;

  @Column({
    name: 'BUSINESS_NUM',
    length: 20,
    type: 'varchar2',
    nullable: false,
  })
  businessNum: string;

  @Column({
    name: 'PHONE',
    length: 10,
    type: 'varchar2',
    nullable: false,
  })
  phone: string;

  @Column({ name: 'IS_DELETED', type: 'boolean', default: false })
  isDeleted: boolean;

  @CreateDateColumn({ name: 'CREATED_AT' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'UPDATED_AT' })
  updatedAt: Date;

  @OneToMany(() => Course, (courses) => courses.eduCenter)
  courses: Course[];

  @OneToMany(() => Notice, (notice) => notice.eduCenter)
  notices: Notice[];
}
