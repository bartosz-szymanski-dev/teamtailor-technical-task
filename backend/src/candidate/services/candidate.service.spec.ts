import { Test, TestingModule } from '@nestjs/testing';
import { CandidateService } from './candidate.service';
import { HttpService } from '@nestjs/axios';
import { Logger } from '@nestjs/common';
import { of, throwError } from 'rxjs';
import { AxiosError, AxiosResponse } from 'axios';
import { ListRequestConfigFactory } from '../factories/list-request-config.factory';
import { ListRequestUrlBuilder } from '../builders/list-request-url.builder';
import { CsvProcessor } from '../../csv/processors/csv.processor';
import { ThrottlingService } from '../../services/throttling.service';
import { CandidateResponseModel } from '../models/candidate.response.model';
import { ProcessorOutputInterface } from '../../csv/interfaces/processor.output.interface';

describe('CandidateService', () => {
  let service: CandidateService;
  let httpService: HttpService;
  let csvProcessor: CsvProcessor;
  let throttlingService: ThrottlingService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CandidateService,
        {
          provide: HttpService,
          useValue: { get: jest.fn() },
        },
        {
          provide: ListRequestConfigFactory,
          useValue: { create: jest.fn().mockReturnValue({}) },
        },
        {
          provide: ListRequestUrlBuilder,
          useValue: {
            setPath: jest.fn().mockReturnThis(),
            addInclude: jest.fn().mockReturnThis(),
            build: jest.fn().mockReturnValue('http://test-url.com'),
          },
        },
        {
          provide: CsvProcessor,
          useValue: { process: jest.fn() },
        },
        {
          provide: ThrottlingService,
          useValue: { throttle: jest.fn() },
        },
        Logger,
      ],
    }).compile();

    service = module.get<CandidateService>(CandidateService);
    httpService = module.get<HttpService>(HttpService);
    csvProcessor = module.get<CsvProcessor>(CsvProcessor);
    throttlingService = module.get<ThrottlingService>(ThrottlingService);
  });

  it('should fetch, process all pages, and apply throttling between requests', async () => {
    const mockResponsePage1: CandidateResponseModel = {
      data: [
        {
          id: '1',
          attributes: {
            'first-name': 'John',
            'last-name': 'Doe',
            email: 'john@doe.com',
          },
          relationships: {
            'job-applications': {
              data: [{ id: '1', type: 'job-applications' }],
            },
          },
        },
      ],
      links: { next: 'http://test-url.com/next' },
    };
    const mockResponsePage2: CandidateResponseModel = {
      data: [
        {
          id: '2',
          attributes: {
            'first-name': 'Anny',
            'last-name': 'January',
            email: 'anny@january.com',
          },
          relationships: {
            'job-applications': {
              data: [{ id: '2', type: 'job-applications' }],
            },
          },
        },
      ],
      links: { next: null },
    };
    const mockProcessorOutput: ProcessorOutputInterface[] = [
      {
        candidate_id: '1',
        first_name: 'John',
        last_name: 'Doe',
        email: 'john@doe.com',
        job_application_created_at: '',
        job_application_id: '',
      },
      {
        candidate_id: '2',
        first_name: 'Anny',
        last_name: 'January',
        email: 'anny@january.com',
        job_application_created_at: '',
        job_application_id: '2',
      },
    ];

    jest
      .spyOn(httpService, 'get')
      .mockReturnValueOnce(
        of({
          data: mockResponsePage1,
          headers: {},
          status: 200,
          statusText: 'OK',
        } as AxiosResponse),
      )
      .mockReturnValueOnce(
        of({
          data: mockResponsePage2,
          headers: {},
          status: 200,
          statusText: 'OK',
        } as AxiosResponse),
      );
    jest
      .spyOn(csvProcessor, 'process')
      .mockReturnValueOnce([mockProcessorOutput[0]])
      .mockReturnValueOnce([mockProcessorOutput[1]]);
    jest.spyOn(throttlingService, 'throttle').mockResolvedValueOnce(undefined);

    const result = await service.findAll();

    expect(httpService.get).toHaveBeenCalledTimes(2);
    expect(httpService.get).toHaveBeenCalledWith('http://test-url.com', {});
    expect(httpService.get).toHaveBeenCalledWith(
      'http://test-url.com/next',
      {},
    );
    expect(csvProcessor.process).toHaveBeenCalledTimes(2);
    expect(csvProcessor.process).toHaveBeenCalledWith(mockResponsePage1);
    expect(csvProcessor.process).toHaveBeenCalledWith(mockResponsePage2);
    expect(throttlingService.throttle).toHaveBeenCalledTimes(1);
    expect(result).toEqual(mockProcessorOutput);
  });

  it('should log and throw error if fetching a page fails', async () => {
    const mockError = new AxiosError('Request failed', 'ERR_BAD_REQUEST');
    jest
      .spyOn(httpService, 'get')
      .mockReturnValueOnce(throwError(() => mockError));
    jest.spyOn(service['logger'], 'error').mockImplementation();

    await expect(service.findAll()).rejects.toThrow('Request failed');

    expect(httpService.get).toHaveBeenCalledTimes(1);
    expect(service['logger'].error).toHaveBeenCalledWith(mockError);
  });
});
