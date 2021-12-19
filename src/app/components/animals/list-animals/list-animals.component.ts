import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Animals } from 'src/app/service/animals/animals';

@Component({
  selector: 'app-list-animals',
  templateUrl: './list-animals.component.html',
  styleUrls: ['./list-animals.component.scss'],
})
export class ListAnimalsComponent implements OnInit {
  @Input()
  animals!: Animals;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.animalList();
  }

  private animalList() {
    this.activatedRoute.params.subscribe((paramsListAnimal) => {
      this.animals = this.activatedRoute.snapshot.data['animals']; // pegando o parâmetro 'animals' do resolver em animals.routing
    });
  }
}
