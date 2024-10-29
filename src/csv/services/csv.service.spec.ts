import { Test, TestingModule } from '@nestjs/testing';
import { CsvService } from './csv.service';
import CsvProcessor from '../processors/csv.processor';
import { CandidateResponseInterface } from '../../candidate/interfaces/candidate.response.interface';
import * as fs from 'node:fs/promises';
import * as path from 'node:path';
import * as os from 'node:os';

describe('CsvServiceService', () => {
  let service: CsvService;
  let csvProcessor: CsvProcessor;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CsvService,
        {
          provide: CsvProcessor,
          useValue: { process: jest.fn() },
        },
      ],
    }).compile();

    service = module.get<CsvService>(CsvService);
    csvProcessor = module.get<CsvProcessor>(CsvProcessor);
  });

  it('should return uuid from generated filename', async () => {
    const processorOutput = [
      {
        candidate_id: '25235329',
        first_name: 'Lill',
        last_name: 'Friman',
        email: 'lill_friman_12_sandbox_teamtailor_developer@example.com',
        job_application_id: '29305118',
        job_application_created_at: '2022-03-22T15:59:12.658+01:00',
      },
    ];
    jest.spyOn(csvProcessor, 'process').mockReturnValue(processorOutput);

    const result = await service.convertToCsv({} as CandidateResponseInterface);
    expect(result).toBeTruthy();
    await fs.rm(path.join(os.tmpdir(), `${result}.csv`));
  });
});
