import { HttpStatus, INestApplication } from '@nestjs/common';
import { CsvModule } from '../src/csv/csv.module';
import { Test, TestingModule } from '@nestjs/testing';
import * as request from 'supertest';

describe('CsvController (e2e)', (): void => {
  let app: INestApplication;

  beforeAll(async (): Promise<void> => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [CsvModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterAll(async (): Promise<void> => {
    await app.close();
  });

  it('should create a CSV file with status 201 and be able to download it', async (): Promise<void> => {
    const data = {
      data: [
        {
          id: '25235329',
          type: 'candidates',
          links: {
            self: 'https://api.teamtailor.com/v1/candidates/25235329',
          },
          attributes: {
            connected: true,
            'consent-future-jobs-at': null,
            'created-at': '2016-08-13T17:06:45.824+02:00',
            email: 'lill_friman_12_sandbox_teamtailor_developer@example.com',
            'facebook-id': null,
            'first-name': 'Lill',
            internal: false,
            'last-name': 'Friman',
            'linkedin-uid': null,
            'linkedin-url': null,
            'original-resume': null,
            phone: '59787635575',
            picture: null,
            pitch: null,
            'referring-site': null,
            'referring-url':
              'https://www.teamtailor.com/app/companies/AWAoluo5yGw/careersite/content',
            referred: false,
            resume: null,
            sourced: false,
            unsubscribed: false,
            'updated-at': '2024-08-28T09:32:21.318+02:00',
            'restricted-at': null,
            'facebook-profile': null,
            'linkedin-profile': null,
            tags: [],
          },
          relationships: {
            activities: {
              links: {
                self: 'https://api.teamtailor.com/v1/candidates/25235329/relationships/activities',
                related:
                  'https://api.teamtailor.com/v1/candidates/25235329/activities',
              },
            },
            department: {
              links: {
                self: 'https://api.teamtailor.com/v1/candidates/25235329/relationships/department',
                related:
                  'https://api.teamtailor.com/v1/candidates/25235329/department',
              },
            },
            role: {
              links: {
                self: 'https://api.teamtailor.com/v1/candidates/25235329/relationships/role',
                related:
                  'https://api.teamtailor.com/v1/candidates/25235329/role',
              },
            },
            regions: {
              links: {
                self: 'https://api.teamtailor.com/v1/candidates/25235329/relationships/regions',
                related:
                  'https://api.teamtailor.com/v1/candidates/25235329/regions',
              },
            },
            'job-applications': {
              links: {
                self: 'https://api.teamtailor.com/v1/candidates/25235329/relationships/job-applications',
                related:
                  'https://api.teamtailor.com/v1/candidates/25235329/job-applications',
              },
              data: [
                {
                  type: 'job-applications',
                  id: '29305118',
                },
              ],
            },
            questions: {
              links: {
                self: 'https://api.teamtailor.com/v1/candidates/25235329/relationships/questions',
                related:
                  'https://api.teamtailor.com/v1/candidates/25235329/questions',
              },
            },
            answers: {
              links: {
                self: 'https://api.teamtailor.com/v1/candidates/25235329/relationships/answers',
                related:
                  'https://api.teamtailor.com/v1/candidates/25235329/answers',
              },
            },
            locations: {
              links: {
                self: 'https://api.teamtailor.com/v1/candidates/25235329/relationships/locations',
                related:
                  'https://api.teamtailor.com/v1/candidates/25235329/locations',
              },
            },
            uploads: {
              links: {
                self: 'https://api.teamtailor.com/v1/candidates/25235329/relationships/uploads',
                related:
                  'https://api.teamtailor.com/v1/candidates/25235329/uploads',
              },
            },
            'custom-field-values': {
              links: {
                self: 'https://api.teamtailor.com/v1/candidates/25235329/relationships/custom-field-values',
                related:
                  'https://api.teamtailor.com/v1/candidates/25235329/custom-field-values',
              },
            },
            'partner-results': {
              links: {
                self: 'https://api.teamtailor.com/v1/candidates/25235329/relationships/partner-results',
                related:
                  'https://api.teamtailor.com/v1/candidates/25235329/partner-results',
              },
            },
            'nps-responses': {
              links: {
                self: 'https://api.teamtailor.com/v1/candidates/25235329/relationships/nps-responses',
                related:
                  'https://api.teamtailor.com/v1/candidates/25235329/nps-responses',
              },
            },
          },
        },
        {
          id: '25235330',
          type: 'candidates',
          links: {
            self: 'https://api.teamtailor.com/v1/candidates/25235330',
          },
          attributes: {
            connected: true,
            'consent-future-jobs-at': null,
            'created-at': '2016-08-13T17:07:50.458+02:00',
            email: 'hugo_cederlund_13_sandbox_teamtailor_developer@example.com',
            'facebook-id': null,
            'first-name': 'Hugo',
            internal: false,
            'last-name': 'Cederlund',
            'linkedin-uid': null,
            'linkedin-url': null,
            'original-resume': null,
            phone: '6041193505',
            picture: null,
            pitch: null,
            'referring-site': null,
            'referring-url': null,
            referred: false,
            resume: null,
            sourced: false,
            unsubscribed: false,
            'updated-at': '2024-08-28T09:32:21.355+02:00',
            'restricted-at': null,
            'facebook-profile': null,
            'linkedin-profile': null,
            tags: [],
          },
          relationships: {
            activities: {
              links: {
                self: 'https://api.teamtailor.com/v1/candidates/25235330/relationships/activities',
                related:
                  'https://api.teamtailor.com/v1/candidates/25235330/activities',
              },
            },
            department: {
              links: {
                self: 'https://api.teamtailor.com/v1/candidates/25235330/relationships/department',
                related:
                  'https://api.teamtailor.com/v1/candidates/25235330/department',
              },
            },
            role: {
              links: {
                self: 'https://api.teamtailor.com/v1/candidates/25235330/relationships/role',
                related:
                  'https://api.teamtailor.com/v1/candidates/25235330/role',
              },
            },
            regions: {
              links: {
                self: 'https://api.teamtailor.com/v1/candidates/25235330/relationships/regions',
                related:
                  'https://api.teamtailor.com/v1/candidates/25235330/regions',
              },
            },
            'job-applications': {
              links: {
                self: 'https://api.teamtailor.com/v1/candidates/25235330/relationships/job-applications',
                related:
                  'https://api.teamtailor.com/v1/candidates/25235330/job-applications',
              },
              data: [
                {
                  type: 'job-applications',
                  id: '29305121',
                },
              ],
            },
            questions: {
              links: {
                self: 'https://api.teamtailor.com/v1/candidates/25235330/relationships/questions',
                related:
                  'https://api.teamtailor.com/v1/candidates/25235330/questions',
              },
            },
            answers: {
              links: {
                self: 'https://api.teamtailor.com/v1/candidates/25235330/relationships/answers',
                related:
                  'https://api.teamtailor.com/v1/candidates/25235330/answers',
              },
            },
            locations: {
              links: {
                self: 'https://api.teamtailor.com/v1/candidates/25235330/relationships/locations',
                related:
                  'https://api.teamtailor.com/v1/candidates/25235330/locations',
              },
            },
            uploads: {
              links: {
                self: 'https://api.teamtailor.com/v1/candidates/25235330/relationships/uploads',
                related:
                  'https://api.teamtailor.com/v1/candidates/25235330/uploads',
              },
            },
            'custom-field-values': {
              links: {
                self: 'https://api.teamtailor.com/v1/candidates/25235330/relationships/custom-field-values',
                related:
                  'https://api.teamtailor.com/v1/candidates/25235330/custom-field-values',
              },
            },
            'partner-results': {
              links: {
                self: 'https://api.teamtailor.com/v1/candidates/25235330/relationships/partner-results',
                related:
                  'https://api.teamtailor.com/v1/candidates/25235330/partner-results',
              },
            },
            'nps-responses': {
              links: {
                self: 'https://api.teamtailor.com/v1/candidates/25235330/relationships/nps-responses',
                related:
                  'https://api.teamtailor.com/v1/candidates/25235330/nps-responses',
              },
            },
          },
        },
        {
          id: '25235331',
          type: 'candidates',
          links: {
            self: 'https://api.teamtailor.com/v1/candidates/25235331',
          },
          attributes: {
            connected: true,
            'consent-future-jobs-at': null,
            'created-at': '2016-08-13T17:08:25.194+02:00',
            email: 'fritiof_rahm_14_sandbox_teamtailor_developer@example.com',
            'facebook-id': null,
            'first-name': 'Fritiof ',
            internal: false,
            'last-name': 'Rahm',
            'linkedin-uid': null,
            'linkedin-url': null,
            'original-resume': null,
            phone: '56675170717',
            picture: null,
            pitch: null,
            'referring-site': null,
            'referring-url': null,
            referred: false,
            resume: null,
            sourced: false,
            unsubscribed: false,
            'updated-at': '2024-08-28T09:32:21.388+02:00',
            'restricted-at': null,
            'facebook-profile': null,
            'linkedin-profile': null,
            tags: [],
          },
          relationships: {
            activities: {
              links: {
                self: 'https://api.teamtailor.com/v1/candidates/25235331/relationships/activities',
                related:
                  'https://api.teamtailor.com/v1/candidates/25235331/activities',
              },
            },
            department: {
              links: {
                self: 'https://api.teamtailor.com/v1/candidates/25235331/relationships/department',
                related:
                  'https://api.teamtailor.com/v1/candidates/25235331/department',
              },
            },
            role: {
              links: {
                self: 'https://api.teamtailor.com/v1/candidates/25235331/relationships/role',
                related:
                  'https://api.teamtailor.com/v1/candidates/25235331/role',
              },
            },
            regions: {
              links: {
                self: 'https://api.teamtailor.com/v1/candidates/25235331/relationships/regions',
                related:
                  'https://api.teamtailor.com/v1/candidates/25235331/regions',
              },
            },
            'job-applications': {
              links: {
                self: 'https://api.teamtailor.com/v1/candidates/25235331/relationships/job-applications',
                related:
                  'https://api.teamtailor.com/v1/candidates/25235331/job-applications',
              },
              data: [
                {
                  type: 'job-applications',
                  id: '29305122',
                },
              ],
            },
            questions: {
              links: {
                self: 'https://api.teamtailor.com/v1/candidates/25235331/relationships/questions',
                related:
                  'https://api.teamtailor.com/v1/candidates/25235331/questions',
              },
            },
            answers: {
              links: {
                self: 'https://api.teamtailor.com/v1/candidates/25235331/relationships/answers',
                related:
                  'https://api.teamtailor.com/v1/candidates/25235331/answers',
              },
            },
            locations: {
              links: {
                self: 'https://api.teamtailor.com/v1/candidates/25235331/relationships/locations',
                related:
                  'https://api.teamtailor.com/v1/candidates/25235331/locations',
              },
            },
            uploads: {
              links: {
                self: 'https://api.teamtailor.com/v1/candidates/25235331/relationships/uploads',
                related:
                  'https://api.teamtailor.com/v1/candidates/25235331/uploads',
              },
            },
            'custom-field-values': {
              links: {
                self: 'https://api.teamtailor.com/v1/candidates/25235331/relationships/custom-field-values',
                related:
                  'https://api.teamtailor.com/v1/candidates/25235331/custom-field-values',
              },
            },
            'partner-results': {
              links: {
                self: 'https://api.teamtailor.com/v1/candidates/25235331/relationships/partner-results',
                related:
                  'https://api.teamtailor.com/v1/candidates/25235331/partner-results',
              },
            },
            'nps-responses': {
              links: {
                self: 'https://api.teamtailor.com/v1/candidates/25235331/relationships/nps-responses',
                related:
                  'https://api.teamtailor.com/v1/candidates/25235331/nps-responses',
              },
            },
          },
        },
        {
          id: '25235332',
          type: 'candidates',
          links: {
            self: 'https://api.teamtailor.com/v1/candidates/25235332',
          },
          attributes: {
            connected: true,
            'consent-future-jobs-at': null,
            'created-at': '2016-08-13T17:08:53.314+02:00',
            email:
              'hildegard_lorenzon_15_sandbox_teamtailor_developer@example.com',
            'facebook-id': null,
            'first-name': 'Hildegard ',
            internal: false,
            'last-name': 'Lorenzon',
            'linkedin-uid': null,
            'linkedin-url': null,
            'original-resume': null,
            phone: '68932831736',
            picture: null,
            pitch: null,
            'referring-site': null,
            'referring-url': null,
            referred: false,
            resume: null,
            sourced: false,
            unsubscribed: false,
            'updated-at': '2024-08-28T09:32:21.423+02:00',
            'restricted-at': null,
            'facebook-profile': null,
            'linkedin-profile': null,
            tags: [],
          },
          relationships: {
            activities: {
              links: {
                self: 'https://api.teamtailor.com/v1/candidates/25235332/relationships/activities',
                related:
                  'https://api.teamtailor.com/v1/candidates/25235332/activities',
              },
            },
            department: {
              links: {
                self: 'https://api.teamtailor.com/v1/candidates/25235332/relationships/department',
                related:
                  'https://api.teamtailor.com/v1/candidates/25235332/department',
              },
            },
            role: {
              links: {
                self: 'https://api.teamtailor.com/v1/candidates/25235332/relationships/role',
                related:
                  'https://api.teamtailor.com/v1/candidates/25235332/role',
              },
            },
            regions: {
              links: {
                self: 'https://api.teamtailor.com/v1/candidates/25235332/relationships/regions',
                related:
                  'https://api.teamtailor.com/v1/candidates/25235332/regions',
              },
            },
            'job-applications': {
              links: {
                self: 'https://api.teamtailor.com/v1/candidates/25235332/relationships/job-applications',
                related:
                  'https://api.teamtailor.com/v1/candidates/25235332/job-applications',
              },
              data: [
                {
                  type: 'job-applications',
                  id: '29305123',
                },
              ],
            },
            questions: {
              links: {
                self: 'https://api.teamtailor.com/v1/candidates/25235332/relationships/questions',
                related:
                  'https://api.teamtailor.com/v1/candidates/25235332/questions',
              },
            },
            answers: {
              links: {
                self: 'https://api.teamtailor.com/v1/candidates/25235332/relationships/answers',
                related:
                  'https://api.teamtailor.com/v1/candidates/25235332/answers',
              },
            },
            locations: {
              links: {
                self: 'https://api.teamtailor.com/v1/candidates/25235332/relationships/locations',
                related:
                  'https://api.teamtailor.com/v1/candidates/25235332/locations',
              },
            },
            uploads: {
              links: {
                self: 'https://api.teamtailor.com/v1/candidates/25235332/relationships/uploads',
                related:
                  'https://api.teamtailor.com/v1/candidates/25235332/uploads',
              },
            },
            'custom-field-values': {
              links: {
                self: 'https://api.teamtailor.com/v1/candidates/25235332/relationships/custom-field-values',
                related:
                  'https://api.teamtailor.com/v1/candidates/25235332/custom-field-values',
              },
            },
            'partner-results': {
              links: {
                self: 'https://api.teamtailor.com/v1/candidates/25235332/relationships/partner-results',
                related:
                  'https://api.teamtailor.com/v1/candidates/25235332/partner-results',
              },
            },
            'nps-responses': {
              links: {
                self: 'https://api.teamtailor.com/v1/candidates/25235332/relationships/nps-responses',
                related:
                  'https://api.teamtailor.com/v1/candidates/25235332/nps-responses',
              },
            },
          },
        },
        {
          id: '25235333',
          type: 'candidates',
          links: {
            self: 'https://api.teamtailor.com/v1/candidates/25235333',
          },
          attributes: {
            connected: true,
            'consent-future-jobs-at': null,
            'created-at': '2016-08-13T17:09:23.116+02:00',
            email: 'gorel_engstrom_16_sandbox_teamtailor_developer@example.com',
            'facebook-id': null,
            'first-name': 'Görel ',
            internal: false,
            'last-name': 'Engström',
            'linkedin-uid': null,
            'linkedin-url': null,
            'original-resume': null,
            phone: '50093299179',
            picture: null,
            pitch: null,
            'referring-site': null,
            'referring-url': null,
            referred: false,
            resume: null,
            sourced: false,
            unsubscribed: false,
            'updated-at': '2024-10-10T12:28:10.170+02:00',
            'restricted-at': null,
            'facebook-profile': null,
            'linkedin-profile': null,
            tags: [],
          },
          relationships: {
            activities: {
              links: {
                self: 'https://api.teamtailor.com/v1/candidates/25235333/relationships/activities',
                related:
                  'https://api.teamtailor.com/v1/candidates/25235333/activities',
              },
            },
            department: {
              links: {
                self: 'https://api.teamtailor.com/v1/candidates/25235333/relationships/department',
                related:
                  'https://api.teamtailor.com/v1/candidates/25235333/department',
              },
            },
            role: {
              links: {
                self: 'https://api.teamtailor.com/v1/candidates/25235333/relationships/role',
                related:
                  'https://api.teamtailor.com/v1/candidates/25235333/role',
              },
            },
            regions: {
              links: {
                self: 'https://api.teamtailor.com/v1/candidates/25235333/relationships/regions',
                related:
                  'https://api.teamtailor.com/v1/candidates/25235333/regions',
              },
            },
            'job-applications': {
              links: {
                self: 'https://api.teamtailor.com/v1/candidates/25235333/relationships/job-applications',
                related:
                  'https://api.teamtailor.com/v1/candidates/25235333/job-applications',
              },
              data: [
                {
                  type: 'job-applications',
                  id: '29305124',
                },
              ],
            },
            questions: {
              links: {
                self: 'https://api.teamtailor.com/v1/candidates/25235333/relationships/questions',
                related:
                  'https://api.teamtailor.com/v1/candidates/25235333/questions',
              },
            },
            answers: {
              links: {
                self: 'https://api.teamtailor.com/v1/candidates/25235333/relationships/answers',
                related:
                  'https://api.teamtailor.com/v1/candidates/25235333/answers',
              },
            },
            locations: {
              links: {
                self: 'https://api.teamtailor.com/v1/candidates/25235333/relationships/locations',
                related:
                  'https://api.teamtailor.com/v1/candidates/25235333/locations',
              },
            },
            uploads: {
              links: {
                self: 'https://api.teamtailor.com/v1/candidates/25235333/relationships/uploads',
                related:
                  'https://api.teamtailor.com/v1/candidates/25235333/uploads',
              },
            },
            'custom-field-values': {
              links: {
                self: 'https://api.teamtailor.com/v1/candidates/25235333/relationships/custom-field-values',
                related:
                  'https://api.teamtailor.com/v1/candidates/25235333/custom-field-values',
              },
            },
            'partner-results': {
              links: {
                self: 'https://api.teamtailor.com/v1/candidates/25235333/relationships/partner-results',
                related:
                  'https://api.teamtailor.com/v1/candidates/25235333/partner-results',
              },
            },
            'nps-responses': {
              links: {
                self: 'https://api.teamtailor.com/v1/candidates/25235333/relationships/nps-responses',
                related:
                  'https://api.teamtailor.com/v1/candidates/25235333/nps-responses',
              },
            },
          },
        },
        {
          id: '25235334',
          type: 'candidates',
          links: {
            self: 'https://api.teamtailor.com/v1/candidates/25235334',
          },
          attributes: {
            connected: true,
            'consent-future-jobs-at': null,
            'created-at': '2016-08-13T17:10:01.228+02:00',
            email:
              'ganizani_church_17_sandbox_teamtailor_developer@example.com',
            'facebook-id': null,
            'first-name': 'Ganizani  ',
            internal: false,
            'last-name': 'Church',
            'linkedin-uid': null,
            'linkedin-url': null,
            'original-resume': null,
            phone: '35069416457',
            picture: null,
            pitch: null,
            'referring-site': null,
            'referring-url': null,
            referred: false,
            resume: null,
            sourced: false,
            unsubscribed: false,
            'updated-at': '2024-08-28T09:32:21.490+02:00',
            'restricted-at': null,
            'facebook-profile': null,
            'linkedin-profile': null,
            tags: [],
          },
          relationships: {
            activities: {
              links: {
                self: 'https://api.teamtailor.com/v1/candidates/25235334/relationships/activities',
                related:
                  'https://api.teamtailor.com/v1/candidates/25235334/activities',
              },
            },
            department: {
              links: {
                self: 'https://api.teamtailor.com/v1/candidates/25235334/relationships/department',
                related:
                  'https://api.teamtailor.com/v1/candidates/25235334/department',
              },
            },
            role: {
              links: {
                self: 'https://api.teamtailor.com/v1/candidates/25235334/relationships/role',
                related:
                  'https://api.teamtailor.com/v1/candidates/25235334/role',
              },
            },
            regions: {
              links: {
                self: 'https://api.teamtailor.com/v1/candidates/25235334/relationships/regions',
                related:
                  'https://api.teamtailor.com/v1/candidates/25235334/regions',
              },
            },
            'job-applications': {
              links: {
                self: 'https://api.teamtailor.com/v1/candidates/25235334/relationships/job-applications',
                related:
                  'https://api.teamtailor.com/v1/candidates/25235334/job-applications',
              },
              data: [
                {
                  type: 'job-applications',
                  id: '29305125',
                },
              ],
            },
            questions: {
              links: {
                self: 'https://api.teamtailor.com/v1/candidates/25235334/relationships/questions',
                related:
                  'https://api.teamtailor.com/v1/candidates/25235334/questions',
              },
            },
            answers: {
              links: {
                self: 'https://api.teamtailor.com/v1/candidates/25235334/relationships/answers',
                related:
                  'https://api.teamtailor.com/v1/candidates/25235334/answers',
              },
            },
            locations: {
              links: {
                self: 'https://api.teamtailor.com/v1/candidates/25235334/relationships/locations',
                related:
                  'https://api.teamtailor.com/v1/candidates/25235334/locations',
              },
            },
            uploads: {
              links: {
                self: 'https://api.teamtailor.com/v1/candidates/25235334/relationships/uploads',
                related:
                  'https://api.teamtailor.com/v1/candidates/25235334/uploads',
              },
            },
            'custom-field-values': {
              links: {
                self: 'https://api.teamtailor.com/v1/candidates/25235334/relationships/custom-field-values',
                related:
                  'https://api.teamtailor.com/v1/candidates/25235334/custom-field-values',
              },
            },
            'partner-results': {
              links: {
                self: 'https://api.teamtailor.com/v1/candidates/25235334/relationships/partner-results',
                related:
                  'https://api.teamtailor.com/v1/candidates/25235334/partner-results',
              },
            },
            'nps-responses': {
              links: {
                self: 'https://api.teamtailor.com/v1/candidates/25235334/relationships/nps-responses',
                related:
                  'https://api.teamtailor.com/v1/candidates/25235334/nps-responses',
              },
            },
          },
        },
        {
          id: '25235335',
          type: 'candidates',
          links: {
            self: 'https://api.teamtailor.com/v1/candidates/25235335',
          },
          attributes: {
            connected: false,
            'consent-future-jobs-at': null,
            'created-at': '2016-08-13T17:10:40.928+02:00',
            email:
              'kersti_sjostrom_18_sandbox_teamtailor_developer@example.com',
            'facebook-id': null,
            'first-name': 'Kersti ',
            internal: false,
            'last-name': 'Sjöström',
            'linkedin-uid': null,
            'linkedin-url': null,
            'original-resume': null,
            phone: '84795371154',
            picture: null,
            pitch: null,
            'referring-site': null,
            'referring-url': null,
            referred: false,
            resume: null,
            sourced: false,
            unsubscribed: false,
            'updated-at': '2024-10-10T12:28:28.355+02:00',
            'restricted-at': null,
            'facebook-profile': null,
            'linkedin-profile': null,
            tags: [],
          },
          relationships: {
            activities: {
              links: {
                self: 'https://api.teamtailor.com/v1/candidates/25235335/relationships/activities',
                related:
                  'https://api.teamtailor.com/v1/candidates/25235335/activities',
              },
            },
            department: {
              links: {
                self: 'https://api.teamtailor.com/v1/candidates/25235335/relationships/department',
                related:
                  'https://api.teamtailor.com/v1/candidates/25235335/department',
              },
            },
            role: {
              links: {
                self: 'https://api.teamtailor.com/v1/candidates/25235335/relationships/role',
                related:
                  'https://api.teamtailor.com/v1/candidates/25235335/role',
              },
            },
            regions: {
              links: {
                self: 'https://api.teamtailor.com/v1/candidates/25235335/relationships/regions',
                related:
                  'https://api.teamtailor.com/v1/candidates/25235335/regions',
              },
            },
            'job-applications': {
              links: {
                self: 'https://api.teamtailor.com/v1/candidates/25235335/relationships/job-applications',
                related:
                  'https://api.teamtailor.com/v1/candidates/25235335/job-applications',
              },
              data: [
                {
                  type: 'job-applications',
                  id: '29305126',
                },
              ],
            },
            questions: {
              links: {
                self: 'https://api.teamtailor.com/v1/candidates/25235335/relationships/questions',
                related:
                  'https://api.teamtailor.com/v1/candidates/25235335/questions',
              },
            },
            answers: {
              links: {
                self: 'https://api.teamtailor.com/v1/candidates/25235335/relationships/answers',
                related:
                  'https://api.teamtailor.com/v1/candidates/25235335/answers',
              },
            },
            locations: {
              links: {
                self: 'https://api.teamtailor.com/v1/candidates/25235335/relationships/locations',
                related:
                  'https://api.teamtailor.com/v1/candidates/25235335/locations',
              },
            },
            uploads: {
              links: {
                self: 'https://api.teamtailor.com/v1/candidates/25235335/relationships/uploads',
                related:
                  'https://api.teamtailor.com/v1/candidates/25235335/uploads',
              },
            },
            'custom-field-values': {
              links: {
                self: 'https://api.teamtailor.com/v1/candidates/25235335/relationships/custom-field-values',
                related:
                  'https://api.teamtailor.com/v1/candidates/25235335/custom-field-values',
              },
            },
            'partner-results': {
              links: {
                self: 'https://api.teamtailor.com/v1/candidates/25235335/relationships/partner-results',
                related:
                  'https://api.teamtailor.com/v1/candidates/25235335/partner-results',
              },
            },
            'nps-responses': {
              links: {
                self: 'https://api.teamtailor.com/v1/candidates/25235335/relationships/nps-responses',
                related:
                  'https://api.teamtailor.com/v1/candidates/25235335/nps-responses',
              },
            },
          },
        },
        {
          id: '25235336',
          type: 'candidates',
          links: {
            self: 'https://api.teamtailor.com/v1/candidates/25235336',
          },
          attributes: {
            connected: false,
            'consent-future-jobs-at': null,
            'created-at': '2016-08-13T17:11:16.124+02:00',
            email: 'odd_molander_19_sandbox_teamtailor_developer@example.com',
            'facebook-id': null,
            'first-name': 'Odd ',
            internal: false,
            'last-name': 'Molander',
            'linkedin-uid': null,
            'linkedin-url': null,
            'original-resume': null,
            phone: '66850669005',
            picture: null,
            pitch: null,
            'referring-site': null,
            'referring-url': null,
            referred: false,
            resume: null,
            sourced: false,
            unsubscribed: false,
            'updated-at': '2024-08-28T09:32:21.553+02:00',
            'restricted-at': null,
            'facebook-profile': null,
            'linkedin-profile': null,
            tags: [],
          },
          relationships: {
            activities: {
              links: {
                self: 'https://api.teamtailor.com/v1/candidates/25235336/relationships/activities',
                related:
                  'https://api.teamtailor.com/v1/candidates/25235336/activities',
              },
            },
            department: {
              links: {
                self: 'https://api.teamtailor.com/v1/candidates/25235336/relationships/department',
                related:
                  'https://api.teamtailor.com/v1/candidates/25235336/department',
              },
            },
            role: {
              links: {
                self: 'https://api.teamtailor.com/v1/candidates/25235336/relationships/role',
                related:
                  'https://api.teamtailor.com/v1/candidates/25235336/role',
              },
            },
            regions: {
              links: {
                self: 'https://api.teamtailor.com/v1/candidates/25235336/relationships/regions',
                related:
                  'https://api.teamtailor.com/v1/candidates/25235336/regions',
              },
            },
            'job-applications': {
              links: {
                self: 'https://api.teamtailor.com/v1/candidates/25235336/relationships/job-applications',
                related:
                  'https://api.teamtailor.com/v1/candidates/25235336/job-applications',
              },
              data: [
                {
                  type: 'job-applications',
                  id: '29305127',
                },
              ],
            },
            questions: {
              links: {
                self: 'https://api.teamtailor.com/v1/candidates/25235336/relationships/questions',
                related:
                  'https://api.teamtailor.com/v1/candidates/25235336/questions',
              },
            },
            answers: {
              links: {
                self: 'https://api.teamtailor.com/v1/candidates/25235336/relationships/answers',
                related:
                  'https://api.teamtailor.com/v1/candidates/25235336/answers',
              },
            },
            locations: {
              links: {
                self: 'https://api.teamtailor.com/v1/candidates/25235336/relationships/locations',
                related:
                  'https://api.teamtailor.com/v1/candidates/25235336/locations',
              },
            },
            uploads: {
              links: {
                self: 'https://api.teamtailor.com/v1/candidates/25235336/relationships/uploads',
                related:
                  'https://api.teamtailor.com/v1/candidates/25235336/uploads',
              },
            },
            'custom-field-values': {
              links: {
                self: 'https://api.teamtailor.com/v1/candidates/25235336/relationships/custom-field-values',
                related:
                  'https://api.teamtailor.com/v1/candidates/25235336/custom-field-values',
              },
            },
            'partner-results': {
              links: {
                self: 'https://api.teamtailor.com/v1/candidates/25235336/relationships/partner-results',
                related:
                  'https://api.teamtailor.com/v1/candidates/25235336/partner-results',
              },
            },
            'nps-responses': {
              links: {
                self: 'https://api.teamtailor.com/v1/candidates/25235336/relationships/nps-responses',
                related:
                  'https://api.teamtailor.com/v1/candidates/25235336/nps-responses',
              },
            },
          },
        },
        {
          id: '25235337',
          type: 'candidates',
          links: {
            self: 'https://api.teamtailor.com/v1/candidates/25235337',
          },
          attributes: {
            connected: true,
            'consent-future-jobs-at': null,
            'created-at': '2016-08-13T17:11:28.292+02:00',
            email:
              'christoffer_ankarstrand_20_sandbox_teamtailor_developer@example.com',
            'facebook-id': null,
            'first-name': 'Christoffer',
            internal: false,
            'last-name': 'Ankarstrand',
            'linkedin-uid': 'HwFN2WFQ4p',
            'linkedin-url':
              'https://www.linkedin.com/in/christoffer-ankarstrand-35717719',
            'original-resume': null,
            phone: '30879565808',
            picture: null,
            pitch: null,
            'referring-site': null,
            'referring-url': null,
            referred: false,
            resume: null,
            sourced: false,
            unsubscribed: false,
            'updated-at': '2024-08-28T09:32:21.585+02:00',
            'restricted-at': null,
            'facebook-profile': null,
            'linkedin-profile':
              '<h5 id="teamtailor">Teamtailor</h5>\n\n<p>Stockholm, Sweden • Marketing and Advertising • 500 connections</p>\n\n<h4 id="current-positions">Current positions</h4>\n\n<p><strong>Sales Manager, Teamtailor</strong><br />\nAug 2015 - current</p>\n\n<blockquote>\n  <p>Teamtailor gives companies an effective employer branding platform. A modern career page, an applicant tracking system, simple &amp; smart ways to involve your team in recruiting and market your company. Integrated with all major social media platforms. No technical setup and always easy-to-use. Teamtailor partners with companies that takes recruiting seriously, that wants to be seen as an attractive workplace, and know that this is key for successful recruiting. Today over 3000 employees use Teamtailor for recruiting and employer branding. It’s time to turn HR into heroes!</p>\n</blockquote>\n\n<p><strong>Founder / Grundare, Grandconnection</strong><br />\nSep 2014 - current</p>\n\n<blockquote>\n  <p>Grandconnection är oberoende rådgivare inom B2B-försäljning som identifierar våra kunders utmaningar och vägleder till lösningar, partners och tjänster. Vi hjälper företag att bli skickligare på att sålla bland leverantörer &amp; tjänster inom försäljning &amp; leadsgenerering. Med oss som samarbetspartner så säkerhetsställer du din säljprocess &amp; får uppdateringar/nyheter inom området.  christoffer@grandconnection.se  073 50 20 533 http://www.grandconnection.se</p>\n</blockquote>\n',
            tags: [],
          },
          relationships: {
            activities: {
              links: {
                self: 'https://api.teamtailor.com/v1/candidates/25235337/relationships/activities',
                related:
                  'https://api.teamtailor.com/v1/candidates/25235337/activities',
              },
            },
            department: {
              links: {
                self: 'https://api.teamtailor.com/v1/candidates/25235337/relationships/department',
                related:
                  'https://api.teamtailor.com/v1/candidates/25235337/department',
              },
            },
            role: {
              links: {
                self: 'https://api.teamtailor.com/v1/candidates/25235337/relationships/role',
                related:
                  'https://api.teamtailor.com/v1/candidates/25235337/role',
              },
            },
            regions: {
              links: {
                self: 'https://api.teamtailor.com/v1/candidates/25235337/relationships/regions',
                related:
                  'https://api.teamtailor.com/v1/candidates/25235337/regions',
              },
            },
            'job-applications': {
              links: {
                self: 'https://api.teamtailor.com/v1/candidates/25235337/relationships/job-applications',
                related:
                  'https://api.teamtailor.com/v1/candidates/25235337/job-applications',
              },
              data: [
                {
                  type: 'job-applications',
                  id: '29305128',
                },
              ],
            },
            questions: {
              links: {
                self: 'https://api.teamtailor.com/v1/candidates/25235337/relationships/questions',
                related:
                  'https://api.teamtailor.com/v1/candidates/25235337/questions',
              },
            },
            answers: {
              links: {
                self: 'https://api.teamtailor.com/v1/candidates/25235337/relationships/answers',
                related:
                  'https://api.teamtailor.com/v1/candidates/25235337/answers',
              },
            },
            locations: {
              links: {
                self: 'https://api.teamtailor.com/v1/candidates/25235337/relationships/locations',
                related:
                  'https://api.teamtailor.com/v1/candidates/25235337/locations',
              },
            },
            uploads: {
              links: {
                self: 'https://api.teamtailor.com/v1/candidates/25235337/relationships/uploads',
                related:
                  'https://api.teamtailor.com/v1/candidates/25235337/uploads',
              },
            },
            'custom-field-values': {
              links: {
                self: 'https://api.teamtailor.com/v1/candidates/25235337/relationships/custom-field-values',
                related:
                  'https://api.teamtailor.com/v1/candidates/25235337/custom-field-values',
              },
            },
            'partner-results': {
              links: {
                self: 'https://api.teamtailor.com/v1/candidates/25235337/relationships/partner-results',
                related:
                  'https://api.teamtailor.com/v1/candidates/25235337/partner-results',
              },
            },
            'nps-responses': {
              links: {
                self: 'https://api.teamtailor.com/v1/candidates/25235337/relationships/nps-responses',
                related:
                  'https://api.teamtailor.com/v1/candidates/25235337/nps-responses',
              },
            },
          },
        },
        {
          id: '25235338',
          type: 'candidates',
          links: {
            self: 'https://api.teamtailor.com/v1/candidates/25235338',
          },
          attributes: {
            connected: false,
            'consent-future-jobs-at': null,
            'created-at': '2016-08-13T17:12:27.926+02:00',
            email: 'nanna_blomberg_21_sandbox_teamtailor_developer@example.com',
            'facebook-id': null,
            'first-name': 'Nanna',
            internal: false,
            'last-name': 'Blomberg',
            'linkedin-uid': null,
            'linkedin-url': null,
            'original-resume': null,
            phone: '39721786657',
            picture: null,
            pitch: null,
            'referring-site': null,
            'referring-url': null,
            referred: false,
            resume: null,
            sourced: false,
            unsubscribed: false,
            'updated-at': '2024-08-28T09:32:21.618+02:00',
            'restricted-at': null,
            'facebook-profile': null,
            'linkedin-profile': null,
            tags: [],
          },
          relationships: {
            activities: {
              links: {
                self: 'https://api.teamtailor.com/v1/candidates/25235338/relationships/activities',
                related:
                  'https://api.teamtailor.com/v1/candidates/25235338/activities',
              },
            },
            department: {
              links: {
                self: 'https://api.teamtailor.com/v1/candidates/25235338/relationships/department',
                related:
                  'https://api.teamtailor.com/v1/candidates/25235338/department',
              },
            },
            role: {
              links: {
                self: 'https://api.teamtailor.com/v1/candidates/25235338/relationships/role',
                related:
                  'https://api.teamtailor.com/v1/candidates/25235338/role',
              },
            },
            regions: {
              links: {
                self: 'https://api.teamtailor.com/v1/candidates/25235338/relationships/regions',
                related:
                  'https://api.teamtailor.com/v1/candidates/25235338/regions',
              },
            },
            'job-applications': {
              links: {
                self: 'https://api.teamtailor.com/v1/candidates/25235338/relationships/job-applications',
                related:
                  'https://api.teamtailor.com/v1/candidates/25235338/job-applications',
              },
              data: [
                {
                  type: 'job-applications',
                  id: '29305129',
                },
              ],
            },
            questions: {
              links: {
                self: 'https://api.teamtailor.com/v1/candidates/25235338/relationships/questions',
                related:
                  'https://api.teamtailor.com/v1/candidates/25235338/questions',
              },
            },
            answers: {
              links: {
                self: 'https://api.teamtailor.com/v1/candidates/25235338/relationships/answers',
                related:
                  'https://api.teamtailor.com/v1/candidates/25235338/answers',
              },
            },
            locations: {
              links: {
                self: 'https://api.teamtailor.com/v1/candidates/25235338/relationships/locations',
                related:
                  'https://api.teamtailor.com/v1/candidates/25235338/locations',
              },
            },
            uploads: {
              links: {
                self: 'https://api.teamtailor.com/v1/candidates/25235338/relationships/uploads',
                related:
                  'https://api.teamtailor.com/v1/candidates/25235338/uploads',
              },
            },
            'custom-field-values': {
              links: {
                self: 'https://api.teamtailor.com/v1/candidates/25235338/relationships/custom-field-values',
                related:
                  'https://api.teamtailor.com/v1/candidates/25235338/custom-field-values',
              },
            },
            'partner-results': {
              links: {
                self: 'https://api.teamtailor.com/v1/candidates/25235338/relationships/partner-results',
                related:
                  'https://api.teamtailor.com/v1/candidates/25235338/partner-results',
              },
            },
            'nps-responses': {
              links: {
                self: 'https://api.teamtailor.com/v1/candidates/25235338/relationships/nps-responses',
                related:
                  'https://api.teamtailor.com/v1/candidates/25235338/nps-responses',
              },
            },
          },
        },
      ],
      included: [
        {
          id: '29305118',
          type: 'job-applications',
          links: {
            self: 'https://api.teamtailor.com/v1/job-applications/29305118',
          },
          attributes: {
            'cover-letter': null,
            'created-at': '2022-03-22T15:59:12.658+01:00',
            match: null,
            'referring-site': null,
            'referring-url': null,
            'rejected-at': null,
            'row-order': 0,
            sourced: false,
            'updated-at': '2022-03-22T15:59:12.658+01:00',
            'changed-stage-at': '2022-03-22T15:59:12.642+01:00',
          },
          relationships: {
            candidate: {
              links: {
                self: 'https://api.teamtailor.com/v1/job-applications/29305118/relationships/candidate',
                related:
                  'https://api.teamtailor.com/v1/job-applications/29305118/candidate',
              },
            },
            job: {
              links: {
                self: 'https://api.teamtailor.com/v1/job-applications/29305118/relationships/job',
                related:
                  'https://api.teamtailor.com/v1/job-applications/29305118/job',
              },
            },
            stage: {
              links: {
                self: 'https://api.teamtailor.com/v1/job-applications/29305118/relationships/stage',
                related:
                  'https://api.teamtailor.com/v1/job-applications/29305118/stage',
              },
            },
            'reject-reason': {
              links: {
                self: 'https://api.teamtailor.com/v1/job-applications/29305118/relationships/reject-reason',
                related:
                  'https://api.teamtailor.com/v1/job-applications/29305118/reject-reason',
              },
            },
            'nps-responses': {
              links: {
                self: 'https://api.teamtailor.com/v1/job-applications/29305118/relationships/nps-responses',
                related:
                  'https://api.teamtailor.com/v1/job-applications/29305118/nps-responses',
              },
            },
          },
        },
        {
          id: '29305121',
          type: 'job-applications',
          links: {
            self: 'https://api.teamtailor.com/v1/job-applications/29305121',
          },
          attributes: {
            'cover-letter': null,
            'created-at': '2022-03-22T15:59:12.753+01:00',
            match: null,
            'referring-site': null,
            'referring-url': null,
            'rejected-at': null,
            'row-order': 0,
            sourced: false,
            'updated-at': '2022-03-22T15:59:12.753+01:00',
            'changed-stage-at': '2022-03-22T15:59:12.739+01:00',
          },
          relationships: {
            candidate: {
              links: {
                self: 'https://api.teamtailor.com/v1/job-applications/29305121/relationships/candidate',
                related:
                  'https://api.teamtailor.com/v1/job-applications/29305121/candidate',
              },
            },
            job: {
              links: {
                self: 'https://api.teamtailor.com/v1/job-applications/29305121/relationships/job',
                related:
                  'https://api.teamtailor.com/v1/job-applications/29305121/job',
              },
            },
            stage: {
              links: {
                self: 'https://api.teamtailor.com/v1/job-applications/29305121/relationships/stage',
                related:
                  'https://api.teamtailor.com/v1/job-applications/29305121/stage',
              },
            },
            'reject-reason': {
              links: {
                self: 'https://api.teamtailor.com/v1/job-applications/29305121/relationships/reject-reason',
                related:
                  'https://api.teamtailor.com/v1/job-applications/29305121/reject-reason',
              },
            },
            'nps-responses': {
              links: {
                self: 'https://api.teamtailor.com/v1/job-applications/29305121/relationships/nps-responses',
                related:
                  'https://api.teamtailor.com/v1/job-applications/29305121/nps-responses',
              },
            },
          },
        },
        {
          id: '29305122',
          type: 'job-applications',
          links: {
            self: 'https://api.teamtailor.com/v1/job-applications/29305122',
          },
          attributes: {
            'cover-letter': null,
            'created-at': '2022-03-22T15:59:12.799+01:00',
            match: null,
            'referring-site': null,
            'referring-url': null,
            'rejected-at': null,
            'row-order': 0,
            sourced: false,
            'updated-at': '2022-03-22T15:59:12.799+01:00',
            'changed-stage-at': '2022-03-22T15:59:12.788+01:00',
          },
          relationships: {
            candidate: {
              links: {
                self: 'https://api.teamtailor.com/v1/job-applications/29305122/relationships/candidate',
                related:
                  'https://api.teamtailor.com/v1/job-applications/29305122/candidate',
              },
            },
            job: {
              links: {
                self: 'https://api.teamtailor.com/v1/job-applications/29305122/relationships/job',
                related:
                  'https://api.teamtailor.com/v1/job-applications/29305122/job',
              },
            },
            stage: {
              links: {
                self: 'https://api.teamtailor.com/v1/job-applications/29305122/relationships/stage',
                related:
                  'https://api.teamtailor.com/v1/job-applications/29305122/stage',
              },
            },
            'reject-reason': {
              links: {
                self: 'https://api.teamtailor.com/v1/job-applications/29305122/relationships/reject-reason',
                related:
                  'https://api.teamtailor.com/v1/job-applications/29305122/reject-reason',
              },
            },
            'nps-responses': {
              links: {
                self: 'https://api.teamtailor.com/v1/job-applications/29305122/relationships/nps-responses',
                related:
                  'https://api.teamtailor.com/v1/job-applications/29305122/nps-responses',
              },
            },
          },
        },
        {
          id: '29305123',
          type: 'job-applications',
          links: {
            self: 'https://api.teamtailor.com/v1/job-applications/29305123',
          },
          attributes: {
            'cover-letter': null,
            'created-at': '2022-03-22T15:59:12.847+01:00',
            match: null,
            'referring-site': null,
            'referring-url': null,
            'rejected-at': null,
            'row-order': 0,
            sourced: false,
            'updated-at': '2022-03-22T15:59:12.847+01:00',
            'changed-stage-at': '2022-03-22T15:59:12.834+01:00',
          },
          relationships: {
            candidate: {
              links: {
                self: 'https://api.teamtailor.com/v1/job-applications/29305123/relationships/candidate',
                related:
                  'https://api.teamtailor.com/v1/job-applications/29305123/candidate',
              },
            },
            job: {
              links: {
                self: 'https://api.teamtailor.com/v1/job-applications/29305123/relationships/job',
                related:
                  'https://api.teamtailor.com/v1/job-applications/29305123/job',
              },
            },
            stage: {
              links: {
                self: 'https://api.teamtailor.com/v1/job-applications/29305123/relationships/stage',
                related:
                  'https://api.teamtailor.com/v1/job-applications/29305123/stage',
              },
            },
            'reject-reason': {
              links: {
                self: 'https://api.teamtailor.com/v1/job-applications/29305123/relationships/reject-reason',
                related:
                  'https://api.teamtailor.com/v1/job-applications/29305123/reject-reason',
              },
            },
            'nps-responses': {
              links: {
                self: 'https://api.teamtailor.com/v1/job-applications/29305123/relationships/nps-responses',
                related:
                  'https://api.teamtailor.com/v1/job-applications/29305123/nps-responses',
              },
            },
          },
        },
        {
          id: '29305124',
          type: 'job-applications',
          links: {
            self: 'https://api.teamtailor.com/v1/job-applications/29305124',
          },
          attributes: {
            'cover-letter': null,
            'created-at': '2022-03-22T15:59:12.890+01:00',
            match: null,
            'referring-site': null,
            'referring-url': null,
            'rejected-at': null,
            'row-order': 0,
            sourced: false,
            'updated-at': '2024-10-10T12:28:10.150+02:00',
            'changed-stage-at': '2022-03-22T15:59:12.878+01:00',
          },
          relationships: {
            candidate: {
              links: {
                self: 'https://api.teamtailor.com/v1/job-applications/29305124/relationships/candidate',
                related:
                  'https://api.teamtailor.com/v1/job-applications/29305124/candidate',
              },
            },
            job: {
              links: {
                self: 'https://api.teamtailor.com/v1/job-applications/29305124/relationships/job',
                related:
                  'https://api.teamtailor.com/v1/job-applications/29305124/job',
              },
            },
            stage: {
              links: {
                self: 'https://api.teamtailor.com/v1/job-applications/29305124/relationships/stage',
                related:
                  'https://api.teamtailor.com/v1/job-applications/29305124/stage',
              },
            },
            'reject-reason': {
              links: {
                self: 'https://api.teamtailor.com/v1/job-applications/29305124/relationships/reject-reason',
                related:
                  'https://api.teamtailor.com/v1/job-applications/29305124/reject-reason',
              },
            },
            'nps-responses': {
              links: {
                self: 'https://api.teamtailor.com/v1/job-applications/29305124/relationships/nps-responses',
                related:
                  'https://api.teamtailor.com/v1/job-applications/29305124/nps-responses',
              },
            },
          },
        },
        {
          id: '29305125',
          type: 'job-applications',
          links: {
            self: 'https://api.teamtailor.com/v1/job-applications/29305125',
          },
          attributes: {
            'cover-letter': null,
            'created-at': '2022-03-22T15:59:12.934+01:00',
            match: null,
            'referring-site': null,
            'referring-url': null,
            'rejected-at': null,
            'row-order': 0,
            sourced: false,
            'updated-at': '2022-03-22T15:59:12.934+01:00',
            'changed-stage-at': '2022-03-22T15:59:12.921+01:00',
          },
          relationships: {
            candidate: {
              links: {
                self: 'https://api.teamtailor.com/v1/job-applications/29305125/relationships/candidate',
                related:
                  'https://api.teamtailor.com/v1/job-applications/29305125/candidate',
              },
            },
            job: {
              links: {
                self: 'https://api.teamtailor.com/v1/job-applications/29305125/relationships/job',
                related:
                  'https://api.teamtailor.com/v1/job-applications/29305125/job',
              },
            },
            stage: {
              links: {
                self: 'https://api.teamtailor.com/v1/job-applications/29305125/relationships/stage',
                related:
                  'https://api.teamtailor.com/v1/job-applications/29305125/stage',
              },
            },
            'reject-reason': {
              links: {
                self: 'https://api.teamtailor.com/v1/job-applications/29305125/relationships/reject-reason',
                related:
                  'https://api.teamtailor.com/v1/job-applications/29305125/reject-reason',
              },
            },
            'nps-responses': {
              links: {
                self: 'https://api.teamtailor.com/v1/job-applications/29305125/relationships/nps-responses',
                related:
                  'https://api.teamtailor.com/v1/job-applications/29305125/nps-responses',
              },
            },
          },
        },
        {
          id: '29305126',
          type: 'job-applications',
          links: {
            self: 'https://api.teamtailor.com/v1/job-applications/29305126',
          },
          attributes: {
            'cover-letter': null,
            'created-at': '2022-03-22T15:59:13.000+01:00',
            match: null,
            'referring-site': null,
            'referring-url': null,
            'rejected-at': null,
            'row-order': 0,
            sourced: false,
            'updated-at': '2024-10-10T12:28:28.334+02:00',
            'changed-stage-at': '2022-03-22T15:59:12.989+01:00',
          },
          relationships: {
            candidate: {
              links: {
                self: 'https://api.teamtailor.com/v1/job-applications/29305126/relationships/candidate',
                related:
                  'https://api.teamtailor.com/v1/job-applications/29305126/candidate',
              },
            },
            job: {
              links: {
                self: 'https://api.teamtailor.com/v1/job-applications/29305126/relationships/job',
                related:
                  'https://api.teamtailor.com/v1/job-applications/29305126/job',
              },
            },
            stage: {
              links: {
                self: 'https://api.teamtailor.com/v1/job-applications/29305126/relationships/stage',
                related:
                  'https://api.teamtailor.com/v1/job-applications/29305126/stage',
              },
            },
            'reject-reason': {
              links: {
                self: 'https://api.teamtailor.com/v1/job-applications/29305126/relationships/reject-reason',
                related:
                  'https://api.teamtailor.com/v1/job-applications/29305126/reject-reason',
              },
            },
            'nps-responses': {
              links: {
                self: 'https://api.teamtailor.com/v1/job-applications/29305126/relationships/nps-responses',
                related:
                  'https://api.teamtailor.com/v1/job-applications/29305126/nps-responses',
              },
            },
          },
        },
        {
          id: '29305127',
          type: 'job-applications',
          links: {
            self: 'https://api.teamtailor.com/v1/job-applications/29305127',
          },
          attributes: {
            'cover-letter': null,
            'created-at': '2022-03-22T15:59:13.038+01:00',
            match: null,
            'referring-site': null,
            'referring-url': null,
            'rejected-at': null,
            'row-order': 0,
            sourced: false,
            'updated-at': '2022-03-22T15:59:13.038+01:00',
            'changed-stage-at': '2022-03-22T15:59:13.027+01:00',
          },
          relationships: {
            candidate: {
              links: {
                self: 'https://api.teamtailor.com/v1/job-applications/29305127/relationships/candidate',
                related:
                  'https://api.teamtailor.com/v1/job-applications/29305127/candidate',
              },
            },
            job: {
              links: {
                self: 'https://api.teamtailor.com/v1/job-applications/29305127/relationships/job',
                related:
                  'https://api.teamtailor.com/v1/job-applications/29305127/job',
              },
            },
            stage: {
              links: {
                self: 'https://api.teamtailor.com/v1/job-applications/29305127/relationships/stage',
                related:
                  'https://api.teamtailor.com/v1/job-applications/29305127/stage',
              },
            },
            'reject-reason': {
              links: {
                self: 'https://api.teamtailor.com/v1/job-applications/29305127/relationships/reject-reason',
                related:
                  'https://api.teamtailor.com/v1/job-applications/29305127/reject-reason',
              },
            },
            'nps-responses': {
              links: {
                self: 'https://api.teamtailor.com/v1/job-applications/29305127/relationships/nps-responses',
                related:
                  'https://api.teamtailor.com/v1/job-applications/29305127/nps-responses',
              },
            },
          },
        },
        {
          id: '29305128',
          type: 'job-applications',
          links: {
            self: 'https://api.teamtailor.com/v1/job-applications/29305128',
          },
          attributes: {
            'cover-letter': null,
            'created-at': '2022-03-22T15:59:13.073+01:00',
            match: null,
            'referring-site': null,
            'referring-url': null,
            'rejected-at': null,
            'row-order': 0,
            sourced: false,
            'updated-at': '2022-03-22T15:59:13.073+01:00',
            'changed-stage-at': '2022-03-22T15:59:13.062+01:00',
          },
          relationships: {
            candidate: {
              links: {
                self: 'https://api.teamtailor.com/v1/job-applications/29305128/relationships/candidate',
                related:
                  'https://api.teamtailor.com/v1/job-applications/29305128/candidate',
              },
            },
            job: {
              links: {
                self: 'https://api.teamtailor.com/v1/job-applications/29305128/relationships/job',
                related:
                  'https://api.teamtailor.com/v1/job-applications/29305128/job',
              },
            },
            stage: {
              links: {
                self: 'https://api.teamtailor.com/v1/job-applications/29305128/relationships/stage',
                related:
                  'https://api.teamtailor.com/v1/job-applications/29305128/stage',
              },
            },
            'reject-reason': {
              links: {
                self: 'https://api.teamtailor.com/v1/job-applications/29305128/relationships/reject-reason',
                related:
                  'https://api.teamtailor.com/v1/job-applications/29305128/reject-reason',
              },
            },
            'nps-responses': {
              links: {
                self: 'https://api.teamtailor.com/v1/job-applications/29305128/relationships/nps-responses',
                related:
                  'https://api.teamtailor.com/v1/job-applications/29305128/nps-responses',
              },
            },
          },
        },
        {
          id: '29305129',
          type: 'job-applications',
          links: {
            self: 'https://api.teamtailor.com/v1/job-applications/29305129',
          },
          attributes: {
            'cover-letter': null,
            'created-at': '2022-03-22T15:59:13.114+01:00',
            match: null,
            'referring-site': null,
            'referring-url': null,
            'rejected-at': null,
            'row-order': 0,
            sourced: false,
            'updated-at': '2022-03-22T15:59:13.114+01:00',
            'changed-stage-at': '2022-03-22T15:59:13.104+01:00',
          },
          relationships: {
            candidate: {
              links: {
                self: 'https://api.teamtailor.com/v1/job-applications/29305129/relationships/candidate',
                related:
                  'https://api.teamtailor.com/v1/job-applications/29305129/candidate',
              },
            },
            job: {
              links: {
                self: 'https://api.teamtailor.com/v1/job-applications/29305129/relationships/job',
                related:
                  'https://api.teamtailor.com/v1/job-applications/29305129/job',
              },
            },
            stage: {
              links: {
                self: 'https://api.teamtailor.com/v1/job-applications/29305129/relationships/stage',
                related:
                  'https://api.teamtailor.com/v1/job-applications/29305129/stage',
              },
            },
            'reject-reason': {
              links: {
                self: 'https://api.teamtailor.com/v1/job-applications/29305129/relationships/reject-reason',
                related:
                  'https://api.teamtailor.com/v1/job-applications/29305129/reject-reason',
              },
            },
            'nps-responses': {
              links: {
                self: 'https://api.teamtailor.com/v1/job-applications/29305129/relationships/nps-responses',
                related:
                  'https://api.teamtailor.com/v1/job-applications/29305129/nps-responses',
              },
            },
          },
        },
      ],
      meta: {
        'record-count': 307,
        'page-count': 31,
      },
      links: {
        first:
          'https://api.teamtailor.com/v1/candidates?include=job-applications&page%5Bnumber%5D=1&page%5Bsize%5D=10',
        next: 'https://api.teamtailor.com/v1/candidates?include=job-applications&page%5Bnumber%5D=2&page%5Bsize%5D=10',
        last: 'https://api.teamtailor.com/v1/candidates?include=job-applications&page%5Bnumber%5D=31&page%5Bsize%5D=10',
      },
    };
    const { body } = await request(app.getHttpServer())
      .post('/csv/create')
      .send(data)
      .expect(HttpStatus.CREATED);

    await request(app.getHttpServer())
      .get(`/csv/download/${body.csvFileName}`)
      .expect(HttpStatus.OK);
  });
});
