import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
async function bootstrap() {
  const app = await NestFactory.create(AppModule,
    // {
    //   logger: ['error', 'warn']
    // })
  );
  app.setGlobalPrefix('api')

  const options = new DocumentBuilder()
    .setTitle(' Appoinment API')
    .setDescription('Appoinment Api')
    .setVersion('5.1.0')
    .addBearerAuth()
    .build()

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
