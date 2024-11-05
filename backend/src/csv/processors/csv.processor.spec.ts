import { CsvProcessor } from './csv.processor';
import { Test, TestingModule } from '@nestjs/testing';

describe('CsvProcessor', () => {
  let csvProcessor: CsvProcessor;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CsvProcessor],
    }).compile();

    csvProcessor = module.get<CsvProcessor>(CsvProcessor);
  });

  it('should produce a correct structure', () => {
    const result = csvProcessor.process(testData);
    expect(result).toEqual([
      {
        candidate_id: '25235329',
        first_name: 'Lill',
        last_name: 'Friman',
        email: 'lill_friman_12_sandbox_teamtailor_developer@example.com',
        job_application_id: '29305118',
        job_application_created_at: '2022-03-22T15:59:12.658+01:00',
      },
    ]);
  });
});

const testData = {
  data: [
    {
      id: '25235329',
      attributes: {
        email: 'lill_friman_12_sandbox_teamtailor_developer@example.com',
        'first-name': 'Lill',
        'last-name': 'Friman',
      },
      relationships: {
        'job-applications': {
          data: [
            {
              type: 'job-applications',
              id: '29305118',
            },
          ],
        },
      },
    },
  ],
  included: [
    {
      id: '29305118',
      type: 'job-applications',
      attributes: {
        'created-at': '2022-03-22T15:59:12.658+01:00',
      },
    },
  ],
  links: {
    next: null,
  },
};
