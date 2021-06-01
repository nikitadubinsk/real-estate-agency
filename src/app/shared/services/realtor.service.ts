import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class RealtorService {
  constructor(private http: HttpClient) {}

  authorize(realtor: any) {
    return this.http.post(`${environment.urlApi}/realtor/auth`, realtor);
  }

  findRealtor(realtor: any) {
    return this.http.post(`${environment.urlApi}/realtor/find`, realtor);
  }

  newPassword(realtor: any) {
    return this.http.put(`${environment.urlApi}/realtor/newPassword`, realtor);
  }

  newAd(ad: any) {
    return this.http.post(`${environment.urlApi}/realtor/newAd`, ad);
  }

  geocoding(address: string) {
    return this.http.get(
      `https://geocode-maps.yandex.ru/1.x/?apikey=ea1646d1-2502-47b0-8738-bd4f2afe3830&geocode=${address.replace(
        / /g,
        '+'
      )}&format=json&results=1`
    );
  }

  ads(id: number) {
    return this.http.get(`${environment.urlApi}/realtor/ads/${id}`);
  }

  achive(arg: any) {
    return this.http.put(`${environment.urlApi}/realtor/archive`, arg);
  }
}
