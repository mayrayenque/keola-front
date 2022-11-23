import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfirmacionTelefonoComponent } from './confirmacion-telefono/confirmacion-telefono.component';
import { CreacionTokenDosComponent } from './creacion-token-dos/creacion-token-dos.component';
import { CreacionTokenTresComponent } from './creacion-token-tres/creacion-token-tres.component';
import { CreacionTokenUnoComponent } from './creacion-token-uno/creacion-token-uno.component';
import { CreacionTokenComponent } from './creacion-token/creacion-token.component';
import { DniDosComponent } from './dni-dos/dni-dos.component';
import { DniUnoComponent } from './dni-uno/dni-uno.component';

const routes: Routes = [
  { path: 'confirmacion-telefono', component: ConfirmacionTelefonoComponent },
  { path: 'creacion-token', component: CreacionTokenComponent },
  { path: 'creacion-token-uno', component: CreacionTokenUnoComponent },
  { path: 'creacion-token-dos', component: CreacionTokenDosComponent },
  { path: 'creacion-token-tres', component: CreacionTokenTresComponent },
  { path: 'dni-uno', component: DniUnoComponent },
  { path: 'dni-dos', component: DniDosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
