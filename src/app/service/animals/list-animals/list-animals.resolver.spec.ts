import { TestBed } from '@angular/core/testing';
import { ListAnimalsResolver } from './list-animals.resolver';


describe('ListAnimalsResolver', () => {
  let service: ListAnimalsResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListAnimalsResolver);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
