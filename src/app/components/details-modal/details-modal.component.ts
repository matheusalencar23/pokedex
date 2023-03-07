import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ColorType, IPokemon, StatsName } from 'src/app/models/pokemon';
import { GeneralService } from 'src/app/services/general.service';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-details-modal',
  templateUrl: './details-modal.component.html',
  styleUrls: ['./details-modal.component.scss'],
})
export class DetailsModalComponent {
  @Input() pokemon: IPokemon | null = null;
  @Output() clickCloseButton = new EventEmitter<void>();

  constructor(
    private _pokemonService: PokemonService,
    private _generalService: GeneralService
  ) {}

  getImage(): string {
    if (this.pokemon) return this._pokemonService.getImage(this.pokemon);
    return '';
  }

  getBackgroundColor(): string {
    const type = this.pokemon?.types[0].type.name || '';
    return (
      Object.entries(ColorType).find(([key, value]) => key === type)?.[1] ||
      ColorType.not_found
    );
  }

  getBackgroundContentColor(): string {
    const color = this.getBackgroundColor();
    const style = `linear-gradient(180deg, ${this._generalService.convertHexToShadowRgb(
      color
    )} 35%, ${color} 75%)`;
    return style;
  }

  closeModal(): void {
    this.clickCloseButton.emit();
  }

  getTypes(): string[] {
    if (this.pokemon) return this._pokemonService.getTypes(this.pokemon);
    return [];
  }

  get hp(): number {
    if (this.pokemon)
      return this._pokemonService.getStats(this.pokemon, StatsName.HP);
    return 0;
  }

  get attack(): number {
    if (this.pokemon)
      return this._pokemonService.getStats(this.pokemon, StatsName.ATTACK);
    return 0;
  }

  get defense(): number {
    if (this.pokemon)
      return this._pokemonService.getStats(this.pokemon, StatsName.DEFENSE);
    return 0;
  }

  get specialAttack(): number {
    if (this.pokemon)
      return this._pokemonService.getStats(
        this.pokemon,
        StatsName.SPECIAL_ATTACK
      );
    return 0;
  }

  get specialDefense(): number {
    if (this.pokemon)
      return this._pokemonService.getStats(
        this.pokemon,
        StatsName.SPEACIAL_DEFENSE
      );
    return 0;
  }

  get speed(): number {
    if (this.pokemon)
      return this._pokemonService.getStats(this.pokemon, StatsName.SPEED);
    return 0;
  }
}
