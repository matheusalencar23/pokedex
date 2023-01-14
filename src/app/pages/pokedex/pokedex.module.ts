import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { InputSearchModule } from 'src/app/components/input-search/input-search.module';
import { PokedexListModule } from 'src/app/components/pokedex-list/pokedex-list.module';
import { SpinnerModule } from 'src/app/components/spinner/spinner.module';
import { PokemonService } from 'src/app/services/pokemon.service';
import { PokedexRoutingModule } from './pokedex-routing.module';
import { PokedexComponent } from './pokedex.component';

@NgModule({
  declarations: [PokedexComponent],
  imports: [
    CommonModule,
    PokedexRoutingModule,
    InputSearchModule,
    PokedexListModule,
    SpinnerModule,
  ],
  providers: [PokemonService],
})
export class PokedexModule {}
