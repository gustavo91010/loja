import { ValidationArguments,
     ValidationOptions,
      ValidatorConstraint,
       ValidatorConstraintInterface,
        registerDecorator } from "class-validator";
import { UsuaioRepository } from "../UsuaioRepository";
import { Injectable } from "@nestjs/common";
import { mainModule } from "process";

// adicionar ele no provider em usuario module
@Injectable() // ja que ela vao ser injetada
@ValidatorConstraint({async: true}) // está informando ao sistema de validação que essa validação pode ser assíncrona, o que significa que ela pode realizar operações assíncronas durante o processo de validação.
export class EmailEhUnicoValidador implements ValidatorConstraintInterface {
    constructor(private usuarioRepository: UsuaioRepository) { }


    async validate(value: any, 
        validationArguments?: ValidationArguments): Promise<boolean> {
            
            const usuarioComEmailExiste = await this.usuarioRepository.usuarioComExiste(value);
            console.log("usuarioComEmailExiste: "+usuarioComEmailExiste);
        return !usuarioComEmailExiste; // uma Promise pede uma espera, e mantem todos no ambiente de async
    }

    /**
     defaultMessage?(validationArguments?: ValidationArguments): string {
         throw new Error("Method not implemented.");
        }
        */

// Agora vou criar um decorate para usar esse validador (EmailEhUnicoValidador):

}

export const EmailEhUnicoAqui= (opcoesDeValidaao: ValidationOptions) =>{
return (objeto: Object, propriedade: string ) =>{
    registerDecorator({
        target: objeto.constructor,
        propertyName: propriedade,
        options: opcoesDeValidaao,
        constraints: [],
        validator: EmailEhUnicoValidador
    });
}

// depois adicionar a configuração do contaniner na classe main
// useContainer(app.select(AppModule), {fallbackOnErrors: true}); // configurar para usar o container de injeção de dependençîa padrão do nest, se der errado usa o teu mesmo

}

