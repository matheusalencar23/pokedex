import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonCardComponent } from './pokemon-card.component';
import { CapitalizeModule } from 'src/app/pipes/capitalize/capitalize.module';
import { SpinnerModule } from '../spinner/spinner.module';
import { TypeTipModule } from '../type-tip/type-tip.module';

@NgModule({
  declarations: [PokemonCardComponent],
  imports: [CommonModule, CapitalizeModule, SpinnerModule, TypeTipModule],
  exports: [PokemonCardComponent],
})
export class PokemonCardModule {}
