import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { AddUserAction, AddUserFailAction, AddUserSuccessAction, GetUsersAction, GetUsersFailAction, GetUserSuccessAction, UsersActionsTypes } from "../actions/users.actions";
import { map, mergeMap, catchError } from 'rxjs/operators';
import { ApiService } from "../services/api.service";
import { of } from "rxjs";

@Injectable()
export class UserEffects{
  constructor(
    private actions$: Actions,
    private service: ApiService
  ) { }

  @Effect() getUsers$ = this.actions$
   .pipe(
     ofType<GetUsersAction>(UsersActionsTypes.GET_USERS),
     mergeMap(
        ()=>this.service.allUsers()
        .pipe(
          map((data:any)=>{
            console.log(data);
            return new GetUserSuccessAction(data)
          }),
          catchError(error=>of(new GetUsersFailAction(error)))
        )
     )
   )


   @Effect() addUser$ = this.actions$
   .pipe(
     ofType<AddUserAction>(UsersActionsTypes.ADD_USER),
     mergeMap(
       (data)=>this.service.saveUser(data.payload)
       .pipe(
         map(data2=>{
           return new AddUserSuccessAction(data.payload)
         }),
         catchError(error=>of(new AddUserFailAction(error)))
       )
     )
   )



}
