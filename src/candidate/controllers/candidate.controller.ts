import { Controller, Get, HttpStatus, Res } from '@nestjs/common';
import { CandidateService } from '../services/candidate.service';
import { Response } from 'express';
import { AxiosError } from 'axios';
import ResponseErrorMessageResolver from '../resolvers/response-error-message.resolver';

@Controller('/candidate')
export class CandidateController {
  constructor(
    private readonly candidateService: CandidateService,
    private readonly responseErrorMessageResolver: ResponseErrorMessageResolver,
  ) {}

  @Get('/list')
  async list(@Res() response: Response): Promise<void> {
    try {
      const candidates = await this.candidateService.findAll();

      response.status(HttpStatus.OK).json(candidates);
    } catch (error) {
      response.status(this.getErrorStatus(error)).json({
        message: this.responseErrorMessageResolver.resolve(error),
      });
    }
  }

  private getErrorStatus(error: AxiosError | any): number {
    if (error.response) {
      return error.response.status;
    }

    return HttpStatus.INTERNAL_SERVER_ERROR;
  }
}
