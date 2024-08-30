// El entity es la representación de lo que se va a grabar en la base de datos
import { Document } from "mongoose";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

// En la analogía del restaurante, el entity es el menú
@Schema()
export class Pokemon extends Document {
 @Prop({
  unique: true,
  index: true,
 }) 
  name: string;

  @Prop({
    unique: true,
    index: true,
   }) 
  no: number;
}

export const PokemonSchema = SchemaFactory.createForClass( Pokemon );

// para conectar este schema con la base de datos, se debe importar en el módulo correspondiente
// Path: src/pokemon/pokemon.module.ts