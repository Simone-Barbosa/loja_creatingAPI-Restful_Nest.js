/* eslint-disable prettier/prettier */

import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator";
import { EmailIsUnique } from "../validacao/uniqueEmail.validator";


export class CreateUserDTO {

    @IsString({ message: 'O nome deve ser um texto' })
    @IsNotEmpty({ message: 'O nome não pode ser vazio' })
    name: string;

    @IsEmail(undefined, { message: 'O e-mail informado é inválido' })
    email: string;

    @MinLength(6, { message: 'A senha deve ser igual ou maior que 6 caracteres' })
    password: string;

}