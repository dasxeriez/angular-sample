
// import { Routes, RouterModule } from '@angular/router';

// import { AppComponent } from "./app.component";

// const routes: Routes = [
//     { path: '', redirectTo: 'home', pathMatch: 'full' },
//     { path: "home", loadChildren: './home/home.module#HomeModule' },
//     { path: "profile", loadChildren: './profile/profile.module#ProfileModule' }
// ];


// export const AppRoutes = RouterModule.forRoot(routes, { enableTracing: true });

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from "./app.component";
import {HomeComponent} from "./home/home.component";
import {MemoSearchComponent} from "./memo-search/memo-search.component";
import {MemoMasterComponent} from "./memo-master/memo-master.component";
import {MemoDetailComponent} from "./memo-detail/memo-detail.component";
const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: "home", component: HomeComponent },
    { path: "master", component: MemoMasterComponent },
    { path: "detail", component: MemoDetailComponent },
    { path: "search", component: MemoSearchComponent }

];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutes { }