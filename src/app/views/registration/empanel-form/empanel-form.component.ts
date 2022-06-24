import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { EmpanelService } from 'src/app/providers/empanel.service';
import { SuccessService } from 'src/app/providers/success.service';
import { Validator } from 'src/app/_helpers/validator';

@Component({
  selector: 'app-empanel-form',
  templateUrl: './empanel-form.component.html',
  styleUrls: ['./empanel-form.component.scss']
})
export class EmpanelFormComponent implements OnInit {

  empanelForm: FormGroup;
  validator = new Validator;
  numpattern =  "^[0-9_-]{10,12}";
  registered: boolean = false;
  showMsg: boolean = false;
  showError: boolean = false;
  selectedStatus: any;
  selectedAttend: any;
  selectedExp: any;

  status = [
    { id: 'freelancer', name: 'Freelancer Trainer' },
    { id: 'aspirant', name: 'Training Profession Aspirant' }
  ];

  attended = [
    { id: 'yes', name: 'Yes' },
    { id: 'no', name: 'No' }
  ];

  experience = [
    { id: 'yes', name: 'Yes' },
    { id: 'no', name: 'No' }
  ];

  constructor(private builder: FormBuilder, private trainer: EmpanelService, public success: SuccessService, private http: HttpClient) { }

  ngOnInit(): void {
    this.empanelForm = this.builder.group({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.pattern(this.validator.emailPattern())]),
      phone: new FormControl('', [Validators.required, Validators.pattern(this.numpattern),  Validators.minLength(10)]),
      status: new FormControl(this.status, Validators.required),
      attended: new FormControl(this.attended, Validators.required),
      experience: new FormControl(this.experience, Validators.required),
      years: new FormControl(''),
    });
  }

  get avf() { return this.empanelForm.controls; }

  // registerTrainer() {
  //   this.registered = true;
  //   this.trainer.RegisterTrainer(this.empanelForm).subscribe(
  //     response => {
  //       location.href = 'https://mailthis.to/confirm';
  //     }, error => {

  //   });

  //   if(this.empanelForm.invalid) {
  //     this.showError = true;
  //   } else {
  //     console.log(JSON.stringify(this.empanelForm.value));
  //     console.table(this.empanelForm.value);
  //     this.empanelForm.reset();
  //     this.showMsg = true;
  //   }
  // }

  registerTrainer() {
    this.registered = true;

    if(this.empanelForm.valid) {
      this.http.post('https://admin.alphachaperone.com/api/v3/empanel-registraion', this.empanelForm.value).subscribe((response) => console.log(response));
      console.table(this.empanelForm.value);
      this.empanelForm.reset();
      this.showMsg = true;
    } else {
      console.log("We have an error!");
    }
  }

}
