import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {

  @ViewChild("videoPlayer", { static: false }) videoPlayer: ElementRef;
  isPlay: boolean = false;
  is_hide: boolean = false;

  startIntro() {
    var introVideo: any = document.getElementById("intro_video");
    if (introVideo.paused) introVideo.play();
    else introVideo.pause();
    this.is_hide = !this.is_hide;
    setTimeout(this.navigateToHome.bind(this), 30000);
  }

  navigateToHome() {
    console.log("I am in Navigate");
    this.router.navigate(['/home']);
  }

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

}
