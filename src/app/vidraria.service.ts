import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { vidraria } from "./vidraria/vidraria";

@Injectable({
  providedIn: "root"
})
export class VidrariaService {
  constructor(private http: HttpClient) {}

  getV() {
    let url = "";
    return this.http.get<vidraria[]>(url);
  }
}
