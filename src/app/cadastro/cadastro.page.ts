import { UsuarioService } from "./../usuario.service";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-cadastro",
  templateUrl: "./cadastro.page.html",
  styleUrls: ["./cadastro.page.scss"]
})
export class CadastroPage implements OnInit {
  nome: any;
  login: any;
  email: any;
  senha: any;
  instituicao: any;
  ra: any;
  curso: any;
  tipo: any = "aluno";
  autorizado: any = false;

  resultado: any;

  constructor(private router: Router, private UsuarioService: UsuarioService) {}

  ngOnInit() {}

  postU() {
    let usuario = {
      nome: "",
      instituicao: "",
      ra: "",
      email: "",
      senha: "",
      curso: "",
      tipo: "",
      autorizado: ""
    };
    // usuario.nome = this.nome;
    usuario.nome = this.nome;
    usuario.instituicao = this.instituicao;
    usuario.ra = this.ra;
    usuario.email = this.email;
    usuario.senha = this.senha;
    usuario.curso = this.curso;
    usuario.tipo = this.tipo;
    usuario.autorizado = this.autorizado;

    this.UsuarioService.postU(usuario)
      .then(response => {
        console.log("funcionou", Response);
        this.resultado = JSON.stringify(Response);
        this.router.navigate(["precadastro"]);
      })
      .catch(response => {
        console.log("Erro", Response);

        this.resultado = JSON.stringify(response);
      });
  }
}
