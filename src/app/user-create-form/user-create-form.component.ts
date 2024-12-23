
import { AddFormUserComponent } from './../add-form-user/add-form-user.component';

import {Component, ViewChild} from '@angular/core';
import { User } from '../user.model/user.model';
import { Router } from '@angular/router';
import { userSignal, usersList } from '../user.state';
import { CommonModule } from '@angular/common';
import { FormGroup} from '@angular/forms';
import UserDTO from '../factory/user';

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
    id: '',
    firstName: '',
    lastName: '',
    age: 18,
    hobbies: '',
  };

  constructor(private router: Router) { }


  onFormSubmit() {
    const form: FormGroup = this.addFormUserComponent.form;

    if (form && form.valid) {
      const newUser: User = new UserDTO().create(
        form.get('firstName')?.value,
        form.get('lastName')?.value,
        form.get('age')?.value,
        form.get('hobbies')?.value
      )

      userSignal.set([...usersList(), newUser]);

      this.router.navigate(['/current-user']);
    }
  }

  onDisplayList(): void {
    this.router.navigate(['/users-list']);
  }
}



///// dodac id usera, wygenerowac go (paczka id), rozpoznawanie id, przechwycic id w edycji i bedzie
