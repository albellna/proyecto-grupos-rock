import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GruposRock } from '../interfaces/grupos-rock';

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

  public buscarGrupo(arg: string) {
    return this.http.get<any>(`${this.localAPI}/buscargrupo/${arg}`, cabecera);
  }

  public modificarGrupo(arg: any, id: string) {
    return this.http.post<any>(`${this.localAPI}/actualizargrupo/${id}`,{
      name: arg.name,
      anyosActivos: arg.anyosActivos,
      miembros: arg.miembros,
      descripcion: arg.descripcion,
      video: arg.video
    }, cabecera);
  }

  public crearGrupo(arg: any) {
    return this.http.post<GruposRock>(`${this.localAPI}/creargrupo`,{
      name: arg.name,
      anyosActivos: arg.anyosActivos,
      miembros: arg.miembros,
      descripcion: arg.descripcion,
      video: arg.video
    }, cabecera);
  }

  public borrarGrupo(id: string) {
    return this.http.delete<any>(`${this.localAPI}/borrargrupo/${id}`, cabecera);
  }
}
