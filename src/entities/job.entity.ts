import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
} from 'typeorm';
import { ObjectType, Field, Int } from '@nestjs/graphql';
import { JobStatus } from './JobStatus';

@Entity()
@ObjectType() // <-- Add this decorator
export class Job {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number;

  @Column()
  @Field()
  name: string;

  @Column()
  @Field(() => JobStatus)
  status: JobStatus;

  @CreateDateColumn()
  @Field()
  createdAt: Date;
}
