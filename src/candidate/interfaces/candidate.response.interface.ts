import { CandidateInterface } from './candidate.interface';

export interface CandidateResponseInterface {
  data: CandidateInterface[];
  included?: any[];
}
