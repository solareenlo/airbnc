import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostListComponent } from './posts/post-list/post-list.component';
import { EntryComponent } from './posts/entry/entry.component';
import { DetailsComponent } from './posts/details/details.component';

const routes: Routes = [
  { path: '', component: PostListComponent },
  { path: 'entry', component: EntryComponent },
  { path: 'details', component: DetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
