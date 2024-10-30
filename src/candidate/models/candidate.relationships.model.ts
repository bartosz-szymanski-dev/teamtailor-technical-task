import { CandidateJobApplicationsModel } from './candidate.job-applications.model';
import { ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

export class CandidateRelationshipsModel {
  @ValidateNested()
  @Type(() => CandidateJobApplicationsModel)
  'job-applications': CandidateJobApplicationsModel;
}
