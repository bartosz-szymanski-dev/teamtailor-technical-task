import { Injectable } from '@nestjs/common';
import { CandidateResponseModel } from '../../candidate/models/candidate.response.model';
import { CandidateModel } from '../../candidate/models/candidate.model';
import { ProcessorOutputInterface } from '../interfaces/processor.output.interface';

@Injectable()
export class CsvProcessor {
  public process(
    candidateResponse: CandidateResponseModel,
  ): ProcessorOutputInterface[] {
    return candidateResponse.data.flatMap((candidate) =>
      this.processCandidate(candidate, candidateResponse),
    );
  }

  private processCandidate(
    candidate: CandidateModel,
    candidateResponse: CandidateResponseModel,
  ): ProcessorOutputInterface[] {
    const {
      email,
      'first-name': firstName,
      'last-name': lastName,
    } = candidate.attributes;
    const jobApplications =
      candidate.relationships['job-applications']?.data || [];

    return jobApplications.map((jobApplication) =>
      this.createProcessorOutput(
        candidate,
        jobApplication.id,
        firstName,
        lastName,
        email,
        candidateResponse,
      ),
    );
  }

  private createProcessorOutput(
    candidate: CandidateModel,
    jobApplicationId: string,
    firstName: string,
    lastName: string,
    email: string,
    candidateResponse: CandidateResponseModel,
  ): ProcessorOutputInterface {
    const jobAppData = candidateResponse.included.find(
      (app) => app.id === jobApplicationId,
    );
    const jobApplicationCreatedAt = jobAppData?.attributes['created-at'];

    return {
      candidate_id: candidate.id,
      first_name: firstName,
      last_name: lastName,
      email: email,
      job_application_id: jobApplicationId,
      job_application_created_at: jobApplicationCreatedAt,
    };
  }
}
