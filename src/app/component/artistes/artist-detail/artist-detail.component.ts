import { Component, OnInit, SecurityContext } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
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
  urls: Array<any> = new Array();

  constructor(private router: Router, private domSan: DomSanitizer) {
    this.navigation = this.router.getCurrentNavigation();
  }

  ngOnInit() {
    this.artistId = this.navigation.extras.state["id"];
    this.artist = myArtists.artists[this.artistId];
    console.log(this.artist.soundcloudTracksIds);

    for (const id of this.artist.soundcloudTracksIds) {
      let safeUrl = this.domSan.bypassSecurityTrustResourceUrl('https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/' + id.id +  '&amp;');
      this.urls.push(safeUrl);
    }
    console.log(this.urls);

    setTimeout(() => {
      const image = document.getElementById('image') as HTMLElement;
      image.style.opacity = '1';
    }, 1)
    this.restructureShortBio();
  }

  restructureShortBio() {
    setTimeout(() => {
      const shortBio = document.getElementById('p-sb');
      shortBio.style.letterSpacing = '5px';
      shortBio.style.opacity = '1';
    },1)
  }

  getUrl(url: string) {
    console.log(url);
    return this.domSan.bypassSecurityTrustResourceUrl(url);
  }

  toggleScLinks() {
    const scLinks = document.getElementById('sc-links');

  }

}
