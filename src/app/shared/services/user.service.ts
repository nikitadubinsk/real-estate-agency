import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  auth(user: any) {
    return this.http.post(`${environment.urlApi}/user/auth`, user);
  }

  registration(user: any) {
    return this.http.post(`${environment.urlApi}/user/registration`, user);
  }

  likesAd(user_id: number) {
    return this.http.get(`${environment.urlApi}/user/ads/${user_id}`);
  }

  account(user_id: number) {
    return this.http.get(`${environment.urlApi}/user/${user_id}`);
  }

  likeAd(arg: any) {
    return this.http.put(`${environment.urlApi}/user/likeAd`, arg);
  }

  ads(arg: any) {
    return this.http.post(`${environment.urlApi}/user/ads`, arg);
  }

  changeLike(likes: any) {
    return this.http.put(`${environment.urlApi}/user/changelikes`, likes);
  }
}
