import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { InputSearchModule } from 'src/app/components/input-search/input-search.module';
import { PokemonService } from 'src/app/services/pokemon.service';
import { PokedexRoutingModule } from './pokedex-routing.module';
import { PokedexComponent } from './pokedex.component';

@NgModule({
  declarations: [PokedexComponent],
  imports: [CommonModule, PokedexRoutingModule, InputSearchModule],
  providers: [PokemonService],
})
export class PokedexModule {}
