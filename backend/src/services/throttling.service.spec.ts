import { ConfigService } from '@nestjs/config';
import { ThrottlingService } from './throttling.service';
import { Test, TestingModule } from '@nestjs/testing';

describe('ThrottlingService', () => {
  let throttlingService: ThrottlingService;
  let configService: ConfigService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ThrottlingService,
        {
          provide: ConfigService,
          useValue: {
            get: jest.fn(),
          },
        },
      ],
    }).compile();

    throttlingService = module.get<ThrottlingService>(ThrottlingService);
    configService = module.get<ConfigService>(ConfigService);
  });

  it('should resolve immediately if configuration is missing', async () => {
    jest.spyOn(configService, 'get').mockReturnValue(undefined);

    const start = Date.now();
    await throttlingService.throttle();
    const end = Date.now();

    expect(end - start).toBeLessThan(50);
  });

  it('should apply correct delay based on config values', async () => {
    jest.spyOn(configService, 'get').mockImplementation((key: string) => {
      if (key === 'THROTTLING_MAX_REQUESTS') {
        return 50;
      }

      if (key === 'THROTTLING_SECONDS') {
        return 10;
      }

      return undefined;
    });

    const start = Date.now();
    await throttlingService.throttle();
    const end = Date.now();

    const delay = end - start;
    expect(delay).toBeGreaterThanOrEqual(200);
    expect(delay).toBeLessThan(300);
  });
});
