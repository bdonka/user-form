import { usersList } from './../user.state';
import { CommonModule } from '@angular/common';
import { Component, computed, effect, inject} from '@angular/core';
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
  private readonly router = inject(Router);

  constructor() {
    effect(() => {
      localStorage.setItem('usersList', JSON.stringify(this.users()));
    });
  }

  users = computed(() => {
    return userSignal();
  })

  onRemove(id: User['id']): void {
    const updatedList = this.users().filter((user) => {
      return user.id !== id
    })
    userSignal.set(updatedList);
  }


  onAddUserForm(): void {
    this.router.navigate(['/create-user']);
  }
}
