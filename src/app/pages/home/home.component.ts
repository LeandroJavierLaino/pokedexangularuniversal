import { Component, OnInit } from '@angular/core';
import { SharedPokemonDataService } from 'src/app/services/PokemonService';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  pokemons: BasicPokemonResponse[] = [];

  constructor(private pokemonDataService: SharedPokemonDataService) {}

  ngOnInit() {
    this.pokemonDataService.currentPokemons.subscribe((newPokemons) => {
      this.pokemons = newPokemons;
    });
  }
}
