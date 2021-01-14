import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationStart, Router } from '@angular/router';
import { Observable } from 'rxjs';
import myArtists from './../../../../assets/data/artists.json';


@Component({
  selector: 'app-artist-detail',
  templateUrl: './artist-detail.component.html',
  styleUrls: ['./artist-detail.component.css']
})
export class ArtistDetailComponent implements OnInit {
  artistId: any;
  navigation: any;
  public artist: any;

  constructor(private router: Router) {
    this.navigation = this.router.getCurrentNavigation();
  }

  ngOnInit() {
    this.artistId = this.navigation.extras.state["id"];
    this.artist = myArtists.artists[this.artistId];
    setTimeout(() => {
      const image = document.getElementById('image') as HTMLElement;
      image.style.opacity = '1';
    }, 1)
  }

}
