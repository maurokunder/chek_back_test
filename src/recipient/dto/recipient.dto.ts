import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class RecipientDTO {
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    readonly rut: string;
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    readonly fullName: string;
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    @IsEmail()
    readonly email: string;
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    readonly phone: string;
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    readonly bankId: string;
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    readonly typeAccount: string;
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    readonly accountNumber: string;
}