import { Component, OnInit } from "@angular/core";
import { RegenteService } from "../reagente.service";

@Component({
  selector: "app-novoreag",
  templateUrl: "./novoreag.page.html",
  styleUrls: ["./novoreag.page.scss"]
})
export class NovoreagPage implements OnInit {
  nome: any;
  numeracao: any;
  quantidade: any;

  resultado: any;
  constructor(private reagente: RegenteService) {}

  novoReag() {
    let reagente = { nome: "", numeracao: "", quantidade: "" };
    reagente.nome = this.nome;
    reagente.numeracao = this.numeracao;
    reagente.quantidade = this.quantidade;

    this.reagente
      .post(reagente)
      .then(response => {
        console.log("funcionou", Response);

        this.resultado = JSON.stringify(Response);
      })
      .catch(response => {
        console.log("Erro", Response);

        this.resultado = JSON.stringify(response);
      });
  }

  ngOnInit() {}
}
