import { HttpStatus, Injectable } from '@nestjs/common';
import { AxiosError } from 'axios';

@Injectable()
export class ResponseErrorMessageResolver {
  public resolve(error: AxiosError | any): string {
    if (!error.response) {
      return 'Internal Server Error';
    }

    if (error.response.data) {
      return error.response.data.message;
    }

    switch (error.response.status) {
      case HttpStatus.NOT_FOUND:
        return 'Not Found';
      case HttpStatus.BAD_REQUEST:
        return 'Bad Request';
      case HttpStatus.UNAUTHORIZED:
        return 'Unauthorized';
      case HttpStatus.FORBIDDEN:
        return 'Forbidden';
      default:
        return 'Internal Server Error';
    }
  }
}
