import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
	private static _prisma: PrismaService = undefined;

	constructor() {
		super();
		if (!PrismaService._prisma) {
			PrismaService._prisma = this;
		}
	}

	public static get prisma() {
		return this._prisma;
	}

	async onModuleInit() {
		await this.$connect();
	}

	async onModuleDestroy() {
		await this.$disconnect();
	}
}
