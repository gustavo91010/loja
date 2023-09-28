import { Inject, Injectable } from "@nestjs/common";
import { ProdutoEntity } from "./produto.entity";
import { ProdutoRepository } from "./produto.repository";
import { ProdutoDto } from "./dto/produtoDto";
import { v4 as uuid } from 'uuid'
import { get } from "http";

@Injectable()
export class ProdutoService {
    constructor(private produtoRepository: ProdutoRepository) { }


    async cadastrar(produtoDto: ProdutoDto) {

        const produtoEntity = new ProdutoEntity();
        produtoEntity.id = uuid();
        produtoEntity.marca = produtoDto.marca
        produtoEntity.tipo = produtoDto.tipo
        produtoEntity.preco = produtoDto.preco
        // produtoEntity.aualizado_em = new Date();

        /**
         for (const key in produtoEntity) {
             if (produtoEntity.hasOwnProperty(key)) {
                 console.log(`${key}: ${produtoEntity[key]}`);
                }
            }
            */
        await this.produtoRepository.salvar(produtoEntity);
       return {
        produto: produtoEntity,
        message: "produto cadastrad com sucesso"
       }
    
    }

   
    async buscarPorId(id: string) {
        const produto = await this.produtoRepository.buscarPorId(id);
        return produto;
    }

    async buscarPorTiTipo(tipo: string) {
        const produto =await this.produtoRepository.buscarPorTipo(tipo);
        return produto;
    }

    async buscarPorMarca(marca: string) {
        const produto =await this.produtoRepository.buscarPorMarca(marca);
        return produto;
    }
    async buscarTodos() { 
      const produtos= await this.produtoRepository.buscarTodos();
    
        return produtos;
    }

    async atualizar(produtoDto: ProdutoDto, id: string) { 
        console.log("entrou no service com "+ id+" "+produtoDto)

        return await this.produtoRepository.atualizar(produtoDto, id)
    }

    async remover(id: string) {
       return await this.produtoRepository.remover(id);
     }





}