import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    redirectTo: "login",
    pathMatch: "full"
  },
  { path: "login", loadChildren: "./login/login.module#LoginPageModule" },
  {
    path: "cadastro",
    loadChildren: "./cadastro/cadastro.module#CadastroPageModule"
  },
  {
    path: "recsenha",
    loadChildren: "./recsenha/recsenha.module#RecsenhaPageModule"
  },
  {
    path: "precadastro",
    loadChildren: "./precadastro/precadastro.module#PrecadastroPageModule"
  },
  {
    path: "usoreagente",
    loadChildren: "./usoreagente/usoreagente.module#UsoreagentePageModule"
  },
  {
    path: "usomeio",
    loadChildren: "./usomeio/usomeio.module#UsomeioPageModule"
  },
  {
    path: "usoequip",
    loadChildren: "./usoequip/usoequip.module#UsoequipPageModule"
  },
  {
    path: "notificadano",
    loadChildren: "./notificadano/notificadano.module#NotificadanoPageModule"
  },
  { path: "perfil", loadChildren: "./perfil/perfil.module#PerfilPageModule" },
  { path: "admin", loadChildren: "./admin/admin.module#AdminPageModule" },
  {
    path: "relatorio",
    loadChildren: "./relatorio/relatorio.module#RelatorioPageModule"
  },
  {
    path: "admreagente",
    loadChildren: "./admreagente/admreagente.module#AdmreagentePageModule"
  },
  {
    path: "admmeio",
    loadChildren: "./admmeio/admmeio.module#AdmmeioPageModule"
  },
  {
    path: "admusuario",
    loadChildren: "./admusuario/admusuario.module#AdmusuarioPageModule"
  },
  {
    path: "admequip",
    loadChildren: "./admequip/admequip.module#AdmequipPageModule"
  },
  {
    path: "novoequip",
    loadChildren: "./novoequip/novoequip.module#NovoequipPageModule"
  },
  {
    path: "novoreag",
    loadChildren: "./novoreag/novoreag.module#NovoreagPageModule"
  },
  {
    path: "novomeio",
    loadChildren: "./novomeio/novomeio.module#NovomeioPageModule"
  },
  { path: "danos", loadChildren: "./danos/danos.module#DanosPageModule" },
  {
    path: "vidraria",
    loadChildren: "./vidraria/vidraria.module#VidrariaPageModule"
  },
  {
    path: "novavid",
    loadChildren: "./novavid/novavid.module#NovavidPageModule"
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
