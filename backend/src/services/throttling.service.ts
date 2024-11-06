import { ConfigService } from '@nestjs/config';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ThrottlingService {
  constructor(private readonly configService: ConfigService) {}

  public async throttle(): Promise<void> {
    const maxRequests = this.configService.get<number>(
      'THROTTLING_MAX_REQUESTS',
    );
    const throttlingSeconds =
      this.configService.get<number>('THROTTLING_SECONDS');

    if (!maxRequests || !throttlingSeconds) {
      return;
    }

    return new Promise((resolve) => {
      setTimeout(
        () => {
          resolve();
        },
        this.getThrottlingTimeout(throttlingSeconds, maxRequests),
      );
    });
  }

  private getThrottlingTimeout(
    throttlingSeconds: number,
    maxRequests: number,
  ): number {
    return (throttlingSeconds / maxRequests) * 1000;
  }
}
