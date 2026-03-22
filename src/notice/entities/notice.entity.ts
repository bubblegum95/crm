import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { EduCenter } from '../../edu-center/entities/edu-center.entity';
import { Employee } from '../../employee/entities/employee.entity';

@Entity({ name: 'NOTICE' })
export class Notice {
  @PrimaryGeneratedColumn({ name: 'ID' })
  id: string;

  @Column({ name: 'HEAD', type: 'varchar2', length: 50, nullable: false })
  head: string;

  @Column({ name: 'CONTENT', type: 'varchar2', length: 300, nullable: false })
  content: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @JoinColumn({ name: 'EDUCENTER_ID' })
  @ManyToOne(() => EduCenter, (eduCenter) => eduCenter.notices, {
    cascade: ['insert', 'update'],
  })
  eduCenter: EduCenter;

  @JoinColumn({ name: 'AUTHOR_ID' })
  @ManyToOne(() => Employee, (author) => author.notices, {
    cascade: ['insert', 'update'],
  })
  authorId: Employee;
}
