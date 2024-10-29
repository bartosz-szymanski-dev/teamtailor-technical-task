import {
  Body,
  Controller,
  HttpStatus,
  Logger,
  Post,
  Res,
} from '@nestjs/common';
import { Response } from 'express';
import { CandidateResponseInterface } from '../../candidate/interfaces/candidate.response.interface';
import { CsvService } from '../services/csv.service';

@Controller('/csv')
export default class CsvController {
  private logger: Logger = new Logger(CsvController.name);
  constructor(private readonly csvService: CsvService) {}

  @Post('/create')
  async create(
    @Res() response: Response,
    @Body() csvDto: CandidateResponseInterface,
  ): Promise<void> {
    try {
      const csvFileName = await this.csvService.convertToCsv(csvDto);
      response.status(HttpStatus.CREATED).json({ csvFileName });
    } catch (e) {
      const message = 'Internal server error';
      response.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ message });
      this.logger.error(message, e.stack);
    }
  }
}
