import { Injectable } from '@nestjs/common';
import { Job } from '../entities/job.entity';
import { JobStatus } from '../entities/JobStatus';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class JobService {
  constructor(
    @InjectRepository(Job)
    private readonly jobRepository: Repository<Job>,
  ) {}
  async findAllJobs(): Promise<Job[]> {
    return this.jobRepository.find();
  }
  async findJobById(id: number): Promise<Job> {
    return this.jobRepository.findOne({ where: { id } });
  }
  async findAllPendingJobs(): Promise<Job[]> {
    return this.jobRepository.find({
      where: {
        status: JobStatus.PENDING,
      },
    });
  }
  async createJob(name: string): Promise<Job> {
    const job = new Job();
    job.name = name;
    job.status = JobStatus.PENDING;
    return this.jobRepository.save(job);
  }
}
