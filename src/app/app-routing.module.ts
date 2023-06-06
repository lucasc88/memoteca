import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateThoughtsComponent } from './component/create-thoughts/create-thoughts.component';
import { ThoughtListComponent } from './component/thought/thought-list/thought-list.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'listThoughts',
    pathMatch: 'full'
  },
  {
    path: 'createThoughts',
    component: CreateThoughtsComponent,
  },
  {
    path: 'listThoughts',
    component: ThoughtListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
