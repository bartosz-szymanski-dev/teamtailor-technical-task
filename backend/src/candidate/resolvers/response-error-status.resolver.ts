import { HttpStatus, Injectable } from '@nestjs/common';
import { AxiosError } from 'axios';

@Injectable()
export default class ResponseErrorStatusResolver {
  public resolve(error: AxiosError | any): number {
    if (error.response) {
      return error.response.status;
    }

    return HttpStatus.INTERNAL_SERVER_ERROR;
  }
}
