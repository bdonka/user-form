import { AddFormUserComponent } from './../add-form-user/add-form-user.component';

import { ChangeDetectionStrategy, ChangeDetectorRef, Component, computed, effect, inject, OnInit, Signal, ViewChild } from '@angular/core';
import { userSignal, usersList } from '../user.state';
import { EditModalComponent } from '../edit-modal/edit-modal.component';
import { MatDialog } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { fromEvent} from 'rxjs';
import { User } from '../user.model/user.model';


@Component({
  selector: 'app-current-user-display',
  templateUrl: './current-user-display.component.html',
  styleUrls: ['./current-user-display.component.scss'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule]
})
export class CurrentUserDisplayComponent{
  @ViewChild(AddFormUserComponent) addFormUserComponent!: AddFormUserComponent;


  readonly dialog = inject(MatDialog);
  private readonly router = inject(Router);
  private readonly cdRef = inject(ChangeDetectorRef);

  formInitialized: boolean = false;
  storage = toSignal(fromEvent(window, 'storage'));
  users = computed(() => usersList()) as Signal<User[]>;

  constructor() {

    effect(() => {
      this.cdRef.markForCheck();
    })
  }

  openDialog(index: number, user: User): void {
      const dialogRef = this.dialog.open(EditModalComponent, {
        data: user,
      });

      dialogRef.afterClosed().subscribe((result) => {
        if (result) {
          const updatedUsers = this.users().map((user, i) => {
            if (i === index) {
              return result;
            }
            return user;
          })
          userSignal.set(updatedUsers);
        } else {
          console.log('No result from dialog, user not updated.');
        }
      });
  }

  onDisplayList(): void {
    this.router.navigate(['/users-list']);
  }
}

