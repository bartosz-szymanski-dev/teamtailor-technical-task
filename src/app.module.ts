import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CandidateModule } from './candidate/candidate.module';
import { ConfigModule } from '@nestjs/config';
import { HttpModule } from '@nestjs/axios';
import { CsvModule } from './csv/csv.module';

@Module({
  imports: [HttpModule, CandidateModule, ConfigModule.forRoot(), CsvModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
