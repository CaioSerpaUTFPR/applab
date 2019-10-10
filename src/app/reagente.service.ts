import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { reagente } from "./admreagente/reagente";

@Injectable({
  providedIn: "root"
})
export class RegenteService {
  constructor(private http: HttpClient) {}

  put(id: any, qntd: any) {
    //INFORMAR ID E QUANTIDADE A SER ATT
    let reagente; // passar aqui quantidade e o id do reag selecionado
    let url = "http://localhost:3333/users";
    let headers = new HttpHeaders({ "Content-Type": "application/json" });

    return this.http.put(url, reagente, { headers: headers }).toPromise();
  }

  post(reagente: any) {
    let url = "";
    let headers = new HttpHeaders({ "Content-Type": "application/json" });

    return this.http.post(url, reagente, { headers: headers }).toPromise();
  }
  getR() {
    let url = "http://localhost:3333/recursos";
    return this.http.get<reagente[]>(url);
  }
}
