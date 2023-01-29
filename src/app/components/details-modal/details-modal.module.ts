import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsModalComponent } from './details-modal.component';
import { CapitalizeModule } from 'src/app/pipes/capitalize/capitalize.module';
import { TypeTipModule } from '../type-tip/type-tip.module';

@NgModule({
  declarations: [DetailsModalComponent],
  imports: [CommonModule, CapitalizeModule, TypeTipModule],
  exports: [DetailsModalComponent],
})
export class DetailsModalModule {}
