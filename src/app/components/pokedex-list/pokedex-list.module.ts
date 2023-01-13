import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokedexListComponent } from './pokedex-list.component';
import { PokemonCardModule } from '../pokemon-card/pokemon-card.module';

@NgModule({
  declarations: [PokedexListComponent],
  imports: [CommonModule, PokemonCardModule],
  exports: [PokedexListComponent],
})
export class PokedexListModule {}
