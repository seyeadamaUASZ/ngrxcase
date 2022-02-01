import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AddUserAction } from 'src/app/actions/users.actions';
import AppState from 'src/app/models/app-state-model';
import User from 'src/app/models/user.model';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.scss']
})
export class AdduserComponent implements OnInit {

  user :User={
    id:null,
    nom:'',
    prenom:'',
    email:'',
    telephone:'',
    profilGetDto:null,
    profil:null
  }
  constructor(private store:Store<AppState>) { }

  ngOnInit(): void {
  }

  createUser(){
    this.store.dispatch(new AddUserAction({...this.user}))
    this.user.nom='';
    this.user.prenom='';
    this.user.email='';
    this.user.telephone='';
  }

}
