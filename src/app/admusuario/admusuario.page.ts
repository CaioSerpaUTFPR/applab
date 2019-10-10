import { UsuarioService } from "./../usuario.service";
import { Component, OnInit } from "@angular/core";
import { usuario } from "./admusuario";
import { NgForOf } from "@angular/common";
import { AlertController } from "@ionic/angular";

@Component({
  selector: "app-admusuario",
  templateUrl: "./admusuario.page.html",
  styleUrls: ["./admusuario.page.scss"]
})
export class AdmusuarioPage implements OnInit {
  novos: usuario[];
  cadastrados: usuario[];

  constructor(
    private alert: AlertController,
    private UsuarioService: UsuarioService
  ) {}

  ngOnInit() {
    this.UsuarioService.getUfalse().subscribe(dados => {
      this.novos = dados;
    });
    this.UsuarioService.getUcadastrados().subscribe(dados => {
      this.cadastrados = dados;
    });
  }

  async mostrausuario(novos: usuario) {
    let alert = await this.alert.create({
      header: "NOME: " + novos.nome + "  RA: " + novos.ra,
      subHeader: "Curso: " + novos.curso,
      buttons: [
        {
          text: "Voltar",
          role: "cancel"
        }
      ]
    });
    await alert.present();
  }
}
