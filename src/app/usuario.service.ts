import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { usuario } from "./admusuario/admusuario";

@Injectable({
  providedIn: "root"
})
export class UsuarioService {
  constructor(private http: HttpClient) {}

  postU(usuario: any) {
    let url = "http://localhost:3333/usuarios";
    let headers = new HttpHeaders({ "Content-Type": "application/json" });

    return this.http.post(url, usuario, { headers: headers }).toPromise();
  }

  getUfalse() {
    let url = "http://localhost:3333/usuariosnaoautorizados";
    return this.http.get<usuario[]>(url);
  }
  getUcadastrados() {
    let url = "http://localhost:3333/usuariosautorizados";
    return this.http.get<usuario[]>(url);
  }
  putU() {}
}
