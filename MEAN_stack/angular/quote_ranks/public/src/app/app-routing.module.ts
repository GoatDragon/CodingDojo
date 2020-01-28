import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewComponent } from './new/new.component';
import { EditComponent } from './edit/edit.component';
import { ListComponent } from './list/list.component';
import { QuotesComponent } from './quotes/quotes.component';
import { WriteComponent } from './write/write.component';


const routes: Routes = [
  { path: '',component: ListComponent },
  { path: 'new',component: NewComponent },
  { path: 'edit/:id',component: EditComponent },
  { path: 'quote/:id',component: QuotesComponent },
  { path: 'write/:id',component: WriteComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
