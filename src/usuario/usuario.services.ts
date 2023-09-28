import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ListaUsuarioDTO } from "./dto/ListaUsuario.dto";
import { UsuarioEntity } from "./usuario.entity";
import { Repository } from "typeorm";
import { criaUsuarioDto } from "./dto/CriaUsuario.dto";

@Injectable() // lembrando que toda classe com anotação injectable tem que esta no modulo .ts
export class UsuarioService{
constructor(
    @InjectRepository(UsuarioEntity)
    private readonly repository: Repository<UsuarioEntity> 
    /**
     - É como se fosse o repositorio da entidade que esta sendo injetana na anotação acima
     - O Repository do typeorm tambem tem metodos padrões semelhante ao repository do spring
     */
){}

async cadastro(dadosDoUsuario: criaUsuarioDto){

    const usuarioEntity = new UsuarioEntity();
    
    usuarioEntity.email = dadosDoUsuario.email;
    usuarioEntity.nome = dadosDoUsuario.nome;
    usuarioEntity.senha = dadosDoUsuario.senha;
    usuarioEntity.createdAt= new Date().toISOString();
    usuarioEntity.updateAt= new Date().toISOString();
  

   const usuarioCadastrado= await this.repository.save(usuarioEntity)
   return usuarioCadastrado;

}
async listaUsuarios(){
  
    const usuariosSalvos= await this.repository.find();
    const usuariosLista= usuariosSalvos.map(
        (usuario) => new ListaUsuarioDTO(usuario.id, usuario.nome)
    )
return usuariosLista;
}

}