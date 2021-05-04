import { Component } from '@angular/core';
import { getPokemons } from 'src/helpers/pokemons';
import { SharedPokemonDataService } from '../services/PokemonService';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css'],
})
export class ToolbarComponent {
  title = 'pokedexangularuniversal';
  _search: string = '';

  constructor(private pokemonDataService: SharedPokemonDataService) {}

  onSearchChange(searchValue: any) {
    this._search = searchValue.target.value;
  }

  async searchPokemon($event: any) {
    const pokemons = (await getPokemons('')) as BasicPokemonResponse[];

    const pokemonFiltered = pokemons.filter((pokemon: BasicPokemonResponse) =>
      pokemon.name.includes(this._search)
    );

    this.pokemonDataService.updatePokemons(pokemonFiltered);
  }
}
