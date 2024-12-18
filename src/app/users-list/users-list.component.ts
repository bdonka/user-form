import { CommonModule } from '@angular/common';
import { Component, inject} from '@angular/core';
import { User } from '../user.model/user.model';
import { userSignal } from '../user.state';
import { MatIcon } from '@angular/material/icon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.scss',
  standalone: true,
  imports: [CommonModule, MatIcon]
})

export class UsersListComponent {
  users: User[]= [];
  private readonly router = inject(Router);

  ngOnInit(): void {
    this.users = userSignal();
    console.log('User on list in OnInit:', this.users)
  }


  onAddUserForm(): void {
    this.router.navigate(['/create-user']);
  }
}
