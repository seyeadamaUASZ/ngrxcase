import User from '../models/user.model';
import {UserAction, UsersActionsTypes} from '../actions/users.actions';

export interface UserState{
  users:User[],
  loading: boolean,
  error:string | any
}


const initialState: UserState = {
  users:[],
      loading: false,
      error: ""
  }

export function UsersReducer(state:UserState=initialState,action : UserAction){
  switch (action.type){
    case UsersActionsTypes.ADD_USER:
      return {
        ...state,
        loading:true
      }
    case UsersActionsTypes.ADD_USER_SUCCESS:
      return {
        ...state,
        users: [action.payload, ...state.users],
        loading: false
      }
    case UsersActionsTypes.ADD_USER_FAIL:
      return {
        ...state,
        error:action.payload,
        loading: false
      }

    case UsersActionsTypes.DELETE_USER:
      return {
        ...state,
        loading: true
      }

    case UsersActionsTypes.DELETE_USER_SUCCESS:
      let updatedUsers = [...state.users];
      updatedUsers.splice(action.payload,1);
      return {
        ...state,
        users:updatedUsers,
        loading:false
      }

    case UsersActionsTypes.DELETE_USER_FAIL:
      return {
        ...state,
        error:action.payload,
        loading:false
      }

    case UsersActionsTypes.GET_USERS:
      return {
        ...state,
        loading:true
      }

    case UsersActionsTypes.GET_USERS_SUCCESS:
      return {
        ...state,
        users:action.payload,
        loading:false
      }

    case UsersActionsTypes.GET_USER_FAIL:
      return {
        ...state,
        error: action.payload,
        loading: false
      }

      default:
      return state;
}


}
