import { Module } from "@nestjs/common";
import { ProdtuoController } from "./produto.comtroller";
import { ProdutoRepository } from "./produto.repository";
import { ProdutoService } from "./produto.service";



@Module({
   controllers:[ProdtuoController],
   providers:[ProdutoService, ProdutoRepository] ,
   
})
export class ProdutoModel{}