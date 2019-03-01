
import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {ProfileComponent} from "./profile.component";
import {ProfileRoutes} from "./profile.routing";
import {UserService} from "../service/user.service";


@NgModule({
  declarations: [
    ProfileComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ProfileRoutes
  ],
  providers: [UserService]
})
export class ProfileModule {
}
