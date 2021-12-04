import { Component, Input, OnInit } from '@angular/core';
import { BaseUrlService } from './../../../service/base-url/base-url.service';

@Component({
  selector: 'app-animal',
  templateUrl: './animal.component.html',
  styleUrls: ['./animal.component.scss'],
})
export class AnimalComponent implements OnInit {
  private urlOriginal = '';

  @Input()
  description: '';

  @Input() set url(url: string) {
    if (url.startsWith('data')) {
      this.urlOriginal = url;
    } else {
      this.urlOriginal = this.baseUrlService.path(`/imgs/${url}`);
      console.log(this.urlOriginal)
    }
  }

  get url(): string {
    return this.urlOriginal;
  }

  constructor(
    private baseUrlService: BaseUrlService
  ) {}

  ngOnInit() {}
}
