import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Handler, Context } from 'aws-lambda';

let cachedServer;

export const handler: Handler = async (event: any, context: Context) => {
  cachedServer = cachedServer ?? (await bootstrap());
  return cachedServer(event, context);
};


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();


