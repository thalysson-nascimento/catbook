import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseUrlService } from '../../base-url/base-url.service';
import { Comments } from './comments';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor(
    private baseUrlService: BaseUrlService,
    private httpClient: HttpClient
  ) {}

  ngOnInit(): void {}

  searchComment(id: number): Observable<Comments> {
    return this.httpClient.get<Comments>(
      this.baseUrlService.path(`/photos/${id}/comments`)
    );
  }

  addComment(id: number, commentText: string): Observable<Comment> {
    return this.httpClient.post<Comment>(
      this.baseUrlService.path(`/photos/${id}/comments`), {
        commentText
      },
    )
  }
}
