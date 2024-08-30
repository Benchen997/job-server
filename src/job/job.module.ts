import { Module } from '@nestjs/common';
import { JobService } from './job.service';
import { JobResolver } from './job.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Job } from '../entities/job.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Job])],
  providers: [JobService, JobResolver],
})
export class JobModule {}
