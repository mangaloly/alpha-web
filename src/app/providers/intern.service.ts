import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InternService {

  private mailApi = 'https://admin.alphachaperone.com/api/v3/intern-registration';

  constructor(private http: HttpClient) { }

  PostIntern(input: any) {
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
