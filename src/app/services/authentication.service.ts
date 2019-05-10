import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(
    public http:HttpClient
    ) { }

  login(user:string,password:string){
    return this.http
      .post<any>(`/auth/login`,{user,password})
      .pipe(
        map(user=>{
          if(user && user.token){
            localStorage.setItem('CurrentUser',JSON.stringify(user))
          }
          return user;
        })
      )
    }
    logOut(){
      localStorage.removeItem('CurrentUser');
      this.http.get(`auth/logout`).subscribe(data=>{
        console.log(data);
      })
    }
}
