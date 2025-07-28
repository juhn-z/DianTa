import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  user_id: string;

  @Column()
  user_name: string;

  @Column()
  real_name: string;

  @Column()
  created_at: number;

  @Column()
  updated_at: number;

  @Column()
  sex: number;

  @Column()
  mobile_phone: string;

  @Column()
  email: string;
}
