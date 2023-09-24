/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { UsuaioRepository } from "./UsuaioRepository";
import { criaUsuarioDto } from './dto/CriaUsuario.dto';
import { UsuarioEntity } from './usuario.entity'
import { v4 as uuid } from 'uuid'
import { ListaUsuarioDTO } from './dto/ListaUsuario.dto';
import { AtualizarUsuarioDto } from './dto/AtualizarUsuario.dto';

@Controller('/usuarios')
export class UsuarioController {

    /**private usuarioRepository = new UsuaioRepository();
     * Para trabalhar com injeção de dependencias, nao vou instanciara  dependencia
     * vou deixar o nest fazer isso atraves do construtor
     */

    constructor(private usuarioRepository: UsuaioRepository) { } // a classe que sera insjetada no construtor precisa ser um providers no modulo e na anotação na propria classe

    @Post()
    async criarUsuario(@Body() dadosDoUsuario: criaUsuarioDto) {
        //return {status: 'usuario criado'};

        const usuarioEntity = new UsuarioEntity();
        usuarioEntity.email = dadosDoUsuario.email;
        usuarioEntity.nome = dadosDoUsuario.nome;
        usuarioEntity.senha = dadosDoUsuario.senha;
        usuarioEntity.id = uuid();

        this.usuarioRepository.salvar(usuarioEntity)

        return {
            // id: usuarioEntity.id,
            usuario: new ListaUsuarioDTO(usuarioEntity.id, usuarioEntity.nome),
            message: 'Usuário criado com sucesso'
        }
        // return dadosDoUsuario;
    }

    @Get()
    async listUsuarios() {

        const usuariosSalvos = await this.usuarioRepository.listar()

        // map, metodo de transformação, onde as coisas acontecem
        const usuarioLista = usuariosSalvos.map(
            // ele mete, tipo, um foreatc
            // para cada usuario da lista, eu criei a variavel usuario e criei uma listaUsuario Dto passando os parametros que o constutor espera
            usuario => new ListaUsuarioDTO(
                usuario.id,
                usuario.nome
            )
        )
        return usuarioLista;
        // return this.usuarioRepository.listar();
    }


    @Put('/:id')
    async atualizarUsuario(@Param('id') id: string, @Body() novosDados: AtualizarUsuarioDto) {
        const usuarioAtualizado= await this.usuarioRepository.atualiza(id, novosDados);

        return {
            usuario: usuarioAtualizado,
            mensagem: 'Usuário atualizado com sucesso.'
        }
    }
    @Get('/ola')
    async teste_coneccao() {
        return 'ta ok'
    }
}
