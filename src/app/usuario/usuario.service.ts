  
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Usuario } from './usuario.interface';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  API_URL = environment.API_URL;

  constructor(
    private http: HttpClient,
  ) { }


  getUsuario(id: string) {
    return this.http.get<Usuario>(this.API_URL + '/usuarios/' + id);
  }

  createUsuario(usuario: Usuario) {
    return this.http.post<Usuario[]>(this.API_URL + '/usuarios', usuario);
  }

  updateUsuario(id: string, usuario: Usuario) {
    return this.http.put<Usuario>(this.API_URL + '/usuarios/' + id, usuario);
  }

  deleteUsuario(id: string) {
    return this.http.delete<Usuario>(this.API_URL + '/usuarios/' + id);
  }

}