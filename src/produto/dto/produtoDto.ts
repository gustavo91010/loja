import { ArrayMinSize, IsArray, IsNotEmpty, IsOptional, IsString, ValidateNested, isNumber } from "class-validator"
import { ProdutoEntity } from "../entity/produto.entity";
import { Type } from "class-transformer";
import { ImagemProdutoDTO } from "./produto-imagem-dto";
import { CaracteristicaProdutoDTO } from "./produto-caracteristicas-dto";





export class ProdutoDto {


    @IsNotEmpty()
    @IsOptional() // mesmo nao podendo ser vaio, a inserção desse campo é opcional
    tipo: string

    @IsNotEmpty()
    @IsOptional() // mesmo nao podendo ser vaio, a inserção desse campo é opcional
    marca: string

    // @IsNumber()
    @IsNotEmpty()
    @IsOptional() // mesmo nao podendo ser vaio, a inserção desse campo é opcional
    preco: number

    //imagem: ImagemProdutoDTO
    @ValidateNested()
    @IsArray()
    @ArrayMinSize(1)
    @Type(() => ImagemProdutoDTO)
    imagens: ImagemProdutoDTO[];
    

    @ValidateNested()
    @IsArray()
    @ArrayMinSize(3)
    @Type(()=> CaracteristicaProdutoDTO)
    caracteristicas: CaracteristicaProdutoDTO[];


}