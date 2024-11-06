import { CandidateModel } from './candidate.model';
import { ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { CandidateLinksModel } from './candidate.links.model';

export class CandidateResponseModel {
  @ValidateNested()
  @Type(() => CandidateModel)
  data: CandidateModel[];

  included?: any[];

  links: CandidateLinksModel;
}
