import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { dano } from "./danos/danos";

@Injectable({
  providedIn: "root"
})
export class DanosService {
  constructor(private http: HttpClient) {}

  getDano() {
    let url = "http://localhost:3333/usuarios";
    return this.http.get<dano[]>(url);
  }
}
