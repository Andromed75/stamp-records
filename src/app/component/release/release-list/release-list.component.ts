import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Release } from 'src/app/models/release.model';

@Component({
  selector: 'app-release-list',
  templateUrl: './release-list.component.html',
  styleUrls: ['./release-list.component.css']
})
export class ReleaseListComponent implements OnInit {
  public db;
  releases: Array<Release> = new Array<Release>();
  constructor(private firestore: AngularFirestore) { }

  ngOnInit() {
    this.firestore.collection('Release').get().subscribe(
      response => {
        response.forEach( (doc) => {
          const tmp = doc.data() as Release;
          tmp.id = doc.id;
          this.releases.push(tmp);
        });
        console.log(this.releases);

        setTimeout(() => {
          const container = document.getElementById('container') as HTMLElement;
          container.style.opacity = '1';
        }, 1);
      }
    );
  }

  displayInfos(index: number) {
    const image =  document.getElementsByClassName('release-info')[index] as HTMLElement;
    image.style.opacity = '1';

  }
  hideInfos(index: number) {
    const image =  document.getElementsByClassName('release-info')[index] as HTMLElement;
    image.style.opacity = '0';
  }
}
