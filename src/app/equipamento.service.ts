import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { equipamento } from "./admequip/admequip";

@Injectable({
  providedIn: "root"
})
export class EquipamentoService {
  constructor(private http: HttpClient) {}

  getE() {
    let url = "";
    return this.http.get<equipamento[]>(url);
  }
}
