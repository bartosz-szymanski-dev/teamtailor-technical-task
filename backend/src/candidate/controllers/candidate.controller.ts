import { Controller, Get, HttpStatus, Logger, Res } from '@nestjs/common';
import { CandidateService } from '../services/candidate.service';
import { Response } from 'express';
import { ResponseErrorMessageResolver } from '../resolvers/response-error-message.resolver';
import { ResponseErrorStatusResolver } from '../resolvers/response-error-status.resolver';
import { CsvService } from '../../csv/services/csv.service';
import * as fs from 'node:fs/promises';

@Controller('/candidate')
export class CandidateController {
  private readonly logger = new Logger(CandidateController.name);

  constructor(
    private readonly candidateService: CandidateService,
    private readonly responseErrorMessageResolver: ResponseErrorMessageResolver,
    private readonly responseErrorStatusResolver: ResponseErrorStatusResolver,
    private readonly csvService: CsvService,
  ) {}

  @Get('/list/download')
  async list(@Res() response: Response): Promise<void> {
    try {
      const candidateResponse = await this.candidateService.findAll();
      const filepath = await this.csvService.convertToCsv(candidateResponse);
      await fs.access(filepath);
      response.status(HttpStatus.OK).download(filepath);
    } catch (error) {
      this.logger.error(error, error.stack);
      response.status(this.responseErrorStatusResolver.resolve(error)).json({
        message: this.responseErrorMessageResolver.resolve(error),
      });
    }
  }
}
