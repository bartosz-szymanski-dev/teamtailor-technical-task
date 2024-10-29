import { Module } from '@nestjs/common';
import { CsvService } from './services/csv.service';
import CsvProcessor from './processors/csv.processor';
import CsvController from './controllers/csv.controller';

@Module({
  providers: [CsvService, CsvProcessor],
  controllers: [CsvController],
})
export class CsvModule {}
