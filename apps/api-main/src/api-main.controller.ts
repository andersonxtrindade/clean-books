import { Controller, Get } from '@nestjs/common';
import { ApiMainService } from './api-main.service';

@Controller()
export class ApiMainController {
  constructor(private readonly apiMainService: ApiMainService) {}

  @Get()
  getHello(): string {
    return this.apiMainService.getHello();
  }
}
