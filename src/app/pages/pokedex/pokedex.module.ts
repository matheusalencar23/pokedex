import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DetailsModalModule } from 'src/app/components/details-modal/details-modal.module';
import { InputSearchModule } from 'src/app/components/input-search/input-search.module';
import { LoadMoreButtonModule } from 'src/app/components/load-more-button/load-more-button.module';
import { ModalModule } from 'src/app/components/modal/modal.module';
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
    LoadMoreButtonModule,
    ModalModule,
    DetailsModalModule,
  ],
  providers: [PokemonService],
})
export class PokedexModule {}
