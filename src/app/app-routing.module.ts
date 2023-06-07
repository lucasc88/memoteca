import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ThoughtListComponent } from './component/thought/thought-list/thought-list.component';
import { CreateThoughtsComponent } from './component/thought/create/create-thoughts.component';
import { RemoveThoughtComponent } from './component/thought/remove-thought/remove-thought.component';

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
  {
    path: 'thought/removeThought/:id',
    component: RemoveThoughtComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
