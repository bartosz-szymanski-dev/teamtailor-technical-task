import { Test, TestingModule } from '@nestjs/testing';
import { DownloadDto } from '../dtos/download.dto';
import * as path from 'node:path';
import * as fs from 'node:fs/promises';
import { Response } from 'express';
import CsvDownloadController from './csv.download.controller';
import * as os from 'node:os';

jest.mock('node:fs/promises');
jest.mock('node:os');

describe('CsvDownloadController', () => {
  let controller: CsvDownloadController;
  let mockResponse: Partial<Response>;

  beforeEach(async () => {
    mockResponse = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
      download: jest.fn(),
    };

    const module: TestingModule = await Test.createTestingModule({
      controllers: [CsvDownloadController],
    }).compile();

    controller = module.get<CsvDownloadController>(CsvDownloadController);
  });

  it('should download the file if it exists', async () => {
    const downloadDto = new DownloadDto();
    downloadDto.csvFileNameUuid = 'test-uuid';
    const csvFileName = `${downloadDto.csvFileNameUuid}.csv`;
    const tmpDirPath = path.join('/tmp', csvFileName);

    jest.spyOn(os, 'tmpdir').mockReturnValueOnce('/tmp');
    jest.spyOn(fs, 'access').mockResolvedValueOnce();

    await controller.download(mockResponse as Response, downloadDto);

    expect(fs.access).toHaveBeenCalledWith(tmpDirPath);
    expect(mockResponse.status).toHaveBeenCalledWith(200);
    expect(mockResponse.download).toHaveBeenCalledWith(tmpDirPath, csvFileName);
  });

  it('should return 404 and error message if file does not exist', async () => {
    const downloadDto = new DownloadDto();
    downloadDto.csvFileNameUuid = 'nonexistent-uuid';

    jest.spyOn(fs, 'access').mockRejectedValueOnce(new Error('File not found'));
    jest.spyOn(os, 'tmpdir').mockReturnValueOnce('/tmp');

    await controller.download(mockResponse as Response, downloadDto);

    expect(fs.access).toHaveBeenCalled();
    expect(mockResponse.status).toHaveBeenCalledWith(404);
    expect(mockResponse.json).toHaveBeenCalledWith({
      message: 'File not found',
    });
  });
});
