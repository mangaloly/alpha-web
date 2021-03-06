import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ContactService } from 'src/app/providers/contact.service';
import { Validator } from 'src/app/_helpers/validator';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contactForm!: FormGroup;
  validator = new Validator;
  numpattern =  "^[0-9_-]{10,12}";
  submitted: boolean = false;
  showMsg: boolean = false;
  showError: boolean = false;

  constructor(private builder: FormBuilder, private http: HttpClient, private contact: ContactService) { }

  ngOnInit(): void {
    this.contactForm = this.builder.group({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.pattern(this.validator.emailPattern())]),
      phone: new FormControl('', [Validators.required, Validators.pattern(this.numpattern),  Validators.minLength(10)]),
      comment: new FormControl(''),
      // policy_accept: new FormControl(false, Validators.requiredTrue)
    });
  }

  get avf() { return this.contactForm.controls; }

  submitContact() {
    this.submitted = true;

    if(this.contactForm.valid) {
      this.http.post('https://admin.alphachaperone.com/api/v3/add-contact', this.contactForm.value).subscribe((response) => console.log(response));
      console.table(this.contactForm.value);
      this.contactForm.reset();
      this.showMsg = true;
      setTimeout(() => {
        this.showMsg = false;
      }, 3000);
    } else {
      this.showError = true;
    }
  }

}
