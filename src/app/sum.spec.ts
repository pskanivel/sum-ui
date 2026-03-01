import { TestBed } from '@angular/core/testing';

import { Sum } from './sum';

describe('Sum', () => {
  let service: Sum;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Sum);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
