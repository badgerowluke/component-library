import { TestBed } from '@angular/core/testing';

import { TableComponentService } from './table-component.service';

describe('TableComponentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TableComponentService = TestBed.get(TableComponentService);
    expect(service).toBeTruthy();
  });
  
});
