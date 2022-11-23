import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConfirmacionTelefonoComponent } from './confirmacion-telefono/confirmacion-telefono.component';
import { CreacionTokenComponent } from './creacion-token/creacion-token.component';
import { CreacionTokenUnoComponent } from './creacion-token-uno/creacion-token-uno.component';
import { CreacionTokenDosComponent } from './creacion-token-dos/creacion-token-dos.component';
import { CreacionTokenTresComponent } from './creacion-token-tres/creacion-token-tres.component';
import { DniUnoComponent } from './dni-uno/dni-uno.component';
import { DniDosComponent } from './dni-dos/dni-dos.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ConfirmacionTelefonoComponent,
    CreacionTokenComponent,
    CreacionTokenUnoComponent,
    CreacionTokenDosComponent,
    CreacionTokenTresComponent,
    DniUnoComponent,
    DniDosComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
