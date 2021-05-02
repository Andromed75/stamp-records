import { DocumentSnapshot } from "@angular/fire/firestore";
import { Artist } from "./artist.model";

export class Release {
  constructor(
    public id: string,
    public titre: string,
    public artistes: string,
    public date: string,
    public image: string,
    public title: string
  ) {
  }
}

export class Title {
  constructor(
    public artist: string,
    public remixer: string,
    public title: string,
    public url: string
  ) {

  }
}
