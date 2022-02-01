import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import AppState from './models/app-state-model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'loyerfront';
  loading$: Observable<Boolean>;
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.loading$ = this.store.select(store => store.user.loading);
  }
}
