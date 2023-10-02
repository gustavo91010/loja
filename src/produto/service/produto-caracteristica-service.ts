import { Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { ProdutoCaracteristicaEntity } from "../entity/produto-caracteristica.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { CaracteristicaProdutoDTO } from "../dto/produto-caracteristicas-dto";
import { ProdutoEntity } from "../entity/produto.entity";
import { ProdutoCaracteristicaRepository } from "../ropository/produto-caractersticas-reposirtory";
import { UUID } from "typeorm/driver/mongodb/bson.typings";
import { randomUUID } from "crypto";

@Injectable()
export class ProdutoCaracteristicaService {
   
    constructor(private readonly produtoCaracteristicaRepository: ProdutoCaracteristicaRepository){}

    async save(caracteristicaProdutoDTO: CaracteristicaProdutoDTO, produto: ProdutoEntity) {
        
        const produtoCaracteristicaEntity = new ProdutoCaracteristicaEntity();
        produtoCaracteristicaEntity.descricao = caracteristicaProdutoDTO.descricao
        produtoCaracteristicaEntity.nome = caracteristicaProdutoDTO.nome
        produtoCaracteristicaEntity.produto = produto
        produtoCaracteristicaEntity.id = randomUUID();

        const caracteristicaDoProduto = this.produtoCaracteristicaRepository.salvar(produtoCaracteristicaEntity)
        return caracteristicaDoProduto
    }

}