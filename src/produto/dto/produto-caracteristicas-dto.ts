import { IsNotEmpty, IsString } from "class-validator";
import { ProdutoEntity } from "../entity/produto.entity";

export class CaracteristicaProdutoDTO {

    id: string= "";

    @IsString()
    @IsNotEmpty({ message: 'Nome da caracteristica não pode esta vazio' })
    nome: string;

    @IsString()
    @IsNotEmpty({ message: 'Descricao não pode esta vazio' })
    descricao: string;

    proruto: ProdutoEntity

}