import { IsEmail, IsNotEmpty, IsOptional, IsString, MinLength } from "class-validator";
import { EmailEhUnicoAqui } from "../validacao/email-eh-unico.validador";

export class AtualizarUsuarioDto {
    // @IsString()
    @IsNotEmpty({ message: 'Não pode ser vazio' })
    @IsOptional() // mesmo nao podendo ser vaio, a inserção desse campo é opcional
    nome: string;

    @IsEmail(undefined, { message: 'O email é invalido' }) // O primeiro campo é para customizar a validação do email
    @EmailEhUnicoAqui({ message: 'Já existe um usuário com esse email' })
    @IsOptional() // mesmo nao podendo ser vaio, a inserção desse campo é opcional
    email: string;

    @MinLength(6, { message: 'A senha precisa ter no minimo 6 caracters' })
    @IsOptional() // mesmo nao podendo ser vaio, a inserção desse campo é opcional
    senha: string;
}