import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
    CreateDateColumn,
    DeleteDateColumn, 
    OneToMany}
    from 'typeorm'
import { ProdutoCaracteristicaEntity } from './produto-caracteristica.entity';
import { ProdutoImagemEntity } from './produto-imagem.entity';

@Entity({name: 'produtos'})
export class ProdutoEntity{

    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({name: 'usuario_id', length: 50, nullable: false})
    usuario_id: string;

    @Column({name: 'tipo', length: 100, nullable: false})
    tipo: string

    @Column({name: 'marca', length: 50, nullable: false})
    marca: string

    @Column({name: 'valor', nullable: true})
    preco: number

    @UpdateDateColumn({name: 'atualizado_em'})
    atualizado_em: Date

    @OneToMany(
        ()=> ProdutoCaracteristicaEntity, // o tipo que esse atributo tem relação
        (produtoCaracteristicaEntity)=> produtoCaracteristicaEntity.produto)// o atributo que se relaciona com meu
    caractetisticas: ProdutoCaracteristicaEntity[]; // um produto para varias ([array de caracteristicas]) caracteristicas


    @OneToMany(
        ()=> ProdutoImagemEntity,
        (produtoImagemEntity)=> produtoImagemEntity.produto)
    imagem: ProdutoImagemEntity[]

    @CreateDateColumn({name: 'criado_em'})
    criado_em: Date

    @DeleteDateColumn({name: 'deletado_em'})
    deletado_em: Date
}