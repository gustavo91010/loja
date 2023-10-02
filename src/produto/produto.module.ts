import { Module } from "@nestjs/common";
import { ProdtuoController } from "./controller/produto.comtroller";
import { ProdutoRepository } from "./ropository/produto.repository";
import { ProdutoService } from "./service/produto.service";



@Module({
   controllers:[ProdtuoController],
   providers:[ProdutoService, ProdutoRepository] ,
   
})
export class ProdutoModel{}