import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IlustLogicComponent } from '../components/ilust-logic/ilust-logic.component';
import { PlayComponent } from '../pages/play/play.component';
import { CreateQrCodeComponent } from '../pages/create-qr-code/create-qr-code.component';
import { IlustMassComponent } from '../components/ilust-mass/ilust-mass.component';

@NgModule({
  declarations: [
    AppComponent,
    IlustLogicComponent,
    PlayComponent,
    CreateQrCodeComponent,
    IlustMassComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
