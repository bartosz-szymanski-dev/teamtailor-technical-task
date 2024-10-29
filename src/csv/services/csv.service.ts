import { Injectable } from '@nestjs/common';
import { CandidateResponseInterface } from '../../candidate/interfaces/candidate.response.interface';
import CsvProcessor from '../processors/csv.processor';
import * as fsPromises from 'node:fs/promises';
import * as fs from 'node:fs';
import * as os from 'node:os';
import { v4 as uuidV4 } from 'uuid';
import * as path from 'node:path';
import { AsyncParser } from '@json2csv/node';

@Injectable()
export class CsvService {
  constructor(private readonly csvProcessor: CsvProcessor) {}

  public async convertToCsv(
    candidateResponse: CandidateResponseInterface,
  ): Promise<string> {
    const temporaryDirectory = await fsPromises.realpath(os.tmpdir());
    const uuid = uuidV4();
    const filepath = path.join(temporaryDirectory, `${uuid}.csv`);
    const file = fs.createWriteStream(filepath);
    const parser = new AsyncParser();
    const csv = await parser
      .parse(this.csvProcessor.process(candidateResponse))
      .promise();
    file.write(csv);

    return uuid;
  }
}
