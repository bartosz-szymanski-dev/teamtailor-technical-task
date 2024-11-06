import { CandidateController } from './candidate.controller';
import { CandidateService } from '../services/candidate.service';
import { CsvService } from '../../csv/services/csv.service';
import { ResponseErrorStatusResolver } from '../resolvers/response-error-status.resolver';
import { ResponseErrorMessageResolver } from '../resolvers/response-error-message.resolver';
import { Test, TestingModule } from '@nestjs/testing';
import * as fs from 'node:fs/promises';
import { HttpStatus } from '@nestjs/common';
import { Response } from 'express';

jest.mock('node:fs/promises');

describe('CandidateController', () => {
  let controller: CandidateController;
  let candidateService: CandidateService;
  let csvService: CsvService;
  let errorStatusResolver: ResponseErrorStatusResolver;
  let errorMessageResolver: ResponseErrorMessageResolver;
  let mockResponse: Partial<Response>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CandidateController],
      providers: [
        {
          provide: CandidateService,
          useValue: { findAll: jest.fn() },
        },
        {
          provide: CsvService,
          useValue: { convertToCsv: jest.fn() },
        },
        {
          provide: ResponseErrorStatusResolver,
          useValue: { resolve: jest.fn() },
        },
        {
          provide: ResponseErrorMessageResolver,
          useValue: { resolve: jest.fn() },
        },
      ],
    }).compile();

    controller = module.get<CandidateController>(CandidateController);
    candidateService = module.get<CandidateService>(CandidateService);
    csvService = module.get<CsvService>(CsvService);
    errorStatusResolver = module.get<ResponseErrorStatusResolver>(
      ResponseErrorStatusResolver,
    );
    errorMessageResolver = module.get<ResponseErrorMessageResolver>(
      ResponseErrorMessageResolver,
    );

    mockResponse = {
      status: jest.fn().mockReturnThis(),
      download: jest.fn(),
      json: jest.fn(),
    };
  });

  it('should download the CSV file if candidate data is fetched successfully', async () => {
    const mockCandidateResponse = [
      {
        candidate_id: '1',
        first_name: 'John',
        last_name: 'Doe',
        email: 'john@doe.com',
        job_application_id: '1',
        job_application_created_at: '2022-03-22T15:59:13.038+01:00',
      },
    ];
    const mockFilepath = '/tmp/test-file.csv';

    jest
      .spyOn(candidateService, 'findAll')
      .mockResolvedValueOnce(mockCandidateResponse);
    jest.spyOn(csvService, 'convertToCsv').mockResolvedValueOnce(mockFilepath);
    jest.spyOn(fs, 'access').mockResolvedValueOnce();

    await controller.list(mockResponse as Response);

    expect(candidateService.findAll).toHaveBeenCalled();
    expect(csvService.convertToCsv).toHaveBeenCalledWith(mockCandidateResponse);
    expect(fs.access).toHaveBeenCalledWith(mockFilepath);
    expect(mockResponse.status).toHaveBeenCalledWith(HttpStatus.OK);
    expect(mockResponse.download).toHaveBeenCalledWith(mockFilepath);
  });

  it('should return error response if any error occurs', async () => {
    const mockError = new Error('Test error');
    const mockStatusCode = HttpStatus.INTERNAL_SERVER_ERROR;
    const mockErrorMessage = 'An error occurred';

    jest.spyOn(candidateService, 'findAll').mockRejectedValueOnce(mockError);
    jest.spyOn(errorStatusResolver, 'resolve').mockReturnValue(mockStatusCode);
    jest
      .spyOn(errorMessageResolver, 'resolve')
      .mockReturnValue(mockErrorMessage);

    await controller.list(mockResponse as Response);

    expect(candidateService.findAll).toHaveBeenCalled();
    expect(errorStatusResolver.resolve).toHaveBeenCalledWith(mockError);
    expect(errorMessageResolver.resolve).toHaveBeenCalledWith(mockError);
    expect(mockResponse.status).toHaveBeenCalledWith(mockStatusCode);
    expect(mockResponse.json).toHaveBeenCalledWith({
      message: mockErrorMessage,
    });
  });
});
