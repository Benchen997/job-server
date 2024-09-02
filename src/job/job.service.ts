import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Job, JobStatus } from '../entities/job.entity';
@Injectable()
export class JobService {
  constructor(
    @InjectRepository(Job)
    private readonly jobRepository: Repository<Job>,
  ) {}
  /**
   * This method returns all the jobs from the database.
   * @returns the list of all jobs.
   */
  async findAll(): Promise<Job[]> {
    return await this.jobRepository.find();
  }

  /**
   * This method creates a new job in the database.
   * @param name the name of the job.
   * @returns the newly created job.
   */
  async create(name: string): Promise<Job> {
    const job = new Job();
    job.name = name;
    return await this.jobRepository.save(job);
  }

  /**
   * This method updates the status of a job in the database.
   * @param id the id of the job.
   * @param status the new status of the job.
   * @returns the updated job.
   */
  async updateStatus(id: number, status: JobStatus): Promise<Job> {
    const job = await this.jobRepository.findOne({ where: { id } });
    job.status = status;
    return await this.jobRepository.save(job);
  }
}
