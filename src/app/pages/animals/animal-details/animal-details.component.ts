import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Animal } from 'src/app/service/animals/animals';
import { AnimalsService } from './../../../service/animals/animals.service';

@Component({
  selector: 'app-animal-details',
  templateUrl: './animal-details.component.html',
  styleUrls: ['./animal-details.component.scss']
})
export class AnimalDetailsComponent implements OnInit {
  animalId!: number;
  animal$!: Observable<Animal>;

  constructor(
    private activatedRouter: ActivatedRoute,
    private animalsService: AnimalsService
  ) { }

  ngOnInit() {
    this.animalId = this.activatedRouter.snapshot.params.animalId;
    this.animal$ = this.animalsService.searchForId(this.animalId);
  }
}
