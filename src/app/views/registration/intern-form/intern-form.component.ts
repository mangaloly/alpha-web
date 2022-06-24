import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { InternService } from 'src/app/providers/intern.service';
import { SuccessService } from 'src/app/providers/success.service';
import { Validator } from 'src/app/_helpers/validator';

@Component({
  selector: 'app-intern-form',
  templateUrl: './intern-form.component.html',
  styleUrls: ['./intern-form.component.scss']
})
export class InternFormComponent implements OnInit {

  internForm!: FormGroup;
  validator = new Validator;
  numpattern =  "^[0-9_-]{10,12}";
  registered: boolean = false;
  showMsg: boolean = false;
  showError: boolean = false;
  selectedExp: any;
  selectedKnown: any;

  earlier = [
    { id: 'yes', name: 'Yes' },
    { id: 'no', name: 'No' }
  ];

  known = [
    { id: 'friends', name: 'Friends'},
    { id: 'teachers', name: 'Teachers' },
    { id: 'family', name: 'Family' },
    { id: 'facebook', name: 'Facebook' },
    { id: 'insta', name: 'Instagram' },
    { id: 'instagram', name: 'Instagram' },
    { id: 'youtube', name: 'Youtube' },
    { id: 'websites', name: 'Websites' },
    { id: 'organization', name: 'Organization' },
    { id: 'other', name: 'Other' }
  ];

  constructor(private builder: FormBuilder, private intern: InternService, public success: SuccessService, private http: HttpClient) { }

  ngOnInit(): void {
    this.internForm = this.builder.group({
      fname: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.pattern(this.validator.emailPattern())]),
      phone: new FormControl('', [Validators.required, Validators.pattern(this.numpattern),  Validators.minLength(10)]),
      institute: new FormControl('', Validators.required),
      course: new FormControl('', Validators.required),
      earlier: new FormControl(this.earlier, Validators.required),
      known: new FormControl(this.known, Validators.required)
    });
  }

  get avf() { return this.internForm.controls; }

  registerIntern() {
    this.registered = true;

    if(this.internForm.valid) {
      this.http.post('https://admin.alphachaperone.com/api/v3/intern-registration', this.internForm.value).subscribe((response) => console.log(response));
      console.table(this.internForm.value);
      this.internForm.reset();
      this.showMsg = true;
    } else {
      console.log("We have an error!");
    }
  }

}
