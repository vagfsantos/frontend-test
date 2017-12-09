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
  private apiDataNotFound: boolean;

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
    if( !apiData.data ) {
      this.onApiDataNotFound();
      return;
    }

    this.candidates = apiData.data.map( candidate => {
      return this.setCandidateVotePercetage(candidate);
    })

    this.orderCanditatesByPositiveValues();
  }

  private setCandidateVotePercetage(candidate) {
    if( candidate.positive &&  candidate.negative ) {
      let totalVotes = parseInt(candidate.positive, 10) + parseInt(candidate.negative, 10);
      let positivePercentage: any = (( candidate.positive * 100) / totalVotes ).toFixed(2);
      positivePercentage = parseFloat(positivePercentage);
      let negativePercentage = 100 - positivePercentage;

      candidate.positivePercentage = positivePercentage;
      candidate.negativePercentage = negativePercentage;

      return candidate;
    }

    candidate.hasNoCalculatedValue = true;
    return candidate;
  }

  private orderCanditatesByPositiveValues() {
    this.candidates.sort( (candidateA, candidateB) => {
      let positiveVotesA = candidateA.positivePercentage || 0;
      let positiveVotesB = candidateB.positivePercentage || 0;

      if( positiveVotesA > positiveVotesB ) return -1;
      if( positiveVotesA < positiveVotesB ) return 1;
      return 0;
    });
  }

  private onApiDataNotFound() {
    this.apiDataNotFound = true;
  }
}
