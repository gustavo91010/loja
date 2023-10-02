import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { ProdutoEntity } from './produto.entity';

@Entity({ name: 'produto_caracteristicas' })
export class ProdutoCaracteristicaEntity {

    

    @PrimaryGeneratedColumn('uuid')
    id: string
    @Column({ name: 'nome', length: 100, nullable: false })
    nome: string;

    @Column({ name: 'descricao', length: 100, nullable: false })
    descricao: string;

    @ManyToOne(
        () => ProdutoEntity, // o tipo que esse atributo tem relação
        (produto) => produto.caractetisticas)// o atributo com o qual meu tipo  se relaciona 
    produto: ProdutoEntity; // many to one, muitas caracteristicas para um produto
}