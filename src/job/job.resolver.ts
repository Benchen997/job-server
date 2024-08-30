import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { JobService } from './job.service';
import { Job } from '../entities/job.entity';

@Resolver(() => Job)
export class JobResolver {
  constructor(private readonly jobService: JobService) {}

  @Query(() => [Job], { name: 'jobs' })
  async findAllJobs() {
    return this.jobService.findAllJobs();
  }

  @Query(() => Job, { name: 'job', nullable: true })
  async findJobById(@Args('id', { type: () => Int }) id: number) {
    return this.jobService.findJobById(id);
  }

  @Query(() => [Job], { name: 'pendingJobs' })
  async findAllPendingJobs() {
    return this.jobService.findAllPendingJobs();
  }

  @Mutation(() => Job)
  async createJob(@Args('name') name: string) {
    return this.jobService.createJob(name);
  }
}
