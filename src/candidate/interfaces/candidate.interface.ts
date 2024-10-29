import { CandidateAttributesInterface } from './candidate.attributes.interface';
import { CandidateRelationshipsInterface } from './candidate.relationships.interface';

export interface CandidateInterface {
  id: string;
  attributes: CandidateAttributesInterface;
  relationships: CandidateRelationshipsInterface;
}
