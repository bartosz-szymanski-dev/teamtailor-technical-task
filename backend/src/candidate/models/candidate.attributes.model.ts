import { IsEmail, IsString } from 'class-validator';

export class CandidateAttributesModel {
  @IsString()
  'first-name': string;

  @IsString()
  'last-name': string;

  @IsEmail()
  email: string;
}
