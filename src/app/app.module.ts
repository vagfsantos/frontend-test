import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { FazendaRankingComponent } from './fazenda-ranking/fazenda-ranking.component';
import { HeaderComponent } from './fazenda-ranking/header/header.component';
import { CandidateComponent } from './fazenda-ranking/candidate/candidate.component';
import { RatingComponent } from './fazenda-ranking/candidate/rating/rating.component';



@NgModule({
  declarations: [
    AppComponent,
    FazendaRankingComponent,
    HeaderComponent,
    CandidateComponent,
    RatingComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
