import { Injectable, Logger } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { catchError, firstValueFrom } from 'rxjs';
import { AxiosError } from 'axios';
import { ListRequestConfigFactory } from '../factories/list-request-config.factory';
import { ListRequestUrlBuilder } from '../builders/list-request-url.builder';
import { CandidateResponseModel } from '../models/candidate.response.model';
import { ProcessorOutputInterface } from '../../csv/interfaces/processor.output.interface';
import { CsvProcessor } from '../../csv/processors/csv.processor';

@Injectable()
export class CandidateService {
  private readonly logger = new Logger(CandidateService.name);

  constructor(
    private readonly httpService: HttpService,
    private readonly listRequestConfigFactory: ListRequestConfigFactory,
    private readonly listRequestUrlBuilder: ListRequestUrlBuilder,
    private readonly csvProcessor: CsvProcessor,
  ) {}

  async findAll(): Promise<ProcessorOutputInterface[]> {
    let processorOutputs: ProcessorOutputInterface[] = [];
    let nextUrl = this.getUrl();
    while (nextUrl) {
      try {
        const responseModel = await this.fetchPage(nextUrl);
        processorOutputs = processorOutputs.concat(
          this.csvProcessor.process(responseModel),
        );
        nextUrl = responseModel.links?.next ?? null;
      } catch (error) {
        this.logger.error(error);
        throw error;
      }
    }

    return processorOutputs;
  }

  private async fetchPage(url: string): Promise<CandidateResponseModel> {
    const { data } = await firstValueFrom(
      this.httpService.get(url, this.listRequestConfigFactory.create()).pipe(
        catchError((error: AxiosError) => {
          this.logger.error(error.response?.data || 'Unknown error');

          throw error;
        }),
      ),
    );

    return data;
  }

  private getUrl(): string {
    return this.listRequestUrlBuilder
      .setPath('/v1/candidates')
      .addInclude('job-applications')
      .build();
  }
}
