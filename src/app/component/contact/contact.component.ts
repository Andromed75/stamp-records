import { Component, OnInit } from '@angular/core';

export class CategoryTree {
  constructor(
    public id: string,
    public label: string,
    public picto: string,
    public picture: string,
    public slug: string,
    public subs: Array<CategoryTreeRayon>
  ) {
  }
}

export class CategoryTreeRayon {
  constructor(
    public id: string,
    public boutique: boolean,
    public content: string,
    public hexaCode: string,
    public label: string,
    public picto: string,
    public picture: string,
    public slug: string,
    public moment: boolean,
    public meta_title: string,
    public subs: Array<CategoryTreeSousRayon>
  ) {
  }
}

export class CategoryTreeSousRayon {
  constructor(
    public id: string,
    public label: string,
    public picture: string,
    public slug: string,
    public hexaCode: string,
    public is_alcohol: boolean,
    public is_salad_bar: boolean
  ) {
  }
}
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {


  constructor() { }

  ngOnInit() {


 }

}
