import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArtistDetailComponent } from './component/artistes/artist-detail/artist-detail.component';
import { ArtistesComponent } from './component/artistes/artistes.component';
import { HomeComponent } from './component/home/home.component';
import { ReleaseListComponent } from './component/release/release-list/release-list.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'artistes', component: ArtistesComponent},
  {path: 'artistes/:id', component: ArtistDetailComponent},
  {path: 'release', component: ReleaseListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
