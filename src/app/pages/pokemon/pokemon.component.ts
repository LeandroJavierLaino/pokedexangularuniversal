import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css'],
})
export class PokemonComponent implements OnInit {
  pokemonName: string = '';

  constructor(public activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    // this.pokemonName = this.activatedRoute.params.subscribe((params) => {
    //   this.pokemonName = params['pokemonName'];
    // });
    // console.log(this.pokemonName);
  }
}
