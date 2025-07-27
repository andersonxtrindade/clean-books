import { Module } from '@nestjs/common';
import { ApiMainController } from './api-main.controller';
import { ApiMainService } from './api-main.service';
import { LoggerModule } from 'nestjs-pino';

@Module({
  imports: [
    LoggerModule.forRoot({
      pinoHttp: {
        transport:
          process.env.NODE_ENV !== 'production'
            ? {
              target: 'pino-pretty',
              options: {
                singleLine: true,
              }
            }
            : undefined,
      }
    })
  ],
  controllers: [ApiMainController],
  providers: [ApiMainService],
})
export class ApiMainModule {}
