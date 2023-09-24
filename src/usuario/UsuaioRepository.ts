import { Injectable } from "@nestjs/common";

@Injectable() // precisa dessa anotação para ser considerada um  providers, para ser injetada, e precisa estar dentro do module
export class UsuaioRepository {
    private usuarios = [];
    
    async salvar(usuario) {

        this.usuarios.push(usuario);
        // console.log(this.usuarios);
    }

    async listar() {
        return this.usuarios;
    }

    async buscarPorEmail(email: String) {
        return this.usuarios.find(
            usuario => usuario.emal === email
        );
    }


    
    async usuarioComExiste(email: string) {
        console.log(email)
        const possivelUsuario= this.usuarios.find(
            (usuario) => usuario.email === email,
            );

        return possivelUsuario !== undefined
    }

}
