import { Module } from '@nestjs/common';
import { PokemonService } from './pokemon.service';
import { PokemonController } from './pokemon.controller';

// En la anología del restaurante, este archivo es el menu

@Module({
  controllers: [PokemonController],
  providers: [PokemonService],
})
export class PokemonModule {}
 