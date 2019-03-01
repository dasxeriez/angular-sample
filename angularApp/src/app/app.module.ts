import {BrowserModule, TransferState} from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutes } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import {CommonModule} from "@angular/common";
import { SideBarComponent } from './side-bar/side-bar.component';
import {HttpClientModule} from "@angular/common/http";
import {TransferHttpService} from "@gorniv/ngx-transfer-http";

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    SideBarComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    AppRoutes
  ],
  providers: [TransferHttpService,TransferState],
  bootstrap: [AppComponent]
})
export class AppModule { }
