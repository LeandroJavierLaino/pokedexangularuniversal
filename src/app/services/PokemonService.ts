import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'platform' })
export class SharedPokemonDataService {
  constructor() {}
  private pokemonsSource = new BehaviorSubject<BasicPokemonResponse[]>(
    [] as BasicPokemonResponse[]
  );

  currentPokemons = this.pokemonsSource.asObservable();

  updatePokemons(pokemons: BasicPokemonResponse[]) {
    this.pokemonsSource.next(pokemons);
  }
}
