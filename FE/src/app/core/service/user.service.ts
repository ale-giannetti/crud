import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {UserModel} from "../../shared/model/User-model";


@Injectable({
  providedIn: 'root'
})
export class UserService {

  url: string = "http://localhost:8080/users"

  constructor(private http: HttpClient) { }

  insertUser(user: any){
    return this.http.post(this.url, user);
  }

  getUser() : Observable<any> {
    return this.http.get<UserModel[]>(this.url);
  }

  getUserById(id: string) : Observable<any> {
    return this.http.get<any>(this.url + id.toString());
  }

  updateUser(user: any) {
    this.http.put(this.url, user);
  }

  deleteUserById(id: number) :void {
    this.http.delete(this.url+'/'+id.toString());
  }

}

