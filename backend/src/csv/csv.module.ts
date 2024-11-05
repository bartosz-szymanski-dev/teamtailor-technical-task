import { Module } from '@nestjs/common';
import { CsvService } from './services/csv.service';
import CsvProcessor from './processors/csv.processor';
import CsvCreateController from './controllers/csv.create.controller';
import CsvDownloadController from './controllers/csv.download.controller';

@Module({
  providers: [CsvService, CsvProcessor],
  controllers: [CsvCreateController, CsvDownloadController],
})
export class CsvModule {}
