import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class AuthLoginDto {
	@IsEmail()
	@IsNotEmpty({ message: 'Adresse mail requise' })
	email: string;

	@IsString()
	@IsNotEmpty({ message: 'Mot de passe requis' })
	password: string;
}
