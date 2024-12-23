import { Component, inject, Input, OnInit,  } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { User } from '../user.model/user.model';

@Component({
  selector: 'app-add-form-user',
  templateUrl: './add-form-user.component.html',
  styleUrls: ['./add-form-user.component.scss'],
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule]
})
export class AddFormUserComponent implements OnInit {
  form!: FormGroup;
  @Input() user!: User;

  private readonly router = inject(Router);

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      firstName: [this.user?.firstName || '', [Validators.required, Validators.minLength(3)]],
      lastName: [this.user?.lastName || '', [Validators.required, Validators.minLength(3)]],
      age: [this.user?.age || null, [Validators.required, Validators.min(18)]],
      hobbies: [this.user.hobbies]
    })
  }

  get FormGroup(): FormGroup {
    return this.form;
  }

  onDisplayList(): void {
    this.router.navigate(['/users-list']);
  }
}
