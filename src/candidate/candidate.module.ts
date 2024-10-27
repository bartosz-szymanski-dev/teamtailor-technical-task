import { Module } from '@nestjs/common';
import { CandidateService } from './services/candidate.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  providers: [CandidateService],
})
export class CandidateModule {}
