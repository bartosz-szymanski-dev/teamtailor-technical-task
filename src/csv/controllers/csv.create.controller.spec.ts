import { Test, TestingModule } from '@nestjs/testing';
import { CsvService } from '../services/csv.service';
import { Response } from 'express';
import { HttpStatus } from '@nestjs/common';
import { CandidateResponseModel } from '../../candidate/models/candidate.response.model';
import CsvCreateController from './csv.create.controller';

describe('CsvController', () => {
  let controller: CsvCreateController;
  let csvService: CsvService;
  let mockResponse: Partial<Response>;

  beforeEach(async () => {
    mockResponse = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    const module: TestingModule = await Test.createTestingModule({
      controllers: [CsvCreateController],
      providers: [
        {
          provide: CsvService,
          useValue: { convertToCsv: jest.fn() },
        },
      ],
    }).compile();

    controller = module.get<CsvCreateController>(CsvCreateController);
    csvService = module.get<CsvService>(CsvService);
  });

  it('should return CREATED status and filename on successful CSV creation', async () => {
    const csvDto = new CandidateResponseModel();
    const mockCsvFileName = 'mockFile.csv';

    jest.spyOn(csvService, 'convertToCsv').mockResolvedValue(mockCsvFileName);

    await controller.create(mockResponse as Response, csvDto);

    expect(csvService.convertToCsv).toHaveBeenCalledWith(csvDto);
    expect(mockResponse.status).toHaveBeenCalledWith(HttpStatus.CREATED);
    expect(mockResponse.json).toHaveBeenCalledWith({
      csvFileName: mockCsvFileName,
    });
  });

  it('should return INTERNAL_SERVER_ERROR on CSV creation failure', async () => {
    const csvDto = new CandidateResponseModel();
    const mockError = new Error('CSV conversion error');

    jest.spyOn(csvService, 'convertToCsv').mockRejectedValue(mockError);

    await controller.create(mockResponse as Response, csvDto);

    expect(csvService.convertToCsv).toHaveBeenCalledWith(csvDto);
    expect(mockResponse.status).toHaveBeenCalledWith(
      HttpStatus.INTERNAL_SERVER_ERROR,
    );
    expect(mockResponse.json).toHaveBeenCalledWith({
      message: 'Internal server error',
    });
  });
});
