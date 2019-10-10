import { RelatorioService } from "./../relatorio.service";
import { Component, OnInit } from "@angular/core";
import { recurso } from "./recursos";

@Component({
  selector: "app-relatorio",
  templateUrl: "./relatorio.page.html",
  styleUrls: ["./relatorio.page.scss"]
})
export class RelatorioPage implements OnInit {
  relatorios: recurso[];

  dataini: any;
  datafim: any;
  constructor(private RelatorioService: RelatorioService) {}

  ngOnInit() {}

  GerarRelatorio(dataini: any, datafim: any) {
    this.RelatorioService.getRe(dataini, datafim).subscribe(dados => {
      this.relatorios = dados;
    });
  }
}
