import { Injectable } from "@nestjs/common";
import { UsuarioEntity } from "./usuario.entity";
import { AtualizarUsuarioDto } from "./dto/AtualizarUsuario.dto";
import { Repository } from "typeorm";
import { ListaUsuarioDTO } from "./dto/ListaUsuario.dto";

@Injectable() // precisa dessa anotação para ser considerada um  providers, para ser injetada, e precisa estar dentro do module
export class UsuaioRepository {
    //@InjectRepository(UsuarioEntity)
    // private readonly repository: Repositoryory<UsuarioEntity> 

    private readonly userRepository: Repository<UsuarioEntity>


    private usuarios: UsuarioEntity[] = [];

    async salvar(usuario: UsuarioEntity) {

        //this.usuarios.push(usuario);
        await this.userRepository.save(usuario)

    }

    async listar() {
        // return this.usuarios;
        const usuarios = await this.userRepository.find()

        return usuarios.map(
            (user) => { new ListaUsuarioDTO(user.id, user.nome) }
        )
    }

    private async buscarPorEmail(email: string): Promise<UsuarioEntity> | undefined{

        const possivelUsuario = await this.userRepository.findOne({ where: { email: email } })

        return possivelUsuario;
    }

    private async buscaPorId(id: string): Promise<UsuarioEntity> | undefined {
        // perc orrendo pela lista de usuarios para ver qual usuario tem o id estritamente igual ao fornecido

        const possivelUsuario = await this.userRepository.findOne({ where: { id: id } })

        return possivelUsuario

        /**
         * 
        const possivelUsuario = this.usuarios.find(
            usuarioSalvo => usuarioSalvo.id === id
            );
            if (!possivelUsuario) {
                throw new Error('Usuário não existe')
            }
            return possivelUsuario;
            */
    }



    async usuarioComExiste(email: string) {

        const possivelUsuario = this.usuarios.find(
            (usuario) => usuario.email === email,
        );

        return possivelUsuario !== undefined
    }

    async atualiza(id: string, dadosDeAtualizacao: Partial<UsuarioEntity>) {
        // Um objeto parcialmente compativel com o usuarioEntity, especifica que as propriedades do objeto, nesse caso, são opcionais
        const usuario = this.buscaPorId(id);
        // Para capturar os parametros que estao no objeto dadosDeAtualizacao
        // Devolve um conjunto de chave/valores das propriedades enumeráveis de um objeto
        Object.entries(dadosDeAtualizacao).forEach(([chave, valor]) => {
            if (chave === 'id') {
                return;
            }
            usuario[chave] = valor;
        })
        return usuario;
    }

    async remove(id: string) {
        const usuario = this.buscaPorId(id)

        this.usuarios = this.usuarios.filter(
            // recebendo o usuario, procurando os que nao tem id semelhante ao passado, e removendo o que tiver.
            //Devolve os elementos de uma matriz que satisfazem a condição especificada numa função de retorno de chamada.
            // devoolve os elementos que tiverem o id diferente do passado.  
            usuarioSalvo => usuarioSalvo.id !== id
        )

        return usuario;
    }


}
