import { Injectable } from '@nestjs/common';
import { CandidateResponseInterface } from '../../candidate/interfaces/candidate.response.interface';
import CsvProcessor from '../processors/csv.processor';

@Injectable()
export class CsvService {
  constructor(private readonly csvProcessor: CsvProcessor) {}

  public convertToCsv(candidateResponse: CandidateResponseInterface): string {
    const processorOutput = this.csvProcessor.process(candidateResponse);

    return '';
  }
}
