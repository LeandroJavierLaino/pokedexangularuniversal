import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { ToolbarModule } from './toolbar/toolbar.module';
import { MatListModule } from '@angular/material/list';
import { HomeModule } from './pages/home/home.module';
import { PokecardModule } from './pokecard/pokecard.module';
import { PokemonModule } from './pages/pokemon/pokemon.module';
import { PokedetailModule } from './pokedetail/pokedetail.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    ToolbarModule,
    MatListModule,
    HomeModule,
    PokecardModule,
    PokemonModule,
    PokedetailModule,
    MatDividerModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
