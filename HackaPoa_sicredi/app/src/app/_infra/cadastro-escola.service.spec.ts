import { TestBed } from '@angular/core/testing';

import { CadastroEscolaService } from './cadastro-escola.service';

describe('CadastroEscolaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CadastroEscolaService = TestBed.get(CadastroEscolaService);
    expect(service).toBeTruthy();
  });
});
