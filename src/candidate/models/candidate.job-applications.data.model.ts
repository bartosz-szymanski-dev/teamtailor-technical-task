import { IsDefined, IsNotEmpty, IsNumberString } from 'class-validator';

export class CandidateJobApplicationsDataModel {
  @IsNumberString()
  @IsNotEmpty()
  id: string;

  @IsDefined()
  type: string;
}
