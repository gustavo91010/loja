import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ListaUsuarioDTO } from "./dto/ListaUsuario.dto";
import { UsuarioEntity } from "./usuario.entity";
import { Repository } from "typeorm";
import { criaUsuarioDto } from "./dto/CriaUsuario.dto";
import { UsuaioRepository } from "./usuaio.repository";

@Injectable() // lembrando que toda classe com anotação injectable tem que esta no modulo .ts
export class UsuarioService {
    constructor(
        //@InjectRepository(UsuaioRepository)
        //private readonly repository: Repository<UsuarioEntity> 
        private readonly usuarioRepository: UsuaioRepository
        /**
         - É como se fosse o repositorio da entidade que esta sendo injetana na anotação acima
         - O Repository do typeorm tambem tem metodos padrões semelhante ao repository do spring
         */
    ) { }

    async cadastro(dadosDoUsuario: criaUsuarioDto) {

        const usuarioEntity = new UsuarioEntity();

        usuarioEntity.email = dadosDoUsuario.email;
        usuarioEntity.nome = dadosDoUsuario.nome;
        usuarioEntity.senha = dadosDoUsuario.senha;
        usuarioEntity.createdAt = new Date().toISOString();
        usuarioEntity.updateAt = new Date().toISOString();


        const usuarioCadastrado = await this.usuarioRepository.salvar(usuarioEntity)
        return usuarioEntity;

    }
    async listaUsuarios() {

        /**
         * 
        const usuariosSalvos= await this.repository.find();
        const usuariosLista= usuariosSalvos.map(
            (usuario) => new ListaUsuarioDTO(usuario.id, usuario.nome)
            )
            */
        return this.usuarioRepository.listar()
    }

    async atualidaUsuario(id: string, dadosDoUsuario: criaUsuarioDto) {
        const usuarioEntity = new UsuarioEntity();
        Object.entries(criaUsuarioDto).forEach(([chave, valor])=>{
            if (chave != 'id') {
                usuarioEntity[chave] = valor
            }
        })

        await this.usuarioRepository.atualiza(id, usuarioEntity)
        return usuarioEntity;

    }

    async deletaUsuario(id: string) {

        await this.usuarioRepository.remove(id)
    }

}