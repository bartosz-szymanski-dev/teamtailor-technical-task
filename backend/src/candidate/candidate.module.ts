import { Module } from '@nestjs/common';
import { CandidateService } from './services/candidate.service';
import { ConfigModule } from '@nestjs/config';
import { HttpModule } from '@nestjs/axios';
import { ListRequestConfigFactory } from './factories/list-request-config.factory';
import { ListRequestUrlBuilder } from './builders/list-request-url.builder';
import { CandidateController } from './controllers/candidate.controller';
import { ResponseErrorMessageResolver } from './resolvers/response-error-message.resolver';
import { ResponseErrorStatusResolver } from './resolvers/response-error-status.resolver';
import { CsvModule } from '../csv/csv.module';
import { CsvProcessor } from '../csv/processors/csv.processor';
import { CsvService } from '../csv/services/csv.service';
import { ThrottlingService } from '../services/throttling.service';

@Module({
  imports: [HttpModule, ConfigModule, CsvModule],
  providers: [
    CandidateService,
    ListRequestConfigFactory,
    ListRequestUrlBuilder,
    ResponseErrorMessageResolver,
    ResponseErrorStatusResolver,
    CsvProcessor,
    CsvService,
    ThrottlingService,
  ],
  controllers: [CandidateController],
})
export class CandidateModule {}
