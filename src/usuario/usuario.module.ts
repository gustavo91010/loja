import { Module } from "@nestjs/common";
import { UsuarioController } from "./usuario.controller";
import { UsuaioRepository } from "./UsuaioRepository";
import { EmailEhUnicoValidador } from "./validacao/email-eh-unico.validador";


@Module({
    controllers: [UsuarioController],
    providers: [UsuaioRepository, EmailEhUnicoValidador] // a classe que sera itratada como providers precisa esta com a anotação / decoration providers
})
export class UsuarioModule { }