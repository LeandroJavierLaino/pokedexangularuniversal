import { NgModule } from '@angular/core';
import { PokemonComponent } from './pokemon.component';

import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { PokedetailModule } from 'src/app/pokedetail/pokedetail.module';

@NgModule({
  imports: [CommonModule, MatIconModule, MatButtonModule, PokedetailModule],
  exports: [PokemonComponent],
  declarations: [PokemonComponent],
  providers: [],
})
export class PokemonModule {}
