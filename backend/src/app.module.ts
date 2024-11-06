import { Module } from '@nestjs/common';
import { CandidateModule } from './candidate/candidate.module';
import { ConfigModule } from '@nestjs/config';
import { HttpModule } from '@nestjs/axios';
import { CsvModule } from './csv/csv.module';

@Module({
  imports: [HttpModule, CandidateModule, ConfigModule.forRoot(), CsvModule],
})
export class AppModule {}
