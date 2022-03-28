import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { SubscribeService } from 'src/app/providers/subscribe.service';
import { Validator } from 'src/app/_helpers/validator';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  subscribeForm!: FormGroup;
  validator = new Validator;
  subscribed: boolean = false;
  showMsg: boolean = false;

  // events: any = [
  //   {
  //     id: 1,
  //     date: 'March 7-18',
  //     title: 'National Aplha Chaperone Joy!',
  //     link: 'https://alphachaperone.com/'
  //   },
  //   {
  //     id: 2,
  //     date: 'April 27-30',
  //     title: 'Alpha Affiliation Program',
  //     link: 'https://alphachaperone.com/'
  //   },
  //   {
  //     id: 3,
  //     date: 'August 20-27',
  //     title: 'National Trainers Day Program',
  //     link: 'https://alphachaperone.com/'
  //   }
  // ];

  events: any = [];

  constructor(private builder: FormBuilder, private subscribe: SubscribeService, private http: HttpClient) { }

  ngOnInit(): void {
    this.subscribeForm = this.builder.group({
      email: new FormControl('', [Validators.required, Validators.pattern(this.validator.emailPattern())]),
      terms: new FormControl(false, Validators.requiredTrue)
    });
  }

  get avf() { return this.subscribeForm.controls; }

  // subscribeNow() {
  //   this.subscribed = true;
  //   this.subscribe.PostSubscribe(this.subscribeForm).subscribe(
  //     response => {
  //       location.href = 'https://mailthis.to/confirm';
  //     }, error => {

  //   });

  //   if(this.subscribeForm.invalid) {
  //   } else {
  //     console.log(JSON.stringify(this.subscribeForm.value));
  //     console.table(this.subscribeForm.value);
  //     this.subscribeForm.reset();
  //     this.showMsg = true;
  //     setTimeout(() => {
  //       this.showMsg = false;
  //     }, 3000);
  //   }
  // }

  subscribeNow() {
    this.subscribed = true;

    if(this.subscribeForm.valid) {
      this.http.post('https://alpha-chaperone-web-default-rtdb.asia-southeast1.firebasedatabase.app/subscription.json', this.subscribeForm.value).subscribe((response) => console.log(response));
      console.table(this.subscribeForm.value);
      this.subscribeForm.reset();
      this.showMsg = true;
      setTimeout(() => {
        this.showMsg = false;
      }, 3000);
    } else {
      console.log("We have an error!");
    }
  }
}
