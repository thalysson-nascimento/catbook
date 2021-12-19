import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
import { Comments } from 'src/app/service/animals/comments/comments';
import { CommentsService } from './../../../../service/animals/comments/comments.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css'],
})
export class CommentsComponent implements OnInit {
  @Input()
  id!: number;

  comments$!: Observable<Comments>;
  commentForm: FormGroup;

  constructor(
    private commentsService: CommentsService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.createBuildCommentForm();
    this.comment(this.id);
  }

  createBuildCommentForm() {
    return (this.commentForm = this.formBuilder.group({
      comment: ['', Validators.maxLength(300)],
    }));
  }

  comment(id: number): Observable<Comments> {
    return (this.comments$ = this.commentsService.searchComment(id));
  }

  create(): void {
    const comment = this.commentForm.get('comment')?.value ?? '';
    this.comments$ = this.commentsService.addComment(this.id, comment).pipe(
      switchMap(() => {
        return this.commentsService.searchComment(this.id);
      }),
      tap(() => {
        this.commentForm.reset();
        alert('Comentário salvo com sucesso')
      })
    );
  }
}
