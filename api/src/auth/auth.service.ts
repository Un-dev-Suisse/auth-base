import { ConflictException, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { AuthRegisterDto } from './dtos/register.dto';
import { AuthLoginDto } from './dtos/login.dto';
import * as argon2 from 'argon2';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class AuthService {
	private readonly prisma: PrismaService;
	constructor() {
		this.prisma = PrismaService.prisma;
	}

	async register(data: AuthRegisterDto) {
		let user = await this.prisma.user.findFirst({where: {email: data.email}});
		if (user)
			throw new ConflictException(`Adresse email déjà utilisée`);

		user = await this.prisma.user.create({
			data: {
				email: data.email,
				password: await argon2.hash(data.password)
			}
		});
		return {id: user.id, email: user.email};
	}

	async login(data: AuthLoginDto) {
		const user = await this.prisma.user.findFirst({where: {email: data.email}});
		if (!user)
			throw new NotFoundException(`Adresse email inconnue`);

		if (!await argon2.verify(user.password, data.password))
			throw new UnauthorizedException(`Mot de passe incorrect`);

		return {id: user.id, email: user.email};
	}
}
