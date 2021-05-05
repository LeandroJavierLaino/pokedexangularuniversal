import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { getPokemon } from 'src/helpers/pokemons';

@Component({
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css'],
})
export class PokemonComponent implements OnInit {
  pokemonName: string = '';
  pokemonData: PokemonCard = {} as PokemonCard;

  constructor(
    private activatedRouter: ActivatedRoute,
    private router: Router
  ) {}

  async ngOnInit() {
    this.pokemonName = this.activatedRouter.snapshot.paramMap.get(
      'pokemonName'
    ) as string;

    this.pokemonData = await getPokemon(this.pokemonName);
  }

  goTo() {
    this.router.navigate(['']);
  }
}
