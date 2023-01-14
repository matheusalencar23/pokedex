import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonCardComponent } from './pokemon-card.component';
import { CapitalizeModule } from 'src/app/pipes/capitalize/capitalize.module';

@NgModule({
  declarations: [PokemonCardComponent],
  imports: [CommonModule, CapitalizeModule],
  exports: [PokemonCardComponent],
})
export class PokemonCardModule {}
