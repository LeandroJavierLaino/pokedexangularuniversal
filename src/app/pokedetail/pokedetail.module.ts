import { NgModule } from '@angular/core';
import { PokedetailComponent } from './pokedetail.component';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';

@NgModule({
  imports: [
    CommonModule,
    MatDividerModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
  ],
  exports: [PokedetailComponent],
  declarations: [PokedetailComponent],
  providers: [],
})
export class PokedetailModule {}
