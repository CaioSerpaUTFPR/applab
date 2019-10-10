import { logado } from "src/environments/environment";
import { AlertController } from "@ionic/angular";
import { Component, OnInit } from "@angular/core";
import { RegenteService } from "../reagente.service";
import { reagente } from "../admreagente/reagente";

@Component({
  selector: "app-usoreagente",
  templateUrl: "./usoreagente.page.html",
  styleUrls: ["./usoreagente.page.scss"]
})
export class UsoreagentePage implements OnInit {
  reags: reagente[];
  qntd: any;
  reag: any;

  constructor(
    private alert: AlertController,
    private reagente: RegenteService
  ) {}

  ngOnInit() {
    this.reagente.getR().subscribe(dados => {
      this.reags = dados;
    });
    console.log(logado.id);
    console.log(logado.tipo);
  }

  async alertUso() {
    let alert = await this.alert.create({
      header: "Confirmar uso de",
      subHeader: this.qntd + "ml de " + this.reag,
      buttons: [
        {
          text: "Cancelar",
          role: "cancel"
        },
        {
          text: "OK",
          handler: () => {
            this.informarUso();
          }
        }
      ]
    });
    await alert.present();
  }
  informarUso() {
    this.reagente
      .put(this.reag, this.qntd)
      .then(response => {})
      .catch(response => {});
  }
}
