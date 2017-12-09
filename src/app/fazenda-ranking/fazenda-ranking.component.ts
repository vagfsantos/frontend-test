import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-fazenda-ranking',
  templateUrl: './fazenda-ranking.component.html',
  styleUrls: ['./fazenda-ranking.component.scss']
})
export class FazendaRankingComponent implements OnInit {
  private candidates: any;

  constructor(private http: Http) { }

  ngOnInit() {
    this.getCandidates()
  }

  private getCandidates() {
    this.http.get('assets/api/fazenda.json')
      .map( response => response.json() )
      .subscribe(json => this.setCandidates(json))
  }

  private setCandidates(apiData: any){

  }

}
