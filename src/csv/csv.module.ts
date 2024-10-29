import { Module } from '@nestjs/common';
import { CsvService } from './services/csv.service';
import CsvProcessor from './processors/csv.processor';

@Module({
  providers: [CsvService, CsvProcessor],
})
export class CsvModule {}
