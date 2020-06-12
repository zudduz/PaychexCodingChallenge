import { Component, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

@Injectable()
export class AppComponent {
  constructor(private http: HttpClient) { }
  isbnResult: String = 'Press "Check ISBN" to validate your ISBN';
  isbnValue: String = 'waka';
  
  checkIsbn() {
    let isbnValidationUrl = `http://localhost:8080/isbn/${this.isbnValue}`;
    let isbnValidityData = this.http.get(isbnValidationUrl)
        .subscribe((data: any) => this.isbnResult = `Checked ${data.isbn}. It's validity is ${data.validity}.`);
  }
}
