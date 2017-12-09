import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FazendaRankingComponent } from './fazenda-ranking/fazenda-ranking.component';


@NgModule({
  declarations: [
    AppComponent,
    FazendaRankingComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
