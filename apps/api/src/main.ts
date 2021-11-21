/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app/app.module';

async function bootstrap() {
  Logger.log('C:\\Endava\\Projects\\nx-angular-nest\\nx-angular-nest\\dist\\libs')
  Logger.log(__dirname + '../../**/*.main.js')
  const app = await NestFactory.create(AppModule, {cors: true});
  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);
  const port = process.env.PORT || 4000;
  await app.listen(port, () => {
    Logger.log('Listening at http://localhost:' + port + '/' + globalPrefix);
  });

  /*const app = await NestFactory.create(AppModule, {cors: true});
  const microservice = app.connectMicroservice({
    transport: Transport.TCP,
    options: {
      host: '127.0.0.1',
      port,
    },
  });

  await app.startAllMicroservicesAsync();
  await app.listen(port);
  Logger.log(`Microservice Sells and Bids is listening on http://localhost:${port}`, 'Bootstrap')*/
}

bootstrap();
