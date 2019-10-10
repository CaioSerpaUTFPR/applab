import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { login } from "./login/login";
import { Observable, from } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class LoginService {
  constructor(private http: HttpClient) {}

  LoginGet(login: any) {
    let url = "http://localhost:3333/usuarioslogin";
    return this.http.post<login>(url, login).toPromise();
  }
}
