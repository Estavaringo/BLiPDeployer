import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DeployerComponent } from './pages/deployer/deployer.component';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { LoadComponent } from './pages/load/load.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material/material-components.module';
import { AddBotComponent } from './pages/add-bot/add-bot.component';

@NgModule({
  declarations: [
    AppComponent,
    DeployerComponent,
    LoadComponent,
    AddBotComponent,
  ],
  imports: [
    MaterialModule,
    BrowserModule,
    AppRoutingModule,
    SweetAlert2Module.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
