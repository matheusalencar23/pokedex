import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ColorType, IPokemon, StatsName } from 'src/app/models/pokemon';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-details-modal',
  templateUrl: './details-modal.component.html',
  styleUrls: ['./details-modal.component.scss'],
})
export class DetailsModalComponent {
  @Input() pokemon: IPokemon | null = null;
  @Output() clickCloseButton = new EventEmitter<void>();

  constructor(private _pokemonService: PokemonService) {}

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
    const style = `linear-gradient(180deg, ${this.convertHexToShadowRgb(
      color
    )} 35%, ${color} 75%)`;
    return style;
  }

  convertHexToShadowRgb(hex: string): string {
    const r = this.handleColorShadow(hex.slice(1, 3));
    const g = this.handleColorShadow(hex.slice(3, 5));
    const b = this.handleColorShadow(hex.slice(5));
    return `rgb(${r}, ${g}, ${b})`;
  }

  handleColorShadow(color: string): number {
    const colorAsNumber = parseInt(color, 16) - 75;
    return colorAsNumber > 0 ? colorAsNumber : 0;
  }

  closeModal(): void {
    this.clickCloseButton.emit();
  }

  getTypes(): string[] {
    return this.pokemon?.types.map((item) => item.type.name) || [];
  }

  get hp(): number {
    return this._getStats(StatsName.HP);
  }

  get attack(): number {
    return this._getStats(StatsName.ATTACK);
  }

  get defense(): number {
    return this._getStats(StatsName.DEFENSE);
  }

  get specialAttack(): number {
    return this._getStats(StatsName.SPECIAL_ATTACK);
  }

  get specialDefense(): number {
    return this._getStats(StatsName.SPEACIAL_DEFENSE);
  }

  get speed(): number {
    return this._getStats(StatsName.SPEED);
  }

  private _getStats(stat: StatsName): number {
    return (
      this.pokemon?.stats.find((item) => item.stat.name === stat)?.base_stat ||
      0
    );
  }
}
