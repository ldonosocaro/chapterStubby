import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { UserState } from 'src/app/state/user-state';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit, OnDestroy {

  public userList: User[] = [];
  private userSubscription: Subscription = Subscription.EMPTY;

  constructor(
    private userState: UserState
  ) { }

  ngOnInit(): void {
  }

  getUserList(): void {
    this.userSubscription = this.userState.userList.subscribe((data: User[]) => this.userList = data);
  }

  ngOnDestroy(): void {
    this.userSubscription.closed;
    this.userSubscription.unsubscribe();
  }

}
