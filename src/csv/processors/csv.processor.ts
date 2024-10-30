import { Injectable } from '@nestjs/common';
import { CandidateResponseModel } from '../../candidate/models/candidate.response.model';
import { CandidateModel } from '../../candidate/models/candidate.model';
import { ProcessorOutputInterface } from '../interfaces/processor.output.interface';

@Injectable()
export default class CsvProcessor {
  public process(
    candidateResponse: CandidateResponseModel,
  ): ProcessorOutputInterface[] {
    return candidateResponse.data.map(
      (candidate: CandidateModel): ProcessorOutputInterface => {
        const {
          email,
          'first-name': firstName,
          'last-name': lastName,
        } = candidate.attributes;
        const jobApplication =
          candidate.relationships['job-applications']?.data[0];
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
      },
    );
  }
}
