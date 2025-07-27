import { NestFactory } from '@nestjs/core';
import { ApiMainModule } from './api-main.module';
import { Logger } from 'nestjs-pino';

async function bootstrap() {
  const app = await NestFactory.create(ApiMainModule, { bufferLogs: true });
  app.useLogger(app.get(Logger));
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
