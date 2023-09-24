
export class ListaUsuarioDTO{
    // um padrão de resposta à uma criação ou vizualização de um usuario
    constructor(
        // o que é esse readonly?
        readonly id: string,
        readonly nome: string
    ){}
}