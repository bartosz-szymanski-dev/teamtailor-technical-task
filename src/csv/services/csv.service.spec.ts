import { Test, TestingModule } from '@nestjs/testing';
import { CsvService } from './csv.service';

describe('CsvServiceService', () => {
  let service: CsvService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CsvService],
    }).compile();

    service = module.get<CsvService>(CsvService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
