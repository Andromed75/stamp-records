import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    
    // Apparition de la navbar
    setTimeout(() => {
      const navbar = document.getElementsByClassName('navbar-nav');      
      navbar[0].classList.add('opacity-1');
    }, 3000);
  }

}
