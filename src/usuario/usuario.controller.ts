/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UsuaioRepository } from "./usuaio.repository";
import { criaUsuarioDto } from './dto/CriaUsuario.dto';
import { UsuarioEntity } from './usuario.entity'
import { v4 as uuid } from 'uuid'
import { ListaUsuarioDTO } from './dto/ListaUsuario.dto';
import { AtualizarUsuarioDto } from './dto/AtualizarUsuario.dto';
import { UsuarioService } from './usuario.services';

@Controller('/usuarios')
export class UsuarioController {

    /**private usuarioRepository = new UsuaioRepository();
     * Para trabalhar com injeção de dependencias, nao vou instanciara  dependencia
     * vou deixar o nest fazer isso atraves do construtor
     */

    constructor(
        private usuarioService: UsuarioService,
        private usuarioRepository: UsuaioRepository
        ) { } // a classe que sera insjetada no construtor precisa ser um providers no modulo e na anotação na propria classe

    @Post()
    async criarUsuario(@Body() dadosDoUsuario: criaUsuarioDto) {
        //return {status: 'usuario criado'};

      

       const usuarioCadastrado= await this.usuarioService.cadastro(dadosDoUsuario)

        return {
            // id: usuarioEntity.id,
            usuario: new ListaUsuarioDTO(usuarioCadastrado.id, usuarioCadastrado.nome),
            message: 'Usuário criado com sucesso'
        }
        // return dadosDoUsuario;
    }

    @Get()
    async listUsuarios() {
const usuarioLista= await this.usuarioService.listaUsuarios();
        /**
         * 
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
                */
                return usuarioLista;
    }


    @Put('/:id')
    async atualizarUsuario(@Param('id') id: string, @Body() novosDados: AtualizarUsuarioDto) {
        const usuarioAtualizado = await this.usuarioRepository.atualiza(id, novosDados);

        return {
            usuario: usuarioAtualizado,
            mensagem: 'Usuário atualizado com sucesso.'
        }
    }

    @Delete('/:id')
    async removeUsuario(@Param('id') id: string) {
        const usuarioRemovido= await this.usuarioRepository.remove(id);
        return{
            usuario: usuarioRemovido,
            mensagem: 'Usuário removido com sucesso'
        }
    }

    @Get('/ola')
    async teste_coneccao() {
        return 'ola usuarios'
    }
}
