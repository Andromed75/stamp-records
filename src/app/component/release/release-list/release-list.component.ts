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
          const tmp: any = doc.data();
          this.releases.push(tmp);
        })
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
