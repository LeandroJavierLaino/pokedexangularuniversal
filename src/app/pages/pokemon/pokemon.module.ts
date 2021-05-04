import { NgModule } from '@angular/core';
import { PokemonComponent } from './pokemon.component';

import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule],
  exports: [PokemonComponent],
  declarations: [PokemonComponent],
  providers: [],
})
export class PokemonModule {}
