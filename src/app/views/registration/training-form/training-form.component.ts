import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { InternService } from 'src/app/providers/intern.service';
import { SuccessService } from 'src/app/providers/success.service';
import { TrainingService } from 'src/app/providers/training.service';
import { Validator } from 'src/app/_helpers/validator';

@Component({
  selector: 'app-training-form',
  templateUrl: './training-form.component.html',
  styleUrls: ['./training-form.component.scss']
})
export class TrainingFormComponent implements OnInit {

  trainingForm!: FormGroup;
  validator = new Validator;
  numpattern =  "^[0-9_-]{10,12}";
  registered: boolean = false;
  showMsg: boolean = false;
  showError: boolean = false;
  selectedExp: any;
  selectedKnown: any;
  selectedCat: any;

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

  category = [
    { id: 'induction program', name: 'Induction Programme' },
    { id: 'art of thinking', name: 'Art of Thinking' },
    { id: 'ict tools for effective social work practises', name: 'ICT tools for effective Social Work Practises' },
    { id: 'effective powerpoint presentation', name: 'Effective PowerPoint Presentation' },
    { id: 'spss and reasearch methodology', name: 'SPSS and Research Methodology' },
    { id: 'casework and group work', name: 'Casework & Group work' },
    { id: 'project proposal', name: 'Project Proposal' },
    { id: 'pra and rra', name: 'Participatory Rural Appraisal(PRA) & RRA' },
    { id: 'life skill training', name: 'Life Skill Training' },
    { id: 'sex education', name: 'Sex Education' },
    { id: 'professional grooming', name: 'Professional Grooming' }
  ];

  constructor(private builder: FormBuilder, private http: HttpClient, private training: TrainingService, public success: SuccessService) { }

  ngOnInit(): void {
    this.trainingForm = this.builder.group({
      fname: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.pattern(this.validator.emailPattern())]),
      phone: new FormControl('', [Validators.required, Validators.pattern(this.numpattern),  Validators.minLength(10)]),
      institute: new FormControl('', Validators.required),
      course: new FormControl('', Validators.required),
      earlier: new FormControl(this.earlier, Validators.required),
      known: new FormControl(this.known, Validators.required),
      category: new FormControl(this.category, Validators.required)
    });
  }

  get avf() { return this.trainingForm.controls; }

  // registerTraining() {
  //   this.registered = true;
  //   this.training.PostTraining(this.trainingForm).subscribe(
  //     response => {
  //       location.href = 'https://mailthis.to/confirm';
  //     }, error => {

  //   });

  //   if(this.trainingForm.invalid) {
  //     this.showError = true;
  //   } else {
  //     console.log(JSON.stringify(this.trainingForm.value));
  //     console.table(this.trainingForm.value);
  //     this.trainingForm.reset();
  //     this.showMsg = true;
  //   }
  // }

  registerTraining() {
    this.registered = true;

    if(this.trainingForm.valid) {
      this.http.post('https://admin.alphachaperone.com/api/v3/training-registration', this.trainingForm.value).subscribe((response) => console.log(response));
      console.table(this.trainingForm.value);
      this.trainingForm.reset();
      this.showMsg = true;
    } else {
      console.log("We have an error!");
    }
  }

}
