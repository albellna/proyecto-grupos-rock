import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

const cabecera = {headers: new HttpHeaders({'Content-Type': 'application/json'})};
@Injectable({
  providedIn: 'root'
})
export class GruposRockService {

  localAPI: string = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  public listarGrupos() {
    return this.http.get<any>(`${this.localAPI}/grupos`, cabecera);
  }

  public listarUnGrupo(id: string) {
    return this.http.get<any>(`${this.localAPI}/grupo/${id}`, cabecera);
  }

  public borrarGrupo(id: string) {
    return this.http.delete<any>(`${this.localAPI}/borrargrupo/${id}`, cabecera);
  }
}
