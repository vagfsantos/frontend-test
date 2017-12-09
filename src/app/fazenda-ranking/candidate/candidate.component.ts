import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-candidate',
  templateUrl: './candidate.component.html',
  styleUrls: ['./candidate.component.scss']
})
export class CandidateComponent implements OnInit {
  @Input() candidate: any;
  @Input() position: number;
  @Input() isEven: boolean;

  private showRating: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  onShowRating(e) {
    this.showRating = true;
  }

  onHideRating(e) {
    this.showRating = false;
  }
}
