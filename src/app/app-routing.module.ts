import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { PlayComponent } from 'src/pages/play/play.component';
import { CreateQrCodeComponent } from 'src/pages/create-qr-code/create-qr-code.component';

const routes: Routes = [
  { path: 'play', component: PlayComponent },
  { path: 'qrcode', component: CreateQrCodeComponent },
  { path: '', component: AppComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
