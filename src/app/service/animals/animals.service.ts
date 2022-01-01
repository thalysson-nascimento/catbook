import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { catchError, mapTo } from 'rxjs/operators';
import { BaseUrlService } from './../base-url/base-url.service';
import { TokenService } from './../user/token/token.service';
import { Animal, Animals } from './animals.d';

const NOT_MODIFFIED = '304';

@Injectable({
  providedIn: 'root',
})
export class AnimalsService {
  constructor(
    private httpCliente: HttpClient,
    private baseUrlService: BaseUrlService,
    private tokenService: TokenService
  ) {}

  listUser(userName: string): Observable<Animals> {
    return this.httpCliente.get<Animals>(
      this.baseUrlService.path(`/${userName}/photos`)
    );
  }

  searchForId(id: number): Observable<Animal> {
    return this.httpCliente.get<Animal>(
      this.baseUrlService.path(`/photos/${id}`)
    );
  }

  deleteAnimal(id: number): Observable<Animal> {
    return this.httpCliente.delete<Animal>(
      this.baseUrlService.path(`/photos/${id}`)
    );
  }

  likeAnimal(id: number): Observable<boolean> {
    return this.httpCliente
      .post<Animal>(
        this.baseUrlService.path(`/photos/${id}/like`),
        {},
        { observe: 'response' }
      )
      .pipe(
        mapTo(true),
        catchError((error) => {
          return error.status === NOT_MODIFFIED ? of(false) : throwError(error);
        })
      );
  }

  uploudImageAnimal(
    description: string,
    allowComments: boolean,
    file: File) {
      const formData = new FormData();
      formData.append('description', description);
      formData.append('allowComments', allowComments ? 'true' : 'false');
      formData.append('imageFile', file);

      return this.httpCliente.post(this.baseUrlService.path(`/photos/upload`), formData, {
        observe: 'events',
      })
    }
}
