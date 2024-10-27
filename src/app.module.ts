import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CandidateModule } from './candidate/candidate.module';
import { CandidateService } from './candidate/services/candidate.service';
import { ConfigModule } from '@nestjs/config';
import { CandidateController } from './candidate/controllers/candidate.controller';

@Module({
  imports: [CandidateModule, ConfigModule.forRoot()],
  controllers: [AppController, CandidateController],
  providers: [AppService, CandidateService],
})
export class AppModule {}
