import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const APIURL = environment.api_url;

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUsers() {
    const httpHeaders = new HttpHeaders();
    httpHeaders.append('Content-Type', 'application/json');
    httpHeaders.append('Accept', 'application/json');
    return this.http.get(APIURL + 'api/v1/users',{headers: httpHeaders});
  }
 
  createUser(payload) {
    const httpHeaders = new HttpHeaders();
    httpHeaders.append('Content-Type', 'application/json');
    httpHeaders.append('Accept', 'application/json');
    return this.http.post(APIURL + 'api/v1/users', payload, {headers: httpHeaders});
  }

  updateUser(payload){
    const httpHeaders = new HttpHeaders();
    httpHeaders.append('Content-Type', 'application/json');
    httpHeaders.append('Accept', 'application/json');
    return this.http.put(APIURL + 'api/v1/users/'+payload.user.id,payload,{headers: httpHeaders});
  }

  deleteUser(id){
    const httpHeaders = new HttpHeaders();
    httpHeaders.append('Content-Type', 'application/json');
    httpHeaders.append('Accept', 'application/json');
    return this.http.delete(APIURL + 'api/v1/users/'+id, {headers: httpHeaders});
  }
}
