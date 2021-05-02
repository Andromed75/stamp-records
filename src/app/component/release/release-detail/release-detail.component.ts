import { Component, OnInit } from '@angular/core';
import { AngularFirestore, DocumentSnapshot } from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';
import { Release, Title } from 'src/app/models/release.model';

@Component({
  selector: 'app-release-detail',
  templateUrl: './release-detail.component.html',
  styleUrls: ['./release-detail.component.css']
})
export class ReleaseDetailComponent implements OnInit {

  private id: string;
  release: Release;
  image: string;
  artistName: string = '';
  releaseName: string = '';
  artists: Array<string> = new Array<string>();
  constructor(private route: ActivatedRoute, private firestore: AngularFirestore) { }

  ngOnInit() {
    this.id = this.route.snapshot.params.id;
    this.firestore.collection('Release').doc(this.id).get().subscribe(
      (data: DocumentSnapshot<Release>) => {
        this.release = data.data();
        this.image = this.release.image;

        this.artistName = this.release.artistes;
        this.artists  = this.release.artistes.split(',');

        this.releaseName = this.release.titre;
        console.log(this.release.title);

        this.firestore.collection('Title').doc(this.release.title).get().subscribe(
          data => {
            const x = data.data();
            console.log(x);

          }
        );
        const image = document.getElementById('image-div');
        image.style.opacity = '1';
        const releaseName = document.getElementById('release-name');
        releaseName.style.opacity = '1';
        releaseName.style.letterSpacing ='5px';
      }
    );
  }

}
