import { computed, signal } from '@angular/core';
import { User } from './user.model/user.model';

export const userSignal = signal<User[]>([]);

export function updateUser(updatedUsers: User[]) {
  userSignal.set(updatedUsers);
}

export function addUser(newUser: User) {
  const currentUsers = userSignal();
  userSignal.set([...currentUsers, newUser])
}

export function editUser(index: number, updatedUser: User) {
  const currentUsers = userSignal();
  const newUsers = [...currentUsers];
  newUsers[index] = updatedUser;
  userSignal.set(newUsers);
}

export const usersList = computed(()=> userSignal());
