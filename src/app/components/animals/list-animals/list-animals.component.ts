import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Animals } from 'src/app/service/animals/animals';
import { AnimalsService } from './../../../service/animals/animals.service';
import { UserAuthService } from './../../../service/user/user-auth/user-auth.service';

@Component({
  selector: 'app-list-animals',
  templateUrl: './list-animals.component.html',
  styleUrls: ['./list-animals.component.scss'],
})
export class ListAnimalsComponent implements OnInit {
  @Input()
  animals$!: Observable<Animals>;

  constructor(
    private userService: UserAuthService,
    private animalsService: AnimalsService
  ) {}

  ngOnInit(): void {
    this.animalList();
  }

  private animalList() {
    this.animals$ = this.userService.getUser().pipe(
      switchMap((user) => {
        const userName = user.name ?? '';
        return this.animalsService.listUser(userName);
      })
    );
  }
}
