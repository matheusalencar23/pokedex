import {
  Component,
  Input,
  OnChanges,
  OnInit,
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

  @Input() pokemon: ISimplePokemon | null = null;

  constructor(private _pokemonService: PokemonService) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['pokemon'].firstChange) {
      this.getPokemonDetails();
    }
  }

  getPokemonDetails(): void {
    if (this.pokemon && this.pokemon.name) {
      this._pokemonService.getPokemonDetails(this.pokemon?.name).subscribe({
        next: (res) => {
          this.pokemonDetails = res;
        },
        error: (err) => {
          this.pokemonDetails = null;
        },
      });
    }
  }

  getAttackStat(): number {
    return this._getStats(StatsName.ATTACK);
  }

  getDefenseStat(): number {
    return this._getStats(StatsName.DEFENSE);
  }

  getTypes(): string[] {
    return this.pokemonDetails?.types.map((item) => item.type.name) || [];
  }

  getImage(): string {
    if (this.pokemonDetails?.sprites?.other?.home?.front_default)
      return this.pokemonDetails?.sprites.other.home.front_default;
    if (this.pokemonDetails?.sprites?.other?.dream_world?.front_default)
      return this.pokemonDetails?.sprites?.other?.dream_world?.front_default;
    return this.pokemonDetails?.sprites?.front_default || '';
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
    const teste = `linear-gradient(90deg, #f6f7f9 35%, ${color} 35%)`;
    console.log(teste);
    return teste;
  }

  private _getStats(stat: StatsName): number {
    return (
      this.pokemonDetails?.stats.find((item) => item.stat.name === stat)
        ?.base_stat || 0
    );
  }
}
