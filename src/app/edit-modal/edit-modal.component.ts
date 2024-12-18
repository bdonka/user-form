import { Component, inject, model, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { User } from '../user.model/user.model';
import { CommonModule } from '@angular/common';
import { AddFormUserComponent } from '../add-form-user/add-form-user.component';
import { NgForm } from '@angular/forms';
import { userSignal } from '../user.state';

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

  onFormUpdate() {
    const form: NgForm = this.addFormUserComponent.form;


    if (form && form.valid) {
      // userSignal.update(currentValue => ({
      //   ...currentValue,
      //   ...this.addFormUserComponent.user
      // }));
      // console.log('Updated Signal:', userSignal());
      
      this.dialogRef.close();
    }
  }

  onCancelClick(): void {
    this.dialogRef.close();
  }
}
