import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class DeveloperService {
  constructor(private http: HttpClient) {}

  registrate(developer: any) {
    return this.http.post(
      `${environment.urlApi}/developer/regisrtation`,
      developer
    );
  }

  auth(developer: any) {
    return this.http.post(`${environment.urlApi}/developer/auth`, developer);
  }

  newRealtor(realtor: any) {
    return this.http.post(
      `${environment.urlApi}/developer/new-realtor`,
      realtor
    );
  }

  realtors(developer_id: any) {
    return this.http.post(
      `${environment.urlApi}/developer/realtors`,
      developer_id
    );
  }
}
