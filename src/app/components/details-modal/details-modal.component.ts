import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ColorType, IPokemon } from 'src/app/models/pokemon';

@Component({
  selector: 'app-details-modal',
  templateUrl: './details-modal.component.html',
  styleUrls: ['./details-modal.component.scss'],
})
export class DetailsModalComponent {
  @Input() pokemon: IPokemon | null = null;
  @Output() clickCloseButton = new EventEmitter<void>();

  constructor() {}

  getImage(): string {
    if (this.pokemon?.sprites?.other?.home?.front_default)
      return this.pokemon?.sprites.other.home.front_default;
    if (this.pokemon?.sprites?.other?.dream_world?.front_default)
      return this.pokemon?.sprites?.other?.dream_world?.front_default;
    return this.pokemon?.sprites?.front_default || '';
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
}
