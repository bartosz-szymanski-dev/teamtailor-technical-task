import { Test, TestingModule } from '@nestjs/testing';
import { CandidateController } from './candidate.controller';
import { CandidateService } from '../services/candidate.service';
import { Response } from 'express';
import ResponseErrorMessageResolver from '../resolvers/response-error-message.resolver';
import ResponseErrorStatusResolver from '../resolvers/response-error-status.resolver';

describe('CandidateControllerController', () => {
  let controller: CandidateController;
  let candidateService: CandidateService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CandidateController],
      providers: [
        {
          provide: CandidateService,
          useValue: {
            findAll: jest.fn(),
          },
        },
        {
          provide: ResponseErrorMessageResolver,
          useValue: {
            resolve: jest.fn(),
          },
        },
        {
          provide: ResponseErrorStatusResolver,
          useValue: {
            resolve: jest.fn(),
          },
        },
      ],
    }).compile();

    controller = module.get<CandidateController>(CandidateController);
    candidateService = module.get<CandidateService>(CandidateService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should call CustomerService', () => {
    const spy = jest.spyOn(candidateService, 'findAll');
    const responseObject = {};
    const response: Partial<Response> = {
      status: jest.fn().mockImplementation().mockReturnThis(),
      json: jest.fn().mockImplementation().mockReturnValue(responseObject),
    };
    controller.list(response as Response);
    expect(spy).toHaveBeenCalled();
  });
});
