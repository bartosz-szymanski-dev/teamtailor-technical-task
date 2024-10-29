import { Module } from '@nestjs/common';
import { CsvService } from './services/csv.service';

@Module({
  providers: [CsvService],
})
export class CsvModule {}
