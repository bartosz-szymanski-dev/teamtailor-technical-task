import { Injectable } from '@nestjs/common';
import { CandidateResponseInterface } from '../../candidate/interfaces/candidate.response.interface';
import { CandidateInterface } from '../../candidate/interfaces/candidate.interface';
import { ProcessorOutputInterface } from '../interfaces/processor.output.interface';

@Injectable()
export default class CsvProcessor {
  public process(
    candidateResponse: CandidateResponseInterface,
  ): ProcessorOutputInterface[] {
    return candidateResponse.data.map((candidate: CandidateInterface) => {
      const {
        email,
        'first-name': firstName,
        'last-name': lastName,
      } = candidate.attributes;
      const jobApplication =
        candidate.relationships['job-applications'].data[0];
      const jobAppData = candidateResponse?.included.find(
        (app) => app.id === jobApplication.id,
      );
      const jobApplicationCreatedAt = jobAppData?.attributes['created-at'];

      return {
        candidate_id: candidate.id,
        first_name: firstName,
        last_name: lastName,
        email: email,
        job_application_id: jobApplication?.id,
        job_application_created_at: jobApplicationCreatedAt,
      };
    });
  }
}
