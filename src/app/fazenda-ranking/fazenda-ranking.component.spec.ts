import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FazendaRankingComponent } from './fazenda-ranking.component';

describe('FazendaRankingComponent', () => {
  let component: FazendaRankingComponent;
  let fixture: ComponentFixture<FazendaRankingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FazendaRankingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FazendaRankingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
