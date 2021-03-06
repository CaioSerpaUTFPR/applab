import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";

import { IonicModule } from "@ionic/angular";

import { UsoequipPage } from "./usoequip.page";
import { NgCalendarModule } from "ionic2-calendar";

const routes: Routes = [
  {
    path: "",
    component: UsoequipPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    NgCalendarModule
  ],
  declarations: [UsoequipPage]
})
export class UsoequipPageModule {}
