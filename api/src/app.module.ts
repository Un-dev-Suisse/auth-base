import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import * as dotenv from 'dotenv';
import { PrismaService } from './prisma.service';

dotenv.config();

@Module({
	imports: [
		AuthModule,
	],
	providers: [
		PrismaService
	]
})
export class AppModule {}
