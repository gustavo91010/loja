
export class ListaUsuarioDTO{
    // um padrão de resposta à uma criação ou vizualização de um usuario
    constructor(
        // readonly, essa propriedade só pode ser lina, nao acessada nem odificada...
        readonly id: string,
        readonly nome: string
    ){}
}