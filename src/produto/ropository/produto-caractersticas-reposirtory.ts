import { Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { ProdutoCaracteristicaEntity } from "../entity/produto-caracteristica.entity";
import { InjectRepository } from "@nestjs/typeorm";


@Injectable()
export class ProdutoCaracteristicaRepository{

    constructor(
       // @InjectRepository(ProdutoCaracteristicaEntity)
        private readonly produtoCaracteristicaRepository: Repository<ProdutoCaracteristicaEntity>
        /**
        - É como se fosse o repositorio da entidade que esta sendo injetana na anotação acima
        - O Repository do typeorm tambem tem metodos padrões semelhante ao repository do spring
        */
    ) { }

    public async salvar(produtoCaracteristicaEntity: ProdutoCaracteristicaEntity){
        await this.produtoCaracteristicaRepository.save(produtoCaracteristicaEntity)

    }

}