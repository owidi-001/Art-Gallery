import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ArtListComponent } from './src/components/art-list/art-list.component';
import { ArtDetailComponent } from './src/components/art-detail/art-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full'},
  { path: '', component: ArtListComponent },
  { path: 'detail/:id', component: ArtDetailComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
