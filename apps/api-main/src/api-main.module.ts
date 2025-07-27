import { Module } from '@nestjs/common';
import { ApiMainController } from './api-main.controller';
import { ApiMainService } from './api-main.service';

@Module({
  imports: [],
  controllers: [ApiMainController],
  providers: [ApiMainService],
})
export class ApiMainModule {}
