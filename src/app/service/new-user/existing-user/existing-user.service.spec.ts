/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ExistingUserService } from './existing-user.service';

describe('Service: ExistingUser', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ExistingUserService]
    });
  });

  it('should ...', inject([ExistingUserService], (service: ExistingUserService) => {
    expect(service).toBeTruthy();
  }));
});
