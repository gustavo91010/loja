/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsuaioRepository } from "./UsuaioRepository";
import { criaUsuarioDto } from './dto/criaUsuario.dto';

@Controller('/usuarios')
export class UsuarioController {

    /**private usuarioRepository = new UsuaioRepository();
     * Para trabalhar com injeção de dependencias, nao vou instanciara  dependencia
     * vou deixar o nest fazer isso atraves do construtor
     */

    constructor(private usuarioRepository: UsuaioRepository){} // a classe que sera insjetada no construtor precisa ser um providers no modulo e na anotação na propria classe

    @Post()
    async criarUsuario(@Body() dadosDoUsuario: criaUsuarioDto) {
        //return {status: 'usuario criado'};
       
        this.usuarioRepository.salvar(dadosDoUsuario)
        return dadosDoUsuario;
    }
    
    @Get()
    async listUsuarios() { 
        return this.usuarioRepository.listar();
    }
    


    @Get('/ola')
    async teste_coneccao() {
        return 'ta ok'
    }
}
