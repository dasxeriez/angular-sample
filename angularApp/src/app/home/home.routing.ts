
import {HomeComponent} from "./home.component";
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent, 
    data: {
      meta: {
      },
    },
  },
];

export const HomeRoutes = RouterModule.forChild(routes);
 