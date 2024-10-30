import { IsDefined, IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class DownloadDto {
  @IsString()
  @IsNotEmpty()
  @IsDefined()
  @IsUUID('4')
  csvFileNameUuid: string;
}
