import { ConfigService } from '@nestjs/config';
import ListRequestUrlBuilder from './list-request-url.builder';
import { Test, TestingModule } from '@nestjs/testing';

describe('ListRequestUrlBuilder', () => {
  let configService: ConfigService;
  let listRequestUrlBuilder: ListRequestUrlBuilder;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ListRequestUrlBuilder,
        { provide: ConfigService, useValue: { get: jest.fn() } },
      ],
    }).compile();

    configService = module.get<ConfigService>(ConfigService);
    listRequestUrlBuilder = module.get<ListRequestUrlBuilder>(
      ListRequestUrlBuilder,
    );

    jest.spyOn(configService, 'get').mockImplementation((key: string) => {
      switch (key) {
        case 'TEAMTAILOR_API_URL':
          return 'http://api.example.com';
        default:
          return null;
      }
    });
  });

  it('should build base url', () => {
    const result = listRequestUrlBuilder.build();
    expect(result).toEqual('http://api.example.com/');
  });

  it('should build url with path', () => {
    const result = listRequestUrlBuilder.setPath('/candidates').build();
    expect(result).toEqual('http://api.example.com/candidates');
  });

  it('should build url with path and include', () => {
    const result = listRequestUrlBuilder
      .setPath('/candidates')
      .addInclude('job-applications')
      .build();
    expect(result).toEqual(
      'http://api.example.com/candidates?include=job-applications',
    );
  });

  it('should build url with multiple include', () => {
    const result = listRequestUrlBuilder
      .setPath('/candidates')
      .addInclude('job-applications')
      .addInclude('department')
      .build();

    expect(result).toEqual(
      'http://api.example.com/candidates?include=job-applications%2Cdepartment',
    );
  });
});
