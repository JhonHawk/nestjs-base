import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, MaxLength, MinLength } from 'class-validator';

class ThirdLevelInterestDTO {
    @ApiProperty({description: 'Nombre de la relacion secundaria', example: 'Padecimientos'})
    relation:string;
    
    @ApiProperty({description: 'Nombre de los elementos del tercer nivel', example: 'Hipertensión'})
    name: string;
}

class SecondLevelInterestDTO{
    @ApiProperty({description: 'Nombre de la relacion principal', example: 'Salud'})
    interest_relation: string;

    @ApiProperty({description: 'Nombre del segundo nivel', example: 'Padecimientos'})
    name: string;

    @ApiProperty({description: 'Arreglo de tercer nivel', example: JSON.stringify(ThirdLevelInterestDTO)})
    thirdLevel: Array<ThirdLevelInterestDTO>
}

class InterestsDTO{
    @ApiProperty({description: 'Nombre del interes de primer nivel', example: 'Salud'})
    @IsString()
    name: string;

    @ApiProperty({description: 'Arreglo de segundo nivel', example: JSON.stringify(SecondLevelInterestDTO)})
    secondLevel: Array<SecondLevelInterestDTO>;
}




export {
    InterestsDTO,
    SecondLevelInterestDTO,
    ThirdLevelInterestDTO
}