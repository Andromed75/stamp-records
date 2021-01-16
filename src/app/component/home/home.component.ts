import { Component, OnInit } from "@angular/core";
import { TimelineMax } from "gsap";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit() {

    const image: HTMLElement = document.querySelector('.image');
    let tl = new TimelineMax();
    // image.addEventListener('mousemove', (e: MouseEvent) => {
    //   let xAxis = (window.innerWidth / 2 - e.pageX) / 10;
    //   let yAxis = (window.innerWidth / 2 - e.pageY) / 10;
    //   image.style.transform  = `rotateY(${yAxis}deg) rotateX(${xAxis}deg)`;
    // })
    tl
    .to('.image', 2, {rotateY: 10, rotateZ: 0, rotateX: 5, ease: Power0.easeOut})
    .to('.image', 2, {rotateY: -10, rotateZ: 0, rotateX: 0, ease: Power0.easeOut})
    .to('.image', 2, {rotateY: 0, rotateZ: 0, rotateX: 0, ease: Power0.easeOut});

    // animations logo + since 2015
    this.animationSince2015();

    // Animation surbrillance des lettres
    // top
    this.surbrillanceTopLetters();
    // bottom
    this.surbrillanceBottomLetters();
  }

  animationSince2015() {
    const since_date = document.getElementById("since_date");
    setTimeout(() => {
      since_date.classList.add("fade-anim");
    }, 2000);

    const lettre_r = document.getElementById("lettre_r");
    const lettre_s = document.getElementById("lettre_s");
    setTimeout(() => {
      lettre_r.classList.add("opacity_1");
      lettre_s.classList.add("opacity_1");
    }, 1000);
  }

  surbrillanceTopLetters() {
    setTimeout(() => {
      const lettersTop = document.getElementsByClassName("text-top");
      let char = 0;
      let timer = setInterval(onTick, 150);

      function onTick() {
        const letter = lettersTop[char];
        if(letter == undefined) {
          return;
        }
        letter.classList.add("fill-grey");
        char++;
        let previousLetter;
        if (char > 0) {
          previousLetter = lettersTop[char - 1];
          setTimeout(() => {
            letter.classList.add("unfill");
          }, 300);
        }

        if (char == lettersTop.length) {
          complete();
          return;
        }
      }

      function complete() {
        clearInterval(timer);
        timer = null;
      }
    }, 800);
  }

  surbrillanceBottomLetters() {
    setTimeout(() => {
      const lettersBottom = document.getElementsByClassName("text-bottom");
      let char = 0;
      let timer = setInterval(onTick, 150);

      function onTick() {
        const letter = lettersBottom[char];
        if(letter == undefined) {
          return;
        }
        letter.classList.add("fill-grey");
        char++;
        let previousLetter;
        if (char > 0) {
          previousLetter = lettersBottom[char - 1];
          setTimeout(() => {
            letter.classList.add("unfill");
          }, 300);
        }

        if (char == lettersBottom.length) {
          complete();
          return;
        }
      }

      function complete() {
        clearInterval(timer);
        timer = null;
      }
    }, 2500);
  }
}
