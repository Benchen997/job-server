import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Job } from '../entities/job.entity';
import { JobController } from './job.controller';
import { JobService } from './job.service';
import { JobGateway } from './job.gateway';

@Module({
  imports: [TypeOrmModule.forFeature([Job])],
  controllers: [JobController],
  providers: [JobService, JobGateway],
})
export class JobModule {}
