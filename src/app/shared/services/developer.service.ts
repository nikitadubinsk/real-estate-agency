import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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

  statistics(developer_id: number) {
    return this.http.get(
      `${environment.urlApi}/developer/statistics/${developer_id}`
    );
  }

  ads(developer_id: number) {
    return this.http.get(`${environment.urlApi}/developer/ads/${developer_id}`);
  }

  deleteRealtor(id: number) {
    return this.http.delete(`${environment.urlApi}/developer/deleteRealtor/${id}`);
  }

  editRealtor(realtor: any) {
    return this.http.put(`${environment.urlApi}/developer/edit`, realtor);
  }
}
