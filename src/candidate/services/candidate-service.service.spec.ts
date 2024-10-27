import { Test, TestingModule } from '@nestjs/testing';
import { CandidateService } from './candidate.service';
import { HttpService } from '@nestjs/axios';
import { of, throwError } from 'rxjs';
import { AxiosError, AxiosResponse } from 'axios';
import { Logger } from '@nestjs/common';
import { ListRequestConfigFactory } from '../factories/list-request-config.factory';
import ListRequestUrlBuilder from '../builders/list-request-url.builder';

describe('CandidateService', () => {
  let service: CandidateService;
  let httpService: HttpService;
  let listRequestConfigFactory: ListRequestConfigFactory;
  let listRequestUrlBuilder: ListRequestUrlBuilder;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CandidateService,
        { provide: HttpService, useValue: { get: jest.fn() } },
        { provide: ListRequestConfigFactory, useValue: { create: jest.fn() } },
        {
          provide: ListRequestUrlBuilder,
          useValue: {
            setPath: jest.fn(),
            addInclude: jest.fn(),
            build: jest.fn(),
          },
        },
      ],
    }).compile();

    service = module.get<CandidateService>(CandidateService);
    httpService = module.get<HttpService>(HttpService);
    listRequestConfigFactory = module.get<ListRequestConfigFactory>(
      ListRequestConfigFactory,
    );
    listRequestUrlBuilder = module.get<ListRequestUrlBuilder>(
      ListRequestUrlBuilder,
    );
  });

  it('should fetch all candidates successfully', async () => {
    const mockData = [{ id: 1, name: 'John Doe' }];
    const response: AxiosResponse = {
      data: mockData,
      status: 200,
      statusText: 'OK',
      headers: {},
      config: {
        headers: undefined,
      },
    };
    const listRequestConfig = {
      headers: {
        Authorization: 'Token token=mockApiKey',
        'X-Api-Version': '1',
      },
    };
    const url = 'http://api.example.com/candidates';

    jest.spyOn(httpService, 'get').mockReturnValue(of(response));
    jest
      .spyOn(listRequestConfigFactory, 'create')
      .mockReturnValue(listRequestConfig);
    jest.spyOn(listRequestUrlBuilder, 'setPath').mockReturnThis();
    jest.spyOn(listRequestUrlBuilder, 'addInclude').mockReturnThis();
    jest.spyOn(listRequestUrlBuilder, 'build').mockReturnValue(url);

    const result = await service.findAll();
    expect(result).toEqual(mockData);
    expect(httpService.get).toHaveBeenCalledWith(url, listRequestConfig);
  });

  it('should log and rethrow an error if the API request fails', async () => {
    const loggerSpy = jest
      .spyOn(Logger.prototype, 'error')
      .mockImplementation();
    const mockError = new AxiosError(
      'Request failed',
      '400',
      undefined,
      undefined,
      {
        config: undefined,
        headers: undefined,
        status: 0,
        statusText: '',
        data: null,
      },
    );

    jest.spyOn(httpService, 'get').mockReturnValue(throwError(() => mockError));
    jest.spyOn(listRequestUrlBuilder, 'setPath').mockReturnThis();
    jest.spyOn(listRequestUrlBuilder, 'addInclude').mockReturnThis();
    jest
      .spyOn(listRequestUrlBuilder, 'build')
      .mockReturnValue('http://api.example.com/candidates');

    await expect(service.findAll()).rejects.toThrowError('Request failed');
    expect(loggerSpy).toHaveBeenCalledWith(mockError.response?.data);
  });
});
