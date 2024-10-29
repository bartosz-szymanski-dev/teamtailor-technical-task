import { Module } from '@nestjs/common';
import { CandidateService } from './services/candidate.service';
import { ConfigModule } from '@nestjs/config';
import { HttpModule } from '@nestjs/axios';
import ListRequestConfigFactory from './factories/list-request-config.factory';
import ListRequestUrlBuilder from './builders/list-request-url.builder';
import { CandidateController } from './controllers/candidate.controller';
import ResponseErrorMessageResolver from './resolvers/response-error-message.resolver';
import ResponseErrorStatusResolver from './resolvers/response-error-status.resolver';

@Module({
  imports: [HttpModule, ConfigModule],
  providers: [
    CandidateService,
    ListRequestConfigFactory,
    ListRequestUrlBuilder,
    ResponseErrorMessageResolver,
    ResponseErrorStatusResolver,
  ],
  controllers: [CandidateController],
})
export class CandidateModule {}
