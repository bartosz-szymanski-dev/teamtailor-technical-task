import { CandidateJobApplicationsDataModel } from './candidate.job-applications.data.model';
import { ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

export class CandidateJobApplicationsModel {
  @ValidateNested()
  @Type(() => CandidateJobApplicationsDataModel)
  data: CandidateJobApplicationsDataModel[];
}
