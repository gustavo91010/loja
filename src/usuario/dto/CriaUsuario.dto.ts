import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator";
import { EmailEhUnicoAqui } from "../validacao/email-eh-unico.validador";

export class criaUsuarioDto {
    // @IsString()
    @IsNotEmpty({ message: 'Não pode ser vazio' })
    nome: string;

    @IsEmail(undefined, { message: 'O email é invalido' }) // O primeiro campo é para customizar a validação do email
    @EmailEhUnicoAqui({ message: 'Já existe um usuário com esse email' })
    email: string;

    @MinLength(6, { message: 'A senha precisa ter no minimo 6 caracters' })
    senha: string;
}