import { AddFormUserComponent } from './../add-form-user/add-form-user.component';

import {Component, ViewChild} from '@angular/core';
import { User } from '../user.model/user.model';
import { Router } from '@angular/router';
import { userSignal, usersList } from '../user.state';
import { CommonModule } from '@angular/common';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user-create-form',
  templateUrl: './user-create-form.component.html',
  styleUrls: ['./user-create-form.component.scss'],
  standalone: true,
  imports: [AddFormUserComponent, CommonModule]
})
export class UserCreateFormComponent{
  @ViewChild(AddFormUserComponent) addFormUserComponent!: AddFormUserComponent;

  user: User = {
    firstName: '',
    lastName: '',
    age: 18,
    hobbies: [],
  };

  constructor(private router: Router) { }

  onFormSubmit() {
    const form: NgForm = this.addFormUserComponent.form;

    if (form && form.valid) {
      const newUser: User = {
        firstName: this.addFormUserComponent.user.firstName,
        lastName: this.addFormUserComponent.user.lastName,
        age: this.addFormUserComponent.user.age,
        hobbies: this.addFormUserComponent.user.hobbies
      };

      userSignal.set([...usersList(), newUser]);

      this.router.navigate(['/current-user']);
    }
  }

  onDisplayList(): void {
    this.router.navigate(['/users-list']);
  }
}



///// dodac id usera, wygenerowac go (paczka id), rozpoznawanie id, przechwycic id w edycji i bedzie
