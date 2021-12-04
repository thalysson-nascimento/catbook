import { Component, Input, OnInit } from '@angular/core';
import { Animals } from './../../service/animals/animals.d';

@Component({
  selector: 'app-grid-animals-photos',
  templateUrl: './grid-animals-photos.component.html',
  styleUrls: ['./grid-animals-photos.component.scss'],
})
export class GridAnimalsPhotosComponent implements OnInit {
  @Input() animals!: Animals;

  constructor() {}

  ngOnInit() {}
}
