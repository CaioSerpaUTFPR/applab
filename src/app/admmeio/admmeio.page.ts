import { MeioService } from "./../meio.service";
import { Component, OnInit } from "@angular/core";
import { meio } from "./admmeio";

@Component({
  selector: "app-admmeio",
  templateUrl: "./admmeio.page.html",
  styleUrls: ["./admmeio.page.scss"]
})
export class AdmmeioPage implements OnInit {
  meios: meio[];

  constructor(private MeioService: MeioService) {}

  ngOnInit() {
    this.MeioService.getM().subscribe(dados => {
      this.meios = dados;
    });
  }
}
