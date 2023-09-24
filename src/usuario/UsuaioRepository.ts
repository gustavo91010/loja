import { Injectable } from "@nestjs/common";
import { UsuarioEntity } from "./usuario.entity";
import { AtualizarUsuarioDto } from "./dto/AtualizarUsuario.dto";

@Injectable() // precisa dessa anotação para ser considerada um  providers, para ser injetada, e precisa estar dentro do module
export class UsuaioRepository {
  
    private usuarios: UsuarioEntity[] = [];
    
    async salvar(usuario: UsuarioEntity) {

        this.usuarios.push(usuario);
       
    }

    async listar() {
        return this.usuarios;
    }

    async buscarPorEmail(email: String) {
        return this.usuarios.find(
            usuario => usuario.email === email
        );
    }


    
    async usuarioComExiste(email: string) {
      
        const possivelUsuario= this.usuarios.find(
            (usuario) => usuario.email === email,
            );

        return possivelUsuario !== undefined
    }
    async atualiza(id: string, dadosDeAtualizacao: Partial<UsuarioEntity>) {
        // Um objeto parcialmente compativel com o usuarioEntity, especifica que as propriedades do objeto, nesse caso, são opcionais
       const possivelUsuario=this.usuarios.find(
        // percorrendo pela lista de usuarios para ver qual usuario tem o id estritamente igual ao fornecido
        usuarioSalvo => usuarioSalvo.id === id
       );
       if(!possivelUsuario){
        throw new Error('Usuário não existe');
       }
       // Para capturar os parametros que estao no objeto dadosDeAtualizacao
       // Devolve um conjunto de chave/valores das propriedades enumeráveis de um objeto
       Object.entries(dadosDeAtualizacao).forEach( ([chave, valor]) =>{
        if(chave === 'id'){
            return;
        }
        possivelUsuario[chave]= valor;
       })
return possivelUsuario;
    }

}
