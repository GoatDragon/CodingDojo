import { DallasComponent } from './dallas/dallas.component';
import { SanFranciscoComponent } from './san-francisco/san-francisco.component';
// import { PageNotFoundComponent } from './pagenotfound/pagenotfound.component'
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
    { path: 'd',component: DallasComponent },
    { path: 'sf',component: SanFranciscoComponent },
    // redirect to /alpha if there is nothing in the url
    // { path: '', pathMatch: 'full', redirectTo: '/d' },
    // the ** will catch anything that did not match any of the above routes
    // { path: '**', component: PageNotFoundComponent }];
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
