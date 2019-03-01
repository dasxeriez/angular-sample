
import {Routes, RouterModule} from '@angular/router';

import {AppComponent} from "./app.component";

const routes: Routes = [
      {path: "profile", loadChildren: './profile/profile.module#ProfileModule'}
];


export const AppRoutes = RouterModule.forRoot(routes, {initialNavigation: 'enabled'});
