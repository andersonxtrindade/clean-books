import { Injectable } from '@nestjs/common';

@Injectable()
export class ApiMainService {
  getHello(): string {
    return 'Hello World!';
  }
}
