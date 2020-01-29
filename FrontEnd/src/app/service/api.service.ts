import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


import { Observable } from 'rxjs';
import { Product } from '../models/product';
import { environment } from '../../environments/environment';
import { User } from '../models/user'

import { tap,map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
    public getProducts () : Observable<Product[]> {
        return this.http.get<Product[]>(environment.backendProduct);
    }

    getProduct () : Observable<Product[]> {
      return this.http.get<Product[]> ( environment.backendProduct).pipe (tap((value) => console.log(value)) );
    }

    public getOneProduct(name:String) : Observable<Product[]> {
      return  this.http.get<Product[]> (environment.backendProduct).pipe(map(p => p.filter(p=>p.name == name)));
    }

    public addClient(user:User): Observable<any>{
      const modelUser = {name: user.name, firstname: user.firstName, adress: user.adress, cp: user.cp, ville: user.ville, tel: user.tel, email: user.email, login: user.login, password: user.password, civilite: user.civilite };
      return this.http.post(`${environment.backend}/users/register`, modelUser);
    }    

    public updateClient(user:User): Observable<any>{
      console.log(user);
      const httpAttributes = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json',
          'Authorization': 'Bearer ' + sessionStorage.getItem("jwt_token")
        })
      };
      const modelUser = {name: user.name, firstname: user.firstName, adress: user.adress, cp: user.cp, ville: user.ville, tel: user.tel, email: user.email, login: user.login, password: user.password, civilite: user.civilite };
      return this.http.post(`${environment.backend}/users/update`, modelUser, httpAttributes);
    }

    public getClient(token): Observable<User>{
      const httpAttributes = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json',
          'Authorization': 'Bearer ' + sessionStorage.getItem("jwt_token")
        })
      };
      return this.http.get<User> (`${environment.backend}/users/get`, httpAttributes);
    }
}

