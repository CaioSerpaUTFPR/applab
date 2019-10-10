import { DanosService } from "./../danos.service";
import { Component, OnInit } from "@angular/core";
import { AlertController } from "@ionic/angular";
import { dano } from "./danos";

@Component({
  selector: "app-danos",
  templateUrl: "./danos.page.html",
  styleUrls: ["./danos.page.scss"]
})
export class DanosPage implements OnInit {
  danos: dano[];

  constructor(
    private alert: AlertController,
    private Danoservice: DanosService
  ) {}

  ngOnInit() {
    this.Danoservice.getDano().subscribe(dados => {
      this.danos = dados;
    });
  }
  // async mostradanos(danos: dano) {
  //   let alert = await this.alert.create({
  //     header: "NOME: " + novos.nome + "  RA: " + novos.ra,
  //     subHeader: "Curso: " + novos.curso,
  //     buttons: [
  //       {
  //         text: "Voltar",
  //         role: "cancel"
  //       }
  //     ]
  //   });
  //   await alert.present();
  // }
}
