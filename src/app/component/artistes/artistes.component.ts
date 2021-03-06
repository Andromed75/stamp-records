import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import myArtists from './../../../assets/data/artists.json';

@Component({
  selector: 'app-artistes',
  templateUrl: './artistes.component.html',
  styleUrls: ['./artistes.component.css']
})
export class ArtistesComponent implements OnInit {

  clientId: string = 'RUY5ryUjlES3TvHOWsaFlz5CSDn5Jyip';
  public artists:Array<any>;

  constructor(private router: Router) { }

  ngOnInit() {
    this.artists = Object.keys(myArtists).map(function(personNamedIndex){
      let artist = myArtists[personNamedIndex];
      return artist;
  });
  setTimeout(() => {
    const container = document.getElementById('container') as HTMLElement;
    container.style.opacity = '1';
  }, 1)
  }


  displayShortBio(index: number) {
    const image =  document.getElementsByClassName('short-bio')[index] as HTMLElement;
    image.style.opacity = '1';

  }
  hideShortBio(index: number) {
    const image =  document.getElementsByClassName('short-bio')[index] as HTMLElement;
    image.style.opacity = '0';
  }

  goToArtist(artist: any, i: number) {
    let name = artist.name as string;
    name = name.replace(/\s+/g, '-').toLowerCase();
    this.router.navigateByUrl(`/artistes/${name}`, { state: { id: i } });

  }

}
