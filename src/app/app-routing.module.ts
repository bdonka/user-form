import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserCreateFormComponent } from './user-create-form/user-create-form.component';
import { CurrentUserDisplayComponent } from './current-user-display/current-user-display.component';
import { UsersListComponent } from './users-list/users-list.component';

const routes: Routes = [
  { path: 'create-user', component: UserCreateFormComponent },
  { path: 'current-user', component: CurrentUserDisplayComponent },
  { path: 'users-list', component: UsersListComponent},
  { path: '', redirectTo: '/create-user', pathMatch: 'full' },
  { path: '**', redirectTo: '/create-user' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export { routes };
