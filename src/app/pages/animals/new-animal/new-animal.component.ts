import { HttpEvent, HttpEventType } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { finalize } from 'rxjs/operators';
import { AnimalsService } from './../../../service/animals/animals.service';

@Component({
  selector: 'app-new-animal',
  templateUrl: './new-animal.component.html',
  styleUrls: ['./new-animal.component.css'],
})
export class NewAnimalComponent implements OnInit {
  animalForm!: FormGroup;
  file!: File;
  preview!: string;
  percentageCompleted = 0;

  constructor(
    private animalsService: AnimalsService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.createFormBuilderUploadPhotoAnimals();
  }

  createFormBuilderUploadPhotoAnimals() {
    this.animalForm = this.formBuilder.group({
      file: ['', Validators.required],
      description: ['', Validators.maxLength(300)],
      allowComments: [true],
    });
  }

  upload() {
    const description = this.animalForm.get('description')?.value ?? '';
    const allowComments = this.animalForm.get('allowComments')?.value ?? false;

    this.animalsService.uploudImageAnimal(
      description,
      allowComments,
      this.file
    ).pipe(
      finalize(() => {
        this.router.navigate(['/animals']);
      })
    ).subscribe((event: HttpEvent<any>) => {
      if (event.type === HttpEventType.UploadProgress) {
        const total = event.total ?? 1;
        this.percentageCompleted = Math.round(100*(event.loaded / total))
      }
    }, (error) => console.log(error));
  }

  fileRegister(fileUploud: any): void {
    console.log(fileUploud)
    const [file] = fileUploud?.files;
    this.file = file;
    const reader = new FileReader();
    reader.onload = (event: any) => (this.preview = event.target.result);
    reader.readAsDataURL(file);
  }
}
