import { Injectable } from '@nestjs/common';
import * as fsPromises from 'node:fs/promises';
import * as fs from 'node:fs';
import * as os from 'node:os';
import * as path from 'node:path';
import { AsyncParser } from '@json2csv/node';
import { ProcessorOutputInterface } from '../interfaces/processor.output.interface';

@Injectable()
export class CsvService {
  public async convertToCsv(
    processorOutputs: ProcessorOutputInterface[],
  ): Promise<string> {
    const temporaryDirectory = await fsPromises.realpath(os.tmpdir());
    const filename = `candidate-list-export-${this.getDate()}.csv`;
    const filepath = path.join(temporaryDirectory, filename);
    const file = fs.createWriteStream(filepath);
    const parser = new AsyncParser();
    const csv = await parser.parse(processorOutputs).promise();
    file.write(csv);

    return filepath;
  }

  private getDate(): string {
    return new Date()
      .toJSON()
      .replace(/T/, '')
      .replace(/\.\w*/, '')
      .replace(/([:\-])/g, '');
  }
}
