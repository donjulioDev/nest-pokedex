import { join } from 'path'; // Módulo de Node.js para manejar rutas
import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { PokemonModule } from './pokemon/pokemon.module';

// En la anología del restaurante, este archivo es el menu
@Module({
  imports: [
    // Aquí se importan otros módulos
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
    }),
    PokemonModule
  ],
})
export class AppModule {}
