import { IsNotEmpty, IsOptional, isNumber } from "class-validator"

export class ProdutoDto{


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


}