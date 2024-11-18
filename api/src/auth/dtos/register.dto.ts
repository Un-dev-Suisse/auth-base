import { IsNotEmpty, IsString, Validate, ValidateIf, ValidationArguments, ValidatorConstraint } from "class-validator";
import { AuthLoginDto } from "./login.dto";

@ValidatorConstraint({ name: 'PasswordsMatch', async: false })
export class PasswordsMatchConstraint {
	validate(value: string, args: ValidationArguments) {
		const [relatedPropertyName] = args.constraints;
		const relatedValue = (args.object as any)[relatedPropertyName];

		return value === relatedValue;
	}

	defaultMessage() {
		return 'Les mots de passe ne correspondent pas';
	}
}

export class AuthRegisterDto extends AuthLoginDto {
	@ValidateIf(o => o.password !== undefined)
	@IsString()
	@IsNotEmpty({ message: 'Confirmation du mot de passe requise' })
	@Validate(PasswordsMatchConstraint, ['password'])
	confirm_password: string;
}
