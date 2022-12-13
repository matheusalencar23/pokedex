import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundModule } from './components/page-not-found/page-not-found.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, PageNotFoundModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
