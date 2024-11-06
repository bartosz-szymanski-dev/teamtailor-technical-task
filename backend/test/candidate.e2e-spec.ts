import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, HttpStatus } from '@nestjs/common';
import * as request from 'supertest';
import { CandidateModule } from '../src/candidate/candidate.module';
import { ConfigModule } from '@nestjs/config';

describe('CandidateController (e2e)', (): void => {
  let app: INestApplication;

  beforeAll(async (): Promise<void> => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [CandidateModule, await ConfigModule.forRoot()],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterAll(async (): Promise<void> => {
    await app.close();
  });

  it('should create a CSV file with status 201 and be able to download it', async (): Promise<void> => {
    await request(app.getHttpServer())
      .get(`/candidate/list/download`)
      .expect(HttpStatus.OK);
  }, 20000);
});
