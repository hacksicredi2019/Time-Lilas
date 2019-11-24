import { TestBed } from '@angular/core/testing';

import { RetornoPesquisaService } from './retorno-pesquisa.service';

describe('RetornoPesquisaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RetornoPesquisaService = TestBed.get(RetornoPesquisaService);
    expect(service).toBeTruthy();
  });
});
