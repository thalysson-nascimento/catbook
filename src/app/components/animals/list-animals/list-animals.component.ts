import { Component, Input, OnInit } from '@angular/core';
import { Animals } from './../../../service/animals/animals.d';
import { AnimalsService } from './../../../service/animals/animals.service';
import { UserAuthService } from './../../../service/user/user-auth/user-auth.service';

@Component({
  selector: 'app-list-animals',
  templateUrl: './list-animals.component.html',
  styleUrls: ['./list-animals.component.scss'],
})
export class ListAnimalsComponent implements OnInit {
  @Input()
  animals!: Animals;

  constructor(
    private userService: UserAuthService,
    private animalsService: AnimalsService
  ) {}

  ngOnInit(): void {
    this.userService.getUser().subscribe((user) => {
      const userName = user.name ?? '';
      this.animalsService.listUser(userName).subscribe((animals) => {
        this.animals = animals;
      });
    });
  }
}
