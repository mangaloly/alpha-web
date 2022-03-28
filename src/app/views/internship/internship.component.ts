import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-internship',
  templateUrl: './internship.component.html',
  styleUrls: ['./internship.component.scss']
})
export class InternshipComponent implements OnInit {

  internfaq: any = [
    {
      id: 1,
      num: '01',
      title: 'How to apply for the internship program?',
      description: 'Visit our website and click on the ‘like to be a part’ button. Fill up the form for internship and you are done. Our team will contact you and will provide further instructions and procedures.'
    },
    {
      id: 2,
      num: '02',
      title: 'What is a monitored internship program?',
      description: 'Monitored internship program is one of our prime services. We will formulate your daily tasks and objectives based on your semester wise field work requirements and the agency requirements. All your activities and attendance will be monitored using our exclusive mobile application. Unlike normal internships, you will be provided with mentoring, training ,full time assistance and emulated casework sessions.'
    },
    {
      id: 3,
      num: '03',
      title: 'Does Alpha Chaperone have any projects to take interns?',
      description: 'No. The interns will be placed in different reputed & established NGOs who have running projects. Alpha Chaperone coordinates and monitors the internship program.'
    },
    {
      id: 4,
      num: '04',
      title: 'Is there any training program for interns?',
      description: 'Yes, there will be training programs along with internships. And the interns can also choose additional training required, as per their interest.'
    }
  ];

  apps: any = [
    {
      id: 1,
      src: 'assets/img/app_01.jpg'
    },
    {
      id: 1,
      src: 'assets/img/app_02.jpg'
    },
    {
      id: 1,
      src: 'assets/img/app_03.jpg'
    },
    {
      id: 1,
      src: 'assets/img/app_04.jpg'
    },
    {
      id: 1,
      src: 'assets/img/app_05.jpg'
    },
    {
      id: 1,
      src: 'assets/img/app_06.jpg'
    },
  ];

  appSlider: OwlOptions = {
    loop: true,
    items: 1,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    nav: false,
    navSpeed: 700,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    navText: ["<i class='bx bx-left-arrow-alt' ></i>", "<i class='bx bx-right-arrow-alt' ></i>"],
  }

  constructor() { }

  ngOnInit(): void {
  }

}
