import { Injectable, Logger } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { catchError, firstValueFrom } from 'rxjs';
import { AxiosError } from 'axios';
import ListRequestConfigFactory from '../factories/list-request-config.factory';
import ListRequestUrlBuilder from '../builders/list-request-url.builder';
import { CandidateInterface } from '../interfaces/candidate.interface';

@Injectable()
export class CandidateService {
  private readonly logger = new Logger(CandidateService.name);

  constructor(
    private readonly httpService: HttpService,
    private readonly listRequestConfigFactory: ListRequestConfigFactory,
    private readonly listRequestUrlBuilder: ListRequestUrlBuilder,
  ) {}

  async findAll(): Promise<Array<CandidateInterface>> {
    const { data } = await firstValueFrom(
      this.httpService
        .get(this.getUrl(), this.listRequestConfigFactory.create())
        .pipe(
          catchError((error: AxiosError) => {
            this.logger.error(error.response.data);

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
