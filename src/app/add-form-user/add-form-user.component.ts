import { Component, Input, ViewChild } from '@angular/core';
import { User } from '../user.model/user.model';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-form-user',
  templateUrl: './add-form-user.component.html',
  styleUrls: ['./add-form-user.component.scss'],
  standalone: true,
  imports: [FormsModule, CommonModule]
})
export class AddFormUserComponent {
  @Input() user: User = {
    firstName: '',
    lastName: '',
    age: 18,
    hobbies: []
  };
  @ViewChild('userForm', { static: false }) form!: NgForm;
}
