import { Controller, Get } from '@nestjs/common';
import { JobService } from './job.service';

@Controller('jobs')
export class JobController {
  constructor(private readonly jobService: JobService) {}

  @Get()
  async findAllJobs() {
    return await this.jobService.findAll();
  }
  @Get('hello')
  async hello() {
    return 'Hello World!';
  }
}
