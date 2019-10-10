import { LoginService } from "./../login.service";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { timer } from "rxjs";
import { login } from "./login";
import { AlertController } from "@ionic/angular";
import { logado } from "src/environments/environment";

@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"]
})
export class LoginPage implements OnInit {
  resulta: any;
  email: any;
  senha: any;

  constructor(
    private alert: AlertController,
    private LoginService: LoginService,
    private router: Router
  ) {}

  ngOnInit() {}

  async alertUso() {
    let alert = await this.alert.create({
      header: "Dados Invalidos",
      buttons: [
        {
          text: "Ok",
          role: "cancel"
        }
      ]
    });
    await alert.present();
  }
  login() {
    let login = {
      email: this.email,
      senha: this.senha
    };
    this.LoginService.LoginGet(login)
      .then(dados => {
        logado.id = dados.id;
        logado.tipo = dados.tipo;
        this.router.navigate(["usoreagente"]);
      })
      .catch(response => {
        this.alertUso();
      });
  }
}
