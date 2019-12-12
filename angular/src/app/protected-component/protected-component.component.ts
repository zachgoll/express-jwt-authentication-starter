import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-protected-component',
  templateUrl: './protected-component.component.html',
  styleUrls: ['./protected-component.component.css']
})
export class ProtectedComponentComponent implements OnInit {

  constructor(private http: HttpClient) { }

  message: String

  // Execute this HTTP request when the route loads
  ngOnInit() {
    this.http.get<any>('http://localhost:3000/users/protected').subscribe(
      (response) => {
        if (response) {
          this.message = response.msg;
        }
      },

      (error) => {
        if (error.status === 401) {
          this.message = 'You are not authorized to visit this route.  No data is displayed.';
        }

        console.log(error);
      }, 

      () => {
        console.log('HTTP request done');
      }
    );
  }

}
