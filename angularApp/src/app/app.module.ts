import {BrowserModule, TransferState} from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutes } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import {CommonModule} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";
import {TransferHttpService} from "@gorniv/ngx-transfer-http";
import { HomeComponent } from './home/home.component';
import { MemoMasterComponent } from './memo-master/memo-master.component';
import { MemoDetailComponent } from './memo-detail/memo-detail.component';
import { MemoSearchComponent } from './memo-search/memo-search.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    MemoMasterComponent,
    MemoDetailComponent,
    MemoSearchComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    AppRoutes
  ],
  providers: [TransferHttpService,TransferState],
  bootstrap: [AppComponent]
})
export class AppModule { }
