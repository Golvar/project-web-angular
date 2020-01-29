import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  baseUrl = environment.backend;
  
  constructor(private http: HttpClient) {
    this.baseUrl += '/users';
  }

  login(loginP:string, passwordP:string ): Observable<any> {
    const loginModel = { login: loginP, password: passwordP};
    // return this.http.post(`${this.baseUrl}/login`, {login, password, observe: 'response'});
    return this.http.post(`${this.baseUrl}/login`, loginModel);
  }

  logout(){
    sessionStorage.removeItem('jwt_token');
    this.isLoggedIn();
  }

  getToken() {
    return sessionStorage.getItem('jwt_token');
  }
  
  isLoggedIn(): Observable<Boolean> {
    let $isAuth = sessionStorage.getItem('jwt_token') ? true : false;
    return of($isAuth);
  }

}
