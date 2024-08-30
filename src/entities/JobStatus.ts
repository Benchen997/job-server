import { registerEnumType } from '@nestjs/graphql';

export enum JobStatus {
  PENDING = 'PENDING',
  IN_PROGRESS = 'IN_PROGRESS',
  COMPLETED = 'COMPLETED',
  FAILED = 'FAILED',
}

// Register the enum type
registerEnumType(JobStatus, {
  name: 'JobStatus', // This will be the name of the enum in the GraphQL schema
  description: 'The status of a job', // Optional description
});
