import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { ProdutoEntity } from './produto.entity';

@Entity({ name: 'prodto_imagens'})
export class ProdutoImagemEntity {

   

    @PrimaryGeneratedColumn('uuid')
    id: string
    @Column({ name: 'url', length: 100, nullable: false })
    url: string;

    @Column({ name: 'descricao', length: 100, nullable: false })
    descricao: string;

    @ManyToOne(
        ()=> ProdutoEntity,
        (produtoEntity) => produtoEntity.imagem)
    produto: ProdutoEntity
}