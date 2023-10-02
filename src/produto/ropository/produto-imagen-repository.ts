import { Repository } from "typeorm";
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ImagemProdutoDTO } from "../dto/produto-imagem-dto";
import { ProdutoImagemEntity } from "../entity/produto-imagem.entity";

@Injectable()
export class ImagemProdutoRepository{
    constructor(

       
        private readonly imagemProdutoRepository: Repository<ProdutoImagemEntity>
    ){}

    public async salvar(produtoImagemEntity: ProdutoImagemEntity){
       this.imagemProdutoRepository.save(produtoImagemEntity)
    }

}