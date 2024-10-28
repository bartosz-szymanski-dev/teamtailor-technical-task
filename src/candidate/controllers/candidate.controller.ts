import { Controller, Get } from '@nestjs/common';
import { CandidateService } from '../services/candidate.service';

@Controller('/candidate')
export class CandidateController {
  constructor(private readonly candidateService: CandidateService) {}

  @Get('/list')
  async list(): Promise<Array<object>> {
    return await this.candidateService.findAll();
  }
}
