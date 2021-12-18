import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
    private animalsService: AnimalsService,
    private router: Router
  ) { }

  ngOnInit() {
    this.animalId = this.activatedRouter.snapshot.params.animalId;
    console.log('===>', this.animalId)
    this.animal$ = this.animalsService.searchForId(this.animalId);
  }

  like() {
    this.animalsService.likeAnimal(this.animalId)
    .subscribe((like) => {
      if (like) {
        this.animal$ = this.animalsService.searchForId(this.animalId)
      }
    });
  }

  delete() {
    return this.animalsService
    .deleteAnimal(this.animalId)
    .subscribe(() => {
      this.router.navigate(['/animals']);
    }, (error) => {
      return console.log(error);
    })
  }
}
