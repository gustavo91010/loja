import { Module } from "@nestjs/common";
import { UsuarioController } from "./usuario.controller";
import { UsuaioRepository } from "./usuaio.repository";
import { EmailEhUnicoValidador } from "./validacao/email-eh-unico.validador";
import { UsuarioService } from "./usuario.services";
import { UsuarioEntity } from "./usuario.entity";
import { TypeOrmModule } from "@nestjs/typeorm";


@Module({
    imports:[TypeOrmModule.forFeature([UsuarioEntity])],
    controllers: [UsuarioController],
    providers: [UsuarioService,UsuaioRepository, EmailEhUnicoValidador] // a classe que sera ijetatada como providers precisa esta com a anotação / decoration providers
})
export class UsuarioModule { }