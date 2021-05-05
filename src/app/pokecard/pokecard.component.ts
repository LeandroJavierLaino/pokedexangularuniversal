import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

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

  constructor(private router: Router, private route: ActivatedRoute) {}

  async ngOnInit() {
    this.pokemon = await getPokemon(this.name);
  }

  goTo() {
    this.router.navigate([`pokemon/${this.pokemon.name}`], {
      relativeTo: this.route,
    });
  }
}
