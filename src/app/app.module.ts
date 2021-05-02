import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HomeComponent } from './component/home/home.component';
import { ArtistesComponent } from './component/artistes/artistes.component';
import { ArtistDetailComponent } from './component/artistes/artist-detail/artist-detail.component';
import { ReleaseListComponent } from './component/release/release-list/release-list.component';
import { ReleaseDetailComponent } from './component/release/release-detail/release-detail.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';
import { ContactComponent } from './component/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    HomeComponent,
    ArtistesComponent,
    ArtistDetailComponent,
    ReleaseListComponent,
    ReleaseDetailComponent,
    ContactComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
