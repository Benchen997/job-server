import {
  Controller,
  Get,
  Post,
  Param,
  Query,
  BadRequestException,
} from '@nestjs/common';
import { JobService } from './job.service';
import { JobStatus } from 'src/entities/job.entity';

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
  @Post('create/:name')
  async createJob(@Param('name') name: string) {
    if (!name) {
      return new BadRequestException('Name is required');
    }
    return await this.jobService.create(name);
  }
  @Post('update/:id')
  async updateJob(@Param('id') id: number, @Query('status') status: JobStatus) {
    if (!id) {
      throw new BadRequestException('Id is required');
    }
    if (!status) {
      throw new BadRequestException('Status is required');
    }
    return await this.jobService.updateStatus(id, status);
  }
}
