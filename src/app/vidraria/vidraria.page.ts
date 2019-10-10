import { VidrariaService } from "./../vidraria.service";
import { Component, OnInit } from "@angular/core";
import { vidraria } from "./vidraria";

@Component({
  selector: "app-vidraria",
  templateUrl: "./vidraria.page.html",
  styleUrls: ["./vidraria.page.scss"]
})
export class VidrariaPage implements OnInit {
  vidrarias: vidraria[];
  constructor(private VidrariaService: VidrariaService) {}

  ngOnInit() {
    this.VidrariaService.getV().subscribe(dados => {
      this.vidrarias = dados;
    });
  }
}
