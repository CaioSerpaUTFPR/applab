import { Component, OnInit } from "@angular/core";
import { RegenteService } from "./../reagente.service";
import { reagente } from "./reagente";
import { recurso } from "../relatorio/recursos";
@Component({
  selector: "app-admreagente",
  templateUrl: "./admreagente.page.html",
  styleUrls: ["./admreagente.page.scss"]
})
export class AdmreagentePage implements OnInit {
  recursos: recurso[];
  constructor(private RegenteService: RegenteService) {}

  // LEMBRAR DE FALAR DO RECURSOS PRA PEGAR NO BD

  ngOnInit() {
    this.RegenteService.getR().subscribe(dados => {
      this.recursos = dados;
    });
  }
}
