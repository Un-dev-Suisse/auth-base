import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
	const app = await NestFactory.create(AppModule);
	app.useGlobalPipes(new ValidationPipe({
		transform: true, // Conversiona automatique pour les dto
		whitelist: true, // Supprime les champs inutiles
		forbidNonWhitelisted: true, // Interdit les champs inconnus
		forbidUnknownValues: true // Interdit les valeurs inconnues
	}));
	app.enableCors({
		origin: (origin, callback) => {
			callback(null, true);
		},
		credentials: true
	});
	await app.listen(8000);
}
bootstrap();
