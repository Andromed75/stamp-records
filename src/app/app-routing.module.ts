import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArtistDetailComponent } from './component/artistes/artist-detail/artist-detail.component';
import { ArtistesComponent } from './component/artistes/artistes.component';
import { HomeComponent } from './component/home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'artistes', component: ArtistesComponent},
  {path: 'artistes/:id', component: ArtistDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
