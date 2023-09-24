import { Injectable } from "@nestjs/common";
import { UsuarioEntity } from "./usuario.entity";

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

}
