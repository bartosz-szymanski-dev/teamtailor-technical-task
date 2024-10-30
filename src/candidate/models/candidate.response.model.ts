import { CandidateModel } from './candidate.model';
import { ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

export class CandidateResponseModel {
  @ValidateNested()
  @Type(() => CandidateModel)
  data: CandidateModel[];

  included?: any[];
}
