import { Module } from "@nestjs/common";
import { ProdtuoController } from "./Produto.comtroller";
import { ProdutoRepository } from "./ProdutoRepository";
import { ProdutoService } from "./Produto.service";



@Module({
   controllers:[ProdtuoController],
   providers:[ProdutoService, ProdutoRepository] ,
   
})
export class ProdutoModel{}