import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PokemonService } from './pokemon.service';
import { PokemonController } from './pokemon.controller';
import { Pokemon, PokemonSchema } from './entities/pokemon.entity';


console.log(Pokemon.name);


// En la anología del restaurante, este archivo es el menu

@Module({
  imports: [                       // https://www.udemy.com/course/nest-framework/learn/lecture/32940186#questions
    MongooseModule.forFeature([    //9:48
      {
        name: Pokemon.name,
        schema: PokemonSchema,
      },
    ],
    // 'pokemon'
  ),
  ],
  controllers: [PokemonController],
  providers: [PokemonService],
})
export class PokemonModule {}
 