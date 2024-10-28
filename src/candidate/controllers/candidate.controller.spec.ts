import { Test, TestingModule } from '@nestjs/testing';
import { CandidateController } from './candidate.controller';
import { CandidateService } from '../services/candidate.service';

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
    controller.list();
    expect(spy).toHaveBeenCalled();
  });
});
