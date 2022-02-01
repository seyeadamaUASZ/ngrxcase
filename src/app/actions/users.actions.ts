import {Action} from '@ngrx/store';
import User from '../models/user.model';

export enum UsersActionsTypes{
  ADD_USER ='[USER] Add User',
  ADD_USER_SUCCESS = '[USER] Add User success',
  ADD_USER_FAIL = '[USER] Add User Fail',


  GET_USERS = '[USER] Get Users',
  GET_USERS_SUCCESS = '[USER] Get Users Success',
  GET_USER_FAIL = '[USER] Get Users Fail',

  DELETE_USER = '[USER] Delete User',
  DELETE_USER_SUCCESS = '[USER] Delete User Success',
  DELETE_USER_FAIL = '[USER] Delete User Fail',
}

/**
 * get users
 */
export class GetUsersAction implements Action{
  readonly type = UsersActionsTypes.GET_USERS;
}


// tslint:disable-next-line:max-classes-per-file
export class GetUserSuccessAction implements Action{
  readonly type = UsersActionsTypes.GET_USERS_SUCCESS;
  constructor(public payload:User[]) {
  }
}

// tslint:disable-next-line:max-classes-per-file
export class GetUsersFailAction implements Action{
  readonly type = UsersActionsTypes.GET_USER_FAIL;
  constructor(public payload:any) {
  }
}

// tslint:disable-next-line:max-classes-per-file
export class AddUserAction implements Action{
  readonly type = UsersActionsTypes.ADD_USER;
  constructor(public payload:User) {
  }
}

// tslint:disable-next-line:max-classes-per-file
export class AddUserSuccessAction implements Action{
  readonly type = UsersActionsTypes.ADD_USER_SUCCESS;
  constructor(public payload:User) {
  }
}

// tslint:disable-next-line:max-classes-per-file
export class AddUserFailAction implements  Action{
  readonly type=UsersActionsTypes.ADD_USER_FAIL;
  constructor(public payload:any) {
  }
}

/**
 * delete user
 */

// tslint:disable-next-line:max-classes-per-file
export class DeleteUserAction implements Action{
  readonly type = UsersActionsTypes.DELETE_USER;
  constructor(public payload:number) {
  }
}

// tslint:disable-next-line:max-classes-per-file
export class DeleteUserSuccessAction implements Action{
  readonly type = UsersActionsTypes.DELETE_USER_SUCCESS;
  constructor(public payload:string|any) {
  }
}

// tslint:disable-next-line:max-classes-per-file
export class DeleteUserFailAction implements Action{
  readonly type=UsersActionsTypes.DELETE_USER_FAIL;
  constructor(public payload:any) {
  }
}


export type UserAction =
  AddUserAction |
  AddUserSuccessAction |
  AddUserFailAction |
  DeleteUserAction |
  DeleteUserSuccessAction |
  DeleteUserFailAction |
  GetUsersAction |
  GetUserSuccessAction |
  GetUsersFailAction;






