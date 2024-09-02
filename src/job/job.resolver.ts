import {
  Resolver,
  Query,
  Mutation,
  Args,
  Int,
  Subscription,
} from '@nestjs/graphql';
import { JobService } from './job.service';
import { Job } from '../entities/job.entity';
import { JobStatus } from '../entities/JobStatus';
import { pubSub } from './pubsub';

@Resolver(() => Job)
export class JobResolver {
  constructor(private readonly jobService: JobService) {}

  @Query(() => [Job], { name: 'jobs' })
  async findAllJobs() {
    return this.jobService.findAllJobs();
  }

  @Mutation(() => Job)
  async createJob(@Args('name') name: string) {
    return this.jobService.createJob(name);
  }

  @Mutation(() => Job)
  async updateJobStatus(
    @Args('id', { type: () => Int }) id: number,
    @Args('status', { type: () => String }) status: JobStatus,
  ) {
    return this.jobService.updateJobStatus(id, status);
  }

  @Subscription(() => Job, {
    resolve: (value) => value,
  })
  jobAdded() {
    return pubSub.asyncIterator('jobAdded');
  }

  @Subscription(() => Job, {
    resolve: (value) => value,
  })
  jobUpdated() {
    return pubSub.asyncIterator('jobUpdated');
  }
}
