import { Component, Input } from '@angular/core';

@Component({
  selector: 'pokedetail',
  templateUrl: './pokedetail.component.html',
  styleUrls: ['./pokedetail.component.css'],
})
export class PokedetailComponent {
  @Input() pokemon: PokemonCard = {
    name: '',
    id: 0,
    sprites: {
      front_default:
        'https://w7.pngwing.com/pngs/620/521/png-transparent-poke-ball-pokemon-pokemon-rim-mobile-phones-pokemon-thumbnail.png',
    },
  };

  constructor() {}

  async ngOnInit() {}
}
