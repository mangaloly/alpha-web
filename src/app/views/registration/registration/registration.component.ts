import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SuccessService } from 'src/app/providers/success.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  constructor(public success: SuccessService, private http: HttpClientModule) { }

  ngOnInit(): void {
  }

}
