import { CommonModule } from '@angular/common';
import { Component} from '@angular/core';
import { User } from '../user.model/user.model';
import { userSignal } from '../user.state';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.scss',
  standalone: true,
  imports: [CommonModule, MatIcon]
})
export class UsersListComponent {
  user: User | null = null;

  ngOnInit(): void {
    this.user = userSignal();
    console.log('User on list in OnInit:', this.user)
  }
}
