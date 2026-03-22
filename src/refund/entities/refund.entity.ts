import {
  Column,
  CreateDateColumn,
  Entity,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Entrollment } from '../../entrollment/entities/entrollment.entity';

@Entity({ name: 'REFUND' })
export class Refund {
  @PrimaryGeneratedColumn({ name: 'ID' })
  id: number;

  @Column({
    name: 'REFUND_REASON',
    type: 'varchar2',
    length: 30,
    nullable: false,
  })
  refund_reason: string;

  @CreateDateColumn({ name: 'CREATED_AT', nullable: false })
  createdAt: Date;

  @Column({ name: 'REFUND_PRICE', type: 'number', nullable: false })
  @OneToOne(() => Entrollment, (entrollment) => entrollment.refund, {
    cascade: ['insert', 'update'],
  })
  entrollment: Entrollment;
}
