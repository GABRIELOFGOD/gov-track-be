import { Category } from 'src/types';
import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity("project")
export class Project {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column({ type: "enum", enum: Category })
  category: Category;

  @Column()
  location: string;

  @Column()
  state: string;

  @Column()
  lga: string;

  @Column({ type: 'decimal', nullable: true })
  budget: number | null;

  @Column({ nullable: true })
  others: string | null;

  @Column({ type: 'date' })
  start_date: Date;

  @Column({ type: 'date' })
  end_date: Date;

  @DeleteDateColumn()
  deletedAt: Date | null;

  @Column()
  contractorName: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
