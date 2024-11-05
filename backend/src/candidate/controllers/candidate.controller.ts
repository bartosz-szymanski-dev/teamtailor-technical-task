import { Controller, Get, HttpStatus, Res } from '@nestjs/common';
import { CandidateService } from '../services/candidate.service';
import { Response } from 'express';
import ResponseErrorMessageResolver from '../resolvers/response-error-message.resolver';
import ResponseErrorStatusResolver from '../resolvers/response-error-status.resolver';

@Controller('/candidate')
export class CandidateController {
  constructor(
    private readonly candidateService: CandidateService,
    private readonly responseErrorMessageResolver: ResponseErrorMessageResolver,
    private readonly responseErrorStatusResolver: ResponseErrorStatusResolver,
  ) {}

  @Get('/list')
  async list(@Res() response: Response): Promise<void> {
    try {
      const candidateResponse = await this.candidateService.findAll();

      response.status(HttpStatus.OK).json(candidateResponse);
    } catch (error) {
      response.status(this.responseErrorStatusResolver.resolve(error)).json({
        message: this.responseErrorMessageResolver.resolve(error),
      });
    }
  }
}
