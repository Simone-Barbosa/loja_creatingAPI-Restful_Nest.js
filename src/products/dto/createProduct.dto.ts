/* eslint-disable prettier/prettier */
import { Type } from "class-transformer";
import {
    ArrayMinSize,
    IsArray,
    IsNotEmpty,
    IsNumber,
    IsString,
    IsUrl,
    Min,
    MinLength,
    ValidateNested
} from "class-validator";

// verificar funcionamento correto de todas as validações
export class CreateProductDTO {

    @IsString()
    @IsNotEmpty({ message: 'O campo nome não pode ser vazio' })
    name: string;

    @IsNumber({ maxDecimalPlaces: 2, allowNaN: false, allowInfinity: false })
    @Min(1, { message: 'O preço deve ser maior que zero' })
    price: number;

    @IsNumber()
    @Min(0, { message: 'Quantidade inválida' })
    unitsAvaliable: number;

    @IsString()
    @IsNotEmpty()
    //@MinLength(1000, { message: 'Descrição não deve ultrapassar 1000 caracteres' })
    description: string;

    @ValidateNested()
    @IsArray()
    @ArrayMinSize(3)
    @Type(() => FeaturesProductDTO)
    features: FeaturesProductDTO[];

    @ValidateNested()
    @IsArray()
    @ArrayMinSize(1)
    @Type(() => ImageProductDTO)
    images: ImageProductDTO[];

    @IsString()
    @IsNotEmpty()
    category: string;

    // creationDate: string;
    // updateDate: string;
}

export class FeaturesProductDTO {

    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsNotEmpty()
    description: string;
}

export class ImageProductDTO {

    @IsUrl()
    url: string;

    @IsString()
    @IsNotEmpty()
    description: string;

}