import { NestFactory } from '@nestjs/core';
import { ApiMainModule } from './api-main.module';

async function bootstrap() {
  const app = await NestFactory.create(ApiMainModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
