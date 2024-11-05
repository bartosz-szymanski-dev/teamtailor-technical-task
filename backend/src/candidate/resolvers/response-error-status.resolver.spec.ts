import ResponseErrorStatusResolver from './response-error-status.resolver';
import { Test, TestingModule } from '@nestjs/testing';

describe('ResponseErrorStatusResolver', () => {
  let resolver: ResponseErrorStatusResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ResponseErrorStatusResolver],
    }).compile();
    resolver = module.get<ResponseErrorStatusResolver>(
      ResponseErrorStatusResolver,
    );
  });

  describe('resolve', () => {
    it('should return status code from error response', () => {
      const error = {
        response: {
          status: 400,
        },
      };

      expect(resolver.resolve(error)).toBe(400);
    });

    it('should return 500 status code when error does not have response', () => {
      const error = {};

      expect(resolver.resolve(error)).toBe(500);
    });
  });
});
