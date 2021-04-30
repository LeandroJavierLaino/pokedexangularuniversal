import { Component, Input } from '@angular/core';
import { getPokemons } from 'src/helpers/pokemons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'pokedexangularuniversal';
  _search: string = '';

  async searchPokemon($event: any) {
    const pokemons = await getPokemons('');
    console.log('pokemons => ', pokemons);
  }
}
