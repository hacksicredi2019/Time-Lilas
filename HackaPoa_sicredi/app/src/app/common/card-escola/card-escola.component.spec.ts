import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardEscolaComponent } from './card-escola.component';

describe('CardEscolaComponent', () => {
  let component: CardEscolaComponent;
  let fixture: ComponentFixture<CardEscolaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardEscolaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardEscolaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
