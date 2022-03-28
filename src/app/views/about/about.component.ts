import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  team: any = [
    {
      id: 1,
      img: 'assets/img/team_01.jpg',
      name: 'Jithin Shelly',
      desg: '( Founder & CEO, Trainer )',
      edu: 'MSW, UGC-NET, Master Trainer Certification'
    },
    {
      id: 2,
      img: 'assets/img/team_02.jpg',
      name: 'Aiswarya KK',
      desg: '( Founder & COO, Trainer )',
      edu: 'MSW, Counsellor'
    },
    {
      id: 3,
      img: 'assets/img/team_03.jpg',
      name: 'Ajith K Ramesan',
      desg: '( CIO, Trainer )',
      edu: 'MSW, UGC-NET, PhD Scholar'
    },
    {
      id: 4,
      img: 'assets/img/team_04.jpg',
      name: 'Donet Domenic',
      desg: '( CFO, Trainer )',
      edu: 'MSW'
    },
    {
      id: 5,
      img: 'assets/img/team_05.jpg',
      name: 'Nithin Simon',
      desg: '( CMO, Trainer )',
      edu: 'MSW'
    },
    {
      id: 6,
      img: 'assets/img/team_06.jpg',
      name: 'Sebastian A',
      desg: '( Guest Faculty )',
      edu: 'MSW'
    },
    {
      id: 7,
      img: 'assets/img/team_07.jpg',
      name: 'Ananthu Mangaloly',
      desg: '( CTO )',
      edu: 'Software Engineer'
    },
  ];

  teamSlider: OwlOptions = {
    loop: false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    margin: 60,
    dots: false,
    nav: true,
    navSpeed: 700,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    navText: ["<i class='bx bx-left-arrow-alt' ></i>", "<i class='bx bx-right-arrow-alt' ></i>"],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 3
      }
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
