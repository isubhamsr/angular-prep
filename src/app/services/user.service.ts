import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
  
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url = 'https://reqres.in/api/users';
   
  constructor(private httpClient: HttpClient) { }
  
  getUsers(){
      console.log(this.httpClient.get(this.url));
      
    return this.httpClient.get(this.url);
  }
  
}