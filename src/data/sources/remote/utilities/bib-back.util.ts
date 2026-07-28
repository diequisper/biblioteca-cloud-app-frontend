import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { BACKEND_URL } from '../api/bib-backend';

@Injectable({
  providedIn: 'root'
})
export class BibBackendUtil {

  private http = inject(HttpClient);
  private backendUrl = inject(BACKEND_URL);

  get<T>(path : string){
    console.log('GET:', `${this.backendUrl}/${path}`);
    return this.http.get<T>(`${this.backendUrl}/${path}`);
  }

}
