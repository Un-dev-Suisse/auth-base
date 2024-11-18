import { Body, Controller, Post, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthRegisterDto } from './dtos/register.dto';
import { Response } from 'express';
import { AuthLoginDto } from './dtos/login.dto';

@Controller('auth')
export class AuthController {
	constructor(
		private readonly authService: AuthService,
	) {}

	@Post('register')
	async register(@Body() data: AuthRegisterDto, @Res() response: Response) {
		const user = await this.authService.register(data);

		response.cookie('user', user.id, {httpOnly: true, domain: 'localhost', path: '/'});
		return response.status(201).json(user);
	}

	@Post('login')
	async login(@Body() data: AuthLoginDto, @Res() response: Response) {
		const user = await this.authService.login(data);

		response.cookie('user', user.id, {httpOnly: true, domain: 'localhost', path: '/'});
		return response.status(200).json(user);
	}

	@Post('logout')
	async logout(@Res() response: Response) {
		response.clearCookie('user');
		return response.status(204).send();
	}
}
