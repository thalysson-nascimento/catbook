/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { BaseUrlService } from './base-url.service';

describe('Service: BaseUrl', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BaseUrlService]
    });
  });

  it('should ...', inject([BaseUrlService], (service: BaseUrlService) => {
    expect(service).toBeTruthy();
  }));
});
