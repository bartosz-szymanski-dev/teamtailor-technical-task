import { CandidateAttributesModel } from './candidate.attributes.model';
import { CandidateRelationshipsModel } from './candidate.relationships.model';
import { IsNotEmpty, IsNumberString, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

export class CandidateModel {
  @IsNumberString()
  @IsNotEmpty()
  id: string;

  @ValidateNested()
  @Type(() => CandidateAttributesModel)
  attributes: CandidateAttributesModel;

  @ValidateNested()
  @Type(() => CandidateRelationshipsModel)
  relationships: CandidateRelationshipsModel;
}
