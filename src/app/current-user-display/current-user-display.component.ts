import { AddFormUserComponent } from './../add-form-user/add-form-user.component';

import { ChangeDetectionStrategy, ChangeDetectorRef, Component, effect, inject, OnInit, ViewChild } from '@angular/core';
import { updateUser, userSignal } from '../user.state';
import { EditModalComponent } from '../edit-modal/edit-modal.component';
import { MatDialog } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { fromEvent, map } from 'rxjs';
import { User } from '../user.model/user.model';


@Component({
  selector: 'app-current-user-display',
  templateUrl: './current-user-display.component.html',
  styleUrls: ['./current-user-display.component.scss'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, AddFormUserComponent]
})
export class CurrentUserDisplayComponent implements OnInit{
  @ViewChild(AddFormUserComponent) addFormUserComponent!: AddFormUserComponent;

  userSignal = userSignal;
  readonly dialog = inject(MatDialog);
  formInitialized: boolean = false;
  storage = toSignal(fromEvent(window, 'storage'));

  private readonly router = inject(Router);
  private readonly cdRef = inject(ChangeDetectorRef);

  constructor() {
    // this.storage = toSignal(fromEvent(window, 'storage').pipe(
    //   map(() => {
    //     const savedUser = localStorage.getItem('user');
    //     return savedUser ? JSON.parse(savedUser) : null;
    //   })
    // ));

    effect(() => {
      const currentUser = this.userSignal();
      console.log('Current user has changed:', currentUser);
      this.cdRef.markForCheck();
    })
  }

  ngOnInit() {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      const userData: User = JSON.parse(savedUser);
      updateUser(userData);
    } else {
    console.log('No user found in localStorage.');
  }

    const currentUser = this.userSignal();
    console.log('User on list in OnInit:', currentUser);
  }


  openDialog(): void {
    const currentUser = this.userSignal();

    if (currentUser) {
      const dialogRef = this.dialog.open(EditModalComponent, {
        data: currentUser
      });

      dialogRef.afterClosed().subscribe(result => {
         console.log('Dialog result:', result);
        if (result) {
          updateUser(result);
          this.cdRef.markForCheck();
        } else {
    console.log('No result from dialog, user not updated.');
  }
      });
    }
  }

  onDisplayList(): void {
    this.router.navigate(['/users-list']);
  }
}
