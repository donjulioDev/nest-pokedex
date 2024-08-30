import { join } from 'path'; // Módulo de Node.js para manejar rutas
import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { PokemonModule } from './pokemon/pokemon.module';
import { MongooseModule } from '@nestjs/mongoose';

// En la anología del restaurante, este archivo es el menu
@Module({
  imports: [
    // Aquí se importan otros módulos
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
    }),

    MongooseModule.forRoot('mongodb://localhost/27017/nest-pokemon'),

    PokemonModule
  ],
})
export class AppModule {}
