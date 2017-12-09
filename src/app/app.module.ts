import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FazendaRankingComponent } from './fazenda-ranking/fazenda-ranking.component';
import { HeaderComponent } from './fazenda-ranking/header/header.component';
import { CandidateComponent } from './fazenda-ranking/candidate/candidate.component';


@NgModule({
  declarations: [
    AppComponent,
    FazendaRankingComponent,
    HeaderComponent,
    CandidateComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
