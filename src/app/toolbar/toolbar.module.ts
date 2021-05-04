import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ToolbarComponent } from './toolbar.component';

@NgModule({
  imports: [MatToolbarModule, MatInputModule, MatIconModule, MatButtonModule],
  exports: [ToolbarComponent],
  declarations: [ToolbarComponent],
  providers: [],
})
export class ToolbarModule {}
