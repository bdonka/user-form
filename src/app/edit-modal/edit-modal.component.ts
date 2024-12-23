import { User } from './../user.model/user.model';
import { Component, inject, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { AddFormUserComponent } from '../add-form-user/add-form-user.component';
import { userSignal, usersList } from '../user.state';
import UserDTO from '../factory/user';

@Component({
  selector: 'app-edit-modal',
  templateUrl: './edit-modal.component.html',
  styleUrls: ['./edit-modal.component.scss'],
  standalone: true,
  imports: [MatDialogModule, CommonModule, AddFormUserComponent]
})
export class EditModalComponent {
  @ViewChild(AddFormUserComponent) addFormUserComponent!: AddFormUserComponent;
  readonly dialogRef = inject(MatDialogRef<AddFormUserComponent>);
  readonly data = inject<User>(MAT_DIALOG_DATA);

  user: User = {
    id: '',
    firstName: '',
    lastName: '',
    age: 18,
    hobbies: '',
  };


  ngAfterViewInit() {
    const form = this.addFormUserComponent.FormGroup;
    if (form) {
      const { id, ...rest } = this.data;
      form.setValue(rest);
    }
  }

  onFormUpdate(): void {
    const form = this.addFormUserComponent.FormGroup;

    if (form && form.valid) {
      const updatedList = usersList().map((user) => {
        if (user.id === this.data.id) {
          const newUser: User = new UserDTO().update(
            form.get('firstName')?.value,
            form.get('lastName')?.value,
            form.get('age')?.value,
            form.get('hobbies')?.value,
            user.id
          )
          return newUser
        }
        return user
      })
       userSignal.set(updatedList);
      this.dialogRef.close();
    }
  }

  onCancelClick(): void {
    this.dialogRef.close();
  }
}


//w jaki sposob mam odebrac wartosci, ktore zmienilam w formularzu
