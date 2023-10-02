import { IsString, IsNotEmpty } from "class-validator";
import { ProdutoEntity } from "../entity/produto.entity";

export class ImagemProdutoDTO {

    id: string;
    @IsString()
    @IsNotEmpty({ message: 'URL não pode esta vazio' })
    url: string;

    @IsString()
    @IsNotEmpty({ message: 'Descricao não pode esta vazio' })
    descricao: string;

    produto: ProdutoEntity
}