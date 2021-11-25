/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ExistingEmailService } from './existing-email.service';

describe('Service: ExistingEmail', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ExistingEmailService]
    });
  });

  it('should ...', inject([ExistingEmailService], (service: ExistingEmailService) => {
    expect(service).toBeTruthy();
  }));
});
