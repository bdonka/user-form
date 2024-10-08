import { signal } from '@angular/core';
import { User } from './user.model/user.model';

const USER_KEY = 'user';
const savedUser = localStorage.getItem(USER_KEY);
const initialUser = savedUser ? JSON.parse(savedUser) : null;

export const userSignal = signal<User | null>(initialUser);

export function updateUser(newUser: User) {
  console.log('Attempting to update user:', newUser);
  userSignal.set(newUser);
  localStorage.setItem(USER_KEY, JSON.stringify(newUser));
   console.log('User updated and saved to localStorage:', newUser);
}
