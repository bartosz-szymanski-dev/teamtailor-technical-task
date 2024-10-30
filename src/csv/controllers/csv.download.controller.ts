import {
  Body,
  Controller,
  HttpStatus,
  Logger,
  Post,
  Res,
} from '@nestjs/common';
import { Response } from 'express';
import { DownloadDto } from '../dtos/download.dto';
import * as path from 'node:path';
import * as os from 'node:os';
import * as fs from 'node:fs/promises';

@Controller('/csv')
export default class CsvDownloadController {
  private logger: Logger = new Logger(CsvDownloadController.name);

  @Post('/download')
  async download(
    @Res() response: Response,
    @Body() downloadDto: DownloadDto,
  ): Promise<void> {
    try {
      const { csvFileNameUuid } = downloadDto;
      const csvFileName = `${csvFileNameUuid}.csv`;
      const tmpDirPath = path.join(os.tmpdir(), csvFileName);
      await fs.access(tmpDirPath);
      response.status(HttpStatus.OK).download(tmpDirPath, csvFileName);
    } catch (error) {
      response.status(HttpStatus.NOT_FOUND).json({ message: 'File not found' });
      this.logger.error(error.message, error.stack);
    }
  }
}
