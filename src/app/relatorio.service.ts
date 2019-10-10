import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { recurso } from "./relatorio/recursos";

@Injectable({
  providedIn: "root"
})
export class RelatorioService {
  constructor(private http: HttpClient) {}

  getRe(dataini: any, datafim: any) {
    let url = "";
    return this.http.get<recurso[]>(url);
  }
}
