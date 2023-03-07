import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import {
  ColorType,
  IPokemon,
  ISimplePokemon,
  StatsName,
} from 'src/app/models/pokemon';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss'],
})
export class PokemonCardComponent implements OnChanges {
  pokemonDetails: IPokemon | null = null;
  loading: boolean = false;

  @Input() pokemon: ISimplePokemon | null = null;
  @Output() openModal = new EventEmitter<IPokemon>();

  constructor(private _pokemonService: PokemonService) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['pokemon'].firstChange) {
      this.getPokemonDetails();
    }
  }

  getPokemonDetails(): void {
    this.loading = true;
    if (this.pokemon && this.pokemon.name) {
      this._pokemonService.getPokemonDetails(this.pokemon?.name).subscribe({
        next: (res) => {
          this.pokemonDetails = res;
        },
        error: (err) => {
          this.pokemonDetails = null;
        },
        complete: () => (this.loading = false),
      });
    }
  }

  get attack(): number {
    if (this.pokemonDetails)
      return this._pokemonService.getStats(
        this.pokemonDetails,
        StatsName.ATTACK
      );
    return 0;
  }

  get defense(): number {
    if (this.pokemonDetails)
      return this._pokemonService.getStats(
        this.pokemonDetails,
        StatsName.DEFENSE
      );
    return 0;
  }

  getTypes(): string[] {
    if (this.pokemonDetails)
      return this._pokemonService.getTypes(this.pokemonDetails);
    return [];
  }

  getImage(): string {
    if (this.pokemonDetails)
      return this._pokemonService.getImage(this.pokemonDetails);
    return '';
  }

  getBackgroundColor(type: string): string {
    return (
      Object.entries(ColorType).find(([key, value]) => key === type)?.[1] ||
      ColorType.not_found
    );
  }

  getCardBackground(): string {
    const primaryType = this.getTypes()[0];
    const color = this.getBackgroundColor(primaryType);
    const style = `linear-gradient(90deg, #f6f7f9 35%, ${color} 35%)`;
    return style;
  }
}
