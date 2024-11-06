import { Test, TestingModule } from '@nestjs/testing';
import { CsvService } from './csv.service';
import * as fsPromises from 'node:fs/promises';
import * as fs from 'node:fs';
import * as os from 'node:os';
import * as path from 'node:path';
import { ProcessorOutputInterface } from '../interfaces/processor.output.interface';

jest.mock('node:fs/promises');
jest.mock('node:fs');
jest.mock('@json2csv/node', () => ({
  AsyncParser: jest.fn().mockImplementation(() => ({
    parse: jest.fn().mockReturnValue({
      promise: jest
        .fn()
        .mockResolvedValue(
          'candidate_id,first_name,last_name,email,job_application_created_at,job_application_id\n1,John,Doe,john@doe.com,,',
        ),
    }),
  })),
}));

describe('CsvService', () => {
  let service: CsvService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CsvService],
    }).compile();

    service = module.get<CsvService>(CsvService);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should generate a CSV file and return its filepath', async () => {
    const mockProcessorOutput: ProcessorOutputInterface[] = [
      {
        candidate_id: '1',
        first_name: 'John',
        last_name: 'Doe',
        email: 'john@doe.com',
        job_application_created_at: '',
        job_application_id: '',
      },
    ];
    const mockTempDir = '/tmp';
    const mockFilepath = path.join(
      mockTempDir,
      `candidate-list-export-${service['getDate']()}.csv`,
    );

    jest.spyOn(os, 'tmpdir').mockReturnValue(mockTempDir);
    jest.spyOn(fsPromises, 'realpath').mockResolvedValue(mockTempDir);
    const mockWriteStream = {
      write: jest.fn(),
      end: jest.fn(),
    };
    jest.spyOn(fs, 'createWriteStream').mockReturnValue(mockWriteStream as any);

    const filepath = await service.convertToCsv(mockProcessorOutput);

    expect(fsPromises.realpath).toHaveBeenCalledWith(mockTempDir);
    expect(fs.createWriteStream).toHaveBeenCalledWith(mockFilepath);
    expect(mockWriteStream.write).toHaveBeenCalledWith(
      'candidate_id,first_name,last_name,email,job_application_created_at,job_application_id\n1,John,Doe,john@doe.com,,',
    );
    expect(filepath).toBe(mockFilepath);
  });

  it('should format date correctly in getDate method', () => {
    const date = service['getDate']();
    const datePattern = /^\d{8}\d{6}$/;

    expect(date).toMatch(datePattern);
  });
});
