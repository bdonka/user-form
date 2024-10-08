import { AddFormUserComponent } from './../add-form-user/add-form-user.component';

import { AfterViewInit, Component, ViewChild} from '@angular/core';
import { User } from '../user.model/user.model';
import { Router } from '@angular/router';
import { updateUser, userSignal } from '../user.state';
import { CommonModule } from '@angular/common';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user-create-form',
  templateUrl: './user-create-form.component.html',
  styleUrls: ['./user-create-form.component.scss'],
  standalone: true,
  imports: [AddFormUserComponent, CommonModule]
})
export class UserCreateFormComponent implements AfterViewInit{
  @ViewChild(AddFormUserComponent) addFormUserComponent!: AddFormUserComponent;

  user: User = {
    firstName: '',
    lastName: '',
    age: 18,
    hobbies: [],
  };

  constructor(private router: Router) { }

  ngAfterViewInit(): void {
    if (!this.addFormUserComponent) {
      console.error('not working')
    }
  }

  onFormSubmit() {
    const form: NgForm = this.addFormUserComponent.form;

    if (form && form.valid) {
      userSignal.set({
        firstName: this.addFormUserComponent.user.firstName,
        lastName: this.addFormUserComponent.user.lastName,
        age: this.addFormUserComponent.user.age,
        hobbies: this.addFormUserComponent.user.hobbies
      });
      updateUser({
        firstName: this.addFormUserComponent.user.firstName,
        lastName: this.addFormUserComponent.user.lastName,
        age: this.addFormUserComponent.user.age,
        hobbies: this.addFormUserComponent.user.hobbies
      });
      this.router.navigate(['/current-user']);
    }
  }
}
