import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { useContainer } from 'class-validator'; // para o nosso decorate funcionar com a injeção de dependencia

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true, // ValidationPipe irá automaticamente converter (transformar) os tipos dos dados de entrada para os tipos especificados em seu DTO (Data Transfer Object) durante a validação. 
      whitelist: true, //quando for usar a validação do pipe ele vai ignorar os campos que nao estiverem no Dto,
      forbidNonWhitelisted: true // ele vai lancar um erro se for algum campo que nao esteja no dto
    })
  );

  useContainer(app.select(AppModule), {fallbackOnErrors: true}); // configurar para usar o container de injeção de dependençîa padrão do nest, se der errado usa o teu mesmo
   await app.listen(3000);
}
bootstrap();
