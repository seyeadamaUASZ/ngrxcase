import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { GetUsersAction } from 'src/app/actions/users.actions';
import AppState from 'src/app/models/app-state-model';
import User from 'src/app/models/user.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users$ :Observable<User[]>;
  loading$:Observable<Boolean>;
  error$:Observable<Error>;

  constructor(private store:Store<AppState>) { }

  ngOnInit(): void {
    this.users$ = this.store.select(store => store.user.users);
    this.error$ = this.store.select(store => store.user.error);
    this.store.dispatch(new GetUsersAction());
  }

}
