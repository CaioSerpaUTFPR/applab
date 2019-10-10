import { EquipamentoService } from "./../equipamento.service";
import { Component, OnInit } from "@angular/core";
import { equipamento } from "./admequip";

@Component({
  selector: "app-admequip",
  templateUrl: "./admequip.page.html",
  styleUrls: ["./admequip.page.scss"]
})
export class AdmequipPage implements OnInit {
  equipamentos: equipamento[];
  constructor(private EquipamentoService: EquipamentoService) {}

  ngOnInit() {
    this.EquipamentoService.getE().subscribe(dados => {
      this.equipamentos = dados;
    });
  }

  novoEquip() {}
}
