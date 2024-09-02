import { Injectable } from '@nestjs/common';
import { Job } from '../entities/job.entity';
import { JobStatus } from '../entities/JobStatus';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { pubSub } from './pubsub';

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
    const savedJob = await this.jobRepository.save(job);
    // Publish the new job creation event
    await pubSub.publish('jobAdded', { jobAdded: savedJob });

    return savedJob;
  }

  async updateJobStatus(id: number, status: JobStatus): Promise<Job> {
    const job = await this.jobRepository.findOne({ where: { id } });
    if (job) {
      job.status = status;
      const updatedJob = await this.jobRepository.save(job);
      // Publish the job status update event
      await pubSub.publish('jobUpdated', { jobUpdated: updatedJob });

      return updatedJob;
    }
    return null;
  }
}
