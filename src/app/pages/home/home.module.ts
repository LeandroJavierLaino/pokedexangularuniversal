import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { PokecardModule } from 'src/app/pokecard/pokecard.module';

@NgModule({
  imports: [CommonModule, MatCardModule, PokecardModule],
  exports: [HomeComponent],
  declarations: [HomeComponent],
  providers: [],
})
export class HomeModule {}
