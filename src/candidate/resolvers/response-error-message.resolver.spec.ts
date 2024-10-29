import ResponseErrorMessageResolver from './response-error-message.resolver';
import { Test, TestingModule } from '@nestjs/testing';

describe('ResponseErrorMessageResolver', () => {
  let responseErrorMessageResolver: ResponseErrorMessageResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ResponseErrorMessageResolver],
    }).compile();

    responseErrorMessageResolver = module.get<ResponseErrorMessageResolver>(
      ResponseErrorMessageResolver,
    );
  });

  it('should return Internal Server Error when error does not have response', () => {
    const error = {};
    const result = responseErrorMessageResolver.resolve(error);

    expect(result).toEqual('Internal Server Error');
  });

  it('should return error message from response data', () => {
    const error = {
      response: {
        data: {
          message: 'Some custom error message',
        },
      },
    };
    const result = responseErrorMessageResolver.resolve(error);

    expect(result).toEqual('Some custom error message');
  });

  it('should return correct error message to its status', () => {
    const errorToMessageMapping = {
      404: 'Not Found',
      400: 'Bad Request',
      401: 'Unauthorized',
      403: 'Forbidden',
      500: 'Internal Server Error',
    };

    Object.entries(errorToMessageMapping).forEach(([status, message]) => {
      const error = {
        response: {
          status: parseInt(status),
        },
      };
      const result = responseErrorMessageResolver.resolve(error);

      expect(result).toEqual(message);
    });
  });
});
