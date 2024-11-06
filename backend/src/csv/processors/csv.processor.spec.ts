import { CsvProcessor } from './csv.processor';
import { CandidateResponseModel } from '../../candidate/models/candidate.response.model';
import { ProcessorOutputInterface } from '../interfaces/processor.output.interface';

describe('CsvProcessor', () => {
  const csvProcessor = new CsvProcessor();

  it('should process a candidate with a single job application', () => {
    const candidateResponse: CandidateResponseModel = {
      data: [
        {
          id: '1',
          attributes: {
            email: 'test@example.com',
            'first-name': 'John',
            'last-name': 'Doe',
          },
          relationships: {
            'job-applications': {
              data: [{ id: '101', type: 'job-application' }],
            },
          },
        },
      ],
      included: [
        {
          id: '101',
          type: 'job-application',
          attributes: { 'created-at': '2023-01-01T12:00:00Z' },
        },
      ],
      links: { next: null },
    };

    const result = csvProcessor.process(candidateResponse);

    const expectedOutput: ProcessorOutputInterface[] = [
      {
        candidate_id: '1',
        first_name: 'John',
        last_name: 'Doe',
        email: 'test@example.com',
        job_application_id: '101',
        job_application_created_at: '2023-01-01T12:00:00Z',
      },
    ];

    expect(result).toEqual(expectedOutput);
  });

  it('should process a candidate with multiple job applications', () => {
    const candidateResponse: CandidateResponseModel = {
      data: [
        {
          id: '2',
          attributes: {
            email: 'jane@example.com',
            'first-name': 'Jane',
            'last-name': 'Smith',
          },
          relationships: {
            'job-applications': {
              data: [
                { id: '201', type: 'job-application' },
                { id: '202', type: 'job-application' },
              ],
            },
          },
        },
      ],
      included: [
        {
          id: '201',
          type: 'job-application',
          attributes: { 'created-at': '2023-02-01T08:30:00Z' },
        },
        {
          id: '202',
          type: 'job-application',
          attributes: { 'created-at': '2023-03-01T09:15:00Z' },
        },
      ],
      links: { next: null },
    };

    const result = csvProcessor.process(candidateResponse);

    const expectedOutput: ProcessorOutputInterface[] = [
      {
        candidate_id: '2',
        first_name: 'Jane',
        last_name: 'Smith',
        email: 'jane@example.com',
        job_application_id: '201',
        job_application_created_at: '2023-02-01T08:30:00Z',
      },
      {
        candidate_id: '2',
        first_name: 'Jane',
        last_name: 'Smith',
        email: 'jane@example.com',
        job_application_id: '202',
        job_application_created_at: '2023-03-01T09:15:00Z',
      },
    ];

    expect(result).toEqual(expectedOutput);
  });

  it('should handle a candidate with no job applications', () => {
    const candidateResponse: CandidateResponseModel = {
      data: [
        {
          id: '3',
          attributes: {
            email: 'noapp@example.com',
            'first-name': 'Noapp',
            'last-name': 'User',
          },
          relationships: {
            'job-applications': {
              data: [],
            },
          },
        },
      ],
      included: [],
      links: { next: null },
    };

    const result = csvProcessor.process(candidateResponse);

    expect(result).toEqual([]);
  });
});
