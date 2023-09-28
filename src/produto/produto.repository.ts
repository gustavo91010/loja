import { error } from "console";
import { ProdutoEntity } from "./produto.entity";
import { ProdutoDto } from "./dto/produtoDto";
import { Injectable } from "@nestjs/common";
import { ProdutoModel } from "./produto.module";

@Injectable()
export class ProdutoRepository {

    private produtos: ProdutoEntity[] = []

    salvar(produto: ProdutoEntity) {

        this.produtos.push(produto)

    }

    /**
     * 
     * salvar(produto: ProdutoEntity): ProdutoEntity {
        this.produtos.push(produto);
        return produto;
    }
    
     */
    buscarTodos() {
        return this.produtos;
    }
    buscarPorId(id: string) {
        console.log("hum...")
        const produtoSolicitado = this.produtos.find(
            produto => produto.id === id
        )
        if (!produtoSolicitado) {
            throw new Error('Produto não cadastrado')
        }
        console.log("produtoSolicitado: " + produtoSolicitado)
        return produtoSolicitado;

    }
    buscarPorMarca(marca: string) {
        const produtoSolicitado = []
        for (let produto of this.produtos) {
            if (produto.marca === marca) {
                produtoSolicitado.push(produto)
            }
        }
        return produtoSolicitado;
    }
    buscarPorTipo(tipo: string) {
        const produtoSolicitado = []
        for (let produto of this.produtos) {
            if (produto.tipo === tipo) {
                produtoSolicitado.push(produto)
            }
        }
        return produtoSolicitado;
    }

    remover(id: string) {
        try {
            console.log("id: " + id)
            console.log("Produtos antes: " + this.produtos.length)
            const produto = this.buscarPorId(id);
            this.produtos = this.produtos.filter(produto => produto.id !== id);
            console.log("Produtos depois: " + this.produtos.length)

            return `O produto ${produto.id} foi removido`;
        } catch (error) {
            throw new Error(`Não foi possível remover o produto com o ID ${id}`);
        }
    }
    atualizar(produtoDto: Partial<ProdutoDto>, id: string) {
        console.log("entrou no repository com "+ id+" "+produtoDto)

        const product =  this.buscarPorId(id);
        Object.entries(produtoDto).forEach(([chave, valor]) => {
            if (chave === 'id' || chave === 'aualizado_em') {
                return;
            }
            product[chave] = valor;

        }
        )
        //product.aualizado_em = new Date();

        /**
        const p= new ProdutoEntity();
        p.marca= oldProduct.marca
        p.preco= oldProduct.preco
        p.tipo= oldProduct.tipo
        p.aualizado_em= new Date();
        p.id= oldProduct.id;
        
 
         *  Object.entries(dadosDeAtualizacao).forEach(([chave, valor]) => {
             if (chave === 'id') {
                 return;
             }
             usuario[chave] = valor;
         })
         */
        return product;

    }


    /**
     *  
   



    async atualizar(){}

 
     */

}