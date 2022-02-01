import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
 api = environment.baseUrl;

  constructor(private http:HttpClient) { }

  allUsers(){
    return  this.http.get(this.api+'utilisateurs');
  }

  saveUser(data){
    return this.http.post(this.api+'utilisateurs/create',data);
  }
}
