import { Component, Input } from '@angular/core';
import { getPokemon } from 'src/helpers/pokemons';

@Component({
  selector: 'pokecard',
  templateUrl: './pokecard.component.html',
  styleUrls: ['./pokecard.component.css'],
})
export class PokecardComponent {
  @Input() name: string = '';
  pokemon: PokemonCard = {
    name: '',
    id: 0,
    sprites: { front_default: '' },
  };

  async ngOnInit() {
    this.pokemon = await getPokemon(this.name);
  }
}
