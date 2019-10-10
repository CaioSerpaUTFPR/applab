import { MeioService } from "./../meio.service";
import { meio } from "./../admmeio/admmeio";
import { Component, OnInit } from "@angular/core";
import { AlertController } from "@ionic/angular";
import { reagente } from "../admreagente/reagente";

@Component({
  selector: "app-usomeio",
  templateUrl: "./usomeio.page.html",
  styleUrls: ["./usomeio.page.scss"]
})
export class UsomeioPage implements OnInit {
  meios: reagente[];
  qntd: any;
  meio: any;
  constructor(
    private alert: AlertController,
    private MeioService: MeioService
  ) {}

  ngOnInit() {
    this.MeioService.getM().subscribe(dados => {
      this.meios = dados;
    });
  }

  

  async alertUso() {
    let alert = await this.alert.create({
      header: "Confirmar uso de",
      subHeader: this.qntd + "ml de " + this.meio,
      buttons: [
        {
          text: "Cancelar",
          role: "cancel"
        },
        {
          text: "OK",
          handler: () => {
            console.log("oi");
          }
        }
      ]
    });
    await alert.present();
  }
}
