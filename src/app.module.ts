import { Module } from '@nestjs/common';
import { UsuarioModule } from './usuario/usuario.module';
import { ProdutoModel } from './produto/produto.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostgresConfigService } from './config/postgres.config.service';
import { ConfigModule } from '@nestjs/config'



@Module({
  imports: [
    UsuarioModule,
     ProdutoModel,
     ConfigModule.forRoot({
      isGlobal: true
     }),
     TypeOrmModule.forRootAsync({
      useClass: PostgresConfigService,
      inject:[PostgresConfigService]
     })
    ],
  // controllers: [],
  // providers: [],
})
export class AppModule {}
