import { NgModule } from '@angular/core';
import { PokecardComponent } from './pokecard.component';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [CommonModule, MatCardModule, MatIconModule, MatButtonModule],
  exports: [PokecardComponent],
  declarations: [PokecardComponent],
  providers: [],
})
export class PokecardModule {}
