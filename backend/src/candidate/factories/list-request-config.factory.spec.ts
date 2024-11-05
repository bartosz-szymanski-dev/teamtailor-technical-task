import { ListRequestConfigFactory } from './list-request-config.factory';
import { ConfigService } from '@nestjs/config';
import { Test, TestingModule } from '@nestjs/testing';

describe('ListRequestConfigFactory', () => {
  let configService: ConfigService;
  let factory: ListRequestConfigFactory;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ListRequestConfigFactory,
        { provide: ConfigService, useValue: { get: jest.fn() } },
      ],
    }).compile();

    configService = module.get<ConfigService>(ConfigService);
    factory = module.get<ListRequestConfigFactory>(ListRequestConfigFactory);
  });

  it('should create an instance of config', () => {
    jest.spyOn(configService, 'get').mockImplementation((key: string) => {
      switch (key) {
        case 'TEAMTAILOR_API_VERSION':
          return '1';
        case 'TEAMTAILOR_API_KEY':
          return 'token';
        default:
          return null;
      }
    });

    const result = factory.create();
    expect(result).toEqual({
      headers: {
        Authorization: 'Token token=token',
        'X-Api-Version': '1',
      },
    });
  });
});
