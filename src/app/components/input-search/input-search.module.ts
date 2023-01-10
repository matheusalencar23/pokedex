import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputSearchComponent } from './input-search.component';

@NgModule({
  declarations: [InputSearchComponent],
  imports: [CommonModule, FormsModule],
  exports: [InputSearchComponent],
})
export class InputSearchModule {}
