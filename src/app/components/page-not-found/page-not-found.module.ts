import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './page-not-found.component';
import { SpecialButtonModule } from '../special-button/special-button.module';

@NgModule({
  declarations: [PageNotFoundComponent],
  imports: [CommonModule, SpecialButtonModule],
  exports: [PageNotFoundComponent],
})
export class PageNotFoundModule {}
