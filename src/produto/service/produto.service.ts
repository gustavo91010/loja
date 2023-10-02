import { Inject, Injectable } from "@nestjs/common";
import { ProdutoEntity } from "../entity/produto.entity";
import { ProdutoRepository } from "../ropository/produto.repository";
import { ProdutoDto } from "../dto/produtoDto";
import { v4 as uuid } from 'uuid'
import { get } from "http";
import { ProdutoCaracteristicaEntity } from "../entity/produto-caracteristica.entity";
//import { ProdutoImagemEntity } from "../produto-imagem.entity";

@Injectable()
export class ProdutoService {
    constructor(private produtoRepository: ProdutoRepository) { }


    async cadastrar(produtoDto: ProdutoDto) {
        if (!produtoDto.marca || !produtoDto.tipo || !produtoDto.preco) {
            throw new Error("Marca, tipo e preço são campos obrigatórios.");
        }
        const produtoEntity = new ProdutoEntity();
        produtoEntity.id = uuid();
        produtoEntity.marca = produtoDto.marca
        produtoEntity.tipo = produtoDto.tipo
        produtoEntity.preco = produtoDto.preco
        //produtoEntity.caractetisticas= new ProdutoCaracteristicaEntity(produtoDto.caracteristicas)
        //produtoEntity.imagem= produtoDto.imagens.map(image=> new ProdutoImagemEntity(image));
        produtoEntity.imagem= produtoDto.imagens;


        //produtoEntity.caractetisticas.push[new ProdutoCaracteristicaEntity(dto)]
        //produtoEntity.caractetisticas.push(new ProdutoCaracteristicaEntity(produtoDto.caracteristicas));

        // Para adicionar todas as caracteristicas que eu receber
        produtoEntity.caractetisticas = produtoDto.caracteristicas.map(dto => new ProdutoCaracteristicaEntity());


        //corrigindo campo de image 5min
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