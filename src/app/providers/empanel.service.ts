import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpanelService {

  private mailApi = 'https://mailthis.to/hellomangaloly@gmail.com';

  constructor(private http: HttpClient) { }

  RegisterTrainer(input: any) {
    return this.http.post(this.mailApi, input, { responseType: 'text' })
    .pipe(
      map(
        (response) => {
          if (response) {
            return response;
          } else {
            return null;
          }
        },
        (error: any) => {
          return error;
        }
      )
    )
  }
}