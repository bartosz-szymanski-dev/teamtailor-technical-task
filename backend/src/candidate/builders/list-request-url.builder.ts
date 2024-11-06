import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ListRequestIncludeType } from '../types/list-request-include.type';

@Injectable()
export class ListRequestUrlBuilder {
  private url: URL;
  private path: string;
  private includes: ListRequestIncludeType[] = [];

  constructor(private readonly configService: ConfigService) {}

  public setPath(path: string): ListRequestUrlBuilder {
    this.path = path;

    return this;
  }

  public addInclude(include: ListRequestIncludeType): ListRequestUrlBuilder {
    this.initUrl();
    this.includes.push(include);
    this.url.searchParams.set('include', this.includes.join(','));

    return this;
  }

  private initUrl(): void {
    if (this.url) {
      return;
    }

    this.url = new URL(
      this.path ?? '',
      this.configService.get<string>('TEAMTAILOR_API_URL'),
    );
  }

  public build(): string {
    this.initUrl();

    return this.url.toString();
  }
}
