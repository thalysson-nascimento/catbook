/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { UsernameIqualsPasswordService } from './username-iquals-password.service';

describe('Service: UsernameIqualsPassword', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UsernameIqualsPasswordService]
    });
  });

  it('should ...', inject([UsernameIqualsPasswordService], (service: UsernameIqualsPasswordService) => {
    expect(service).toBeTruthy();
  }));
});
