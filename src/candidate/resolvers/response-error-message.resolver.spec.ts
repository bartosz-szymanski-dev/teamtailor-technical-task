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

  it('should return Not Found when response status is 404', () => {
    const error = {
      response: {
        status: 404,
      },
    };
    const result = responseErrorMessageResolver.resolve(error);

    expect(result).toEqual('Not Found');
  });

  it('should return Bad Request when response status is 400', () => {
    const error = {
      response: {
        status: 400,
      },
    };
    const result = responseErrorMessageResolver.resolve(error);

    expect(result).toEqual('Bad Request');
  });
});
