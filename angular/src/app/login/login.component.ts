import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @ViewChild('loginform', { static: false }) loginForm: NgForm;

  constructor(
      private http: HttpClient, 
      private authService: AuthService,
      private router: Router
    ) { }

  onLoginSubmit() {
    const username = this.loginForm.value.username;
    const password = this.loginForm.value.password;

    const headers = new HttpHeaders({'Content-type': 'application/json'});

    const reqObject = {
      username: username,
      password: password
    };

    this.http.post('http://localhost:3000/users/login', reqObject, { headers: headers }).subscribe(
      
      // The response data
      (response) => {
      
        // If the user authenticates successfully, we need to store the JWT returned in localStorage
        this.authService.setLocalStorage(response);

      },

      // If there is an error
      (error) => {
        console.log(error);
      },
      
      // When observable completes
      () => {
        console.log('done!');
        this.router.navigate(['protected']);
      }

    );
  }

  ngOnInit() {
  }

}
