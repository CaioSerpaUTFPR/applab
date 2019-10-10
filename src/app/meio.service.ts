import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { meio } from "./admmeio/admmeio";

@Injectable({
  providedIn: "root"
})
export class MeioService {
  constructor(private http: HttpClient) {}

  getM() {
    let url = "";
    return this.http.get<meio[]>(url);
  }
}
