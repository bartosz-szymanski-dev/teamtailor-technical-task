import { ConfigService } from '@nestjs/config';
import { Injectable } from '@nestjs/common';
import { AxiosRequestConfig } from 'axios';

@Injectable()
export class ListRequestConfigFactory {
  constructor(private readonly configService: ConfigService) {}

  create(): AxiosRequestConfig {
    return {
      headers: {
        Authorization: `Token token=${this.configService.get<string>('TEAMTAILOR_API_KEY')}`,
        'X-Api-Version': this.configService.get<string>(
          'TEAMTAILOR_API_VERSION',
        ),
      },
    };
  }
}
