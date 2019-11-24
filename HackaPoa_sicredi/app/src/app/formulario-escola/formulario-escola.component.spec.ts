import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioEscolaComponent } from './formulario-escola.component';

describe('FormularioEscolaComponent', () => {
  let component: FormularioEscolaComponent;
  let fixture: ComponentFixture<FormularioEscolaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioEscolaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioEscolaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
