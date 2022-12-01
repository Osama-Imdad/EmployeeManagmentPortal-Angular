import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, map, Observable, retry, throwError } from 'rxjs';
import { Ilogin, ILoginResponse } from 'src/app/shared/interfaces/login';
import { IRegister, IRegisterResponse } from 'src/app/shared/interfaces/registration';
import {API_ENDPOINTS} from '../../shared/api-Endpoints/global'


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient,private router:Router) { }

  //logout method
// Clears the token
async logout() {
  localStorage.removeItem('accessToken');
  this.router.navigate(['']);
}
public setAccessToken(token: string): void {
  localStorage.setItem('accessToken', token);
}
public getAccessToken(): string | null {
  return localStorage.getItem('accessToken');
}
public isLogin() {
  return this.getAccessToken()!==null;
}
//login Service
login(loginObj: Ilogin): Observable<ILoginResponse> {
  debugger
  return this.http.post(API_ENDPOINTS.loginIn, loginObj).pipe(
    map<any, any>(res => {
      return res
    }),retry(1),

  )
}

signUp(signUpObj: IRegister): Observable<IRegisterResponse> {
  return this.http.post(API_ENDPOINTS.signUp, signUpObj).pipe(
    map<any, any>(res => {
      return res
    })
  )
}

public isAuthenticated(): boolean | null | '' {
  let accessToken = this.getAccessToken();
  return accessToken && accessToken.length > 0;
}






 // Error Handling Funcation
  handleError(error:any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
        // client-side error
        errorMessage = `Error: ${error.error.message}`;
    } else {
        // server-side error
        errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(` Error From Handeler: ${errorMessage}`);

    return throwError(errorMessage);
}
}
