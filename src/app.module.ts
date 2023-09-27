import { Module } from '@nestjs/common';
import { UsuarioModule } from './usuario/usuario.module';
import { ProdutoModel } from './produto/produto.module';


@Module({
  imports: [UsuarioModule, ProdutoModel],
  // controllers: [],
  // providers: [],
})
export class AppModule {}
