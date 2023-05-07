/* eslint-disable prettier/prettier */

import { ValidationArguments, ValidationOptions, ValidatorConstraint, ValidatorConstraintInterface, registerDecorator } from "class-validator";
import { UserRepository } from "../user.repository";
import { Injectable } from "@nestjs/common";

@Injectable()
@ValidatorConstraint({ async: true })
export class UniqueEmailValidator implements ValidatorConstraintInterface {

    constructor(private userRepository: UserRepository) { }

    async validate(value: any, validationArguments?: ValidationArguments,): Promise<boolean> {

        const userExistWithEmail = await this.userRepository.existWithEmail(value);

        return !userExistWithEmail;
    }
}

// não está funcionando, verificar posteriormente | Erro 500 "Internal server error"
export const EmailIsUnique = (optionsOfValidation: ValidationOptions) => {
    return (obj: object, properties: string) => {

        registerDecorator({
            propertyName: properties,
            options: optionsOfValidation,
            constraints: [],
            validator: UniqueEmailValidator,
            target: undefined
        });
    }
}