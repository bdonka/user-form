import { Component } from '@angular/core';
import { EditModalComponent } from './edit-modal/edit-modal.component';
import { CurrentUserDisplayComponent } from './current-user-display/current-user-display.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { UserCreateFormComponent } from './user-create-form/user-create-form.component';
import { AddFormUserComponent } from './add-form-user/add-form-user.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [
    RouterModule,
    CommonModule,
    CurrentUserDisplayComponent,
    EditModalComponent,
    FormsModule,
    UserCreateFormComponent,
    AddFormUserComponent
  ]
})
export class AppComponent {
}
