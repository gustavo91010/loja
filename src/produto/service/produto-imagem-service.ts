import { Injectable } from "@nestjs/common";
import { ImagemProdutoRepository } from "../ropository/produto-imagen-repository";
import { ProdutoImagemEntity } from "../entity/produto-imagem.entity";
import { ImagemProdutoDTO } from "../dto/produto-imagem-dto";

@Injectable()
export class ProdutoImagemService{

    constructor(private readonly imagemProdutoRepository: ImagemProdutoRepository){}

    public async salvarImagem(produtoImagemDto: ImagemProdutoDTO){
        const produtoImagemEntity= new ProdutoImagemEntity()
    }
}