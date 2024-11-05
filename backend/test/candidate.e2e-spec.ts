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

  it('should return a list of candidates with status 200', async (): Promise<void> => {
    const response = await request(app.getHttpServer())
      .get('/candidate/list')
      .expect(HttpStatus.OK);

    expect(Array.isArray(response.body.data)).toBe(true);
    expect(response.body.data.length).toBeGreaterThan(0);
    expect(response.body.data[0]).toHaveProperty('id');
    expect(response.body.data[0]).toHaveProperty('attributes');
    expect(response.body.data[0]).toHaveProperty('relationships');
  });
});
