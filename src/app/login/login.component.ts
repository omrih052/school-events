import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }
  ngOnInit() {
  }
  log(e, p) {
    this.authService.login({
      "email": e.value,
      "password": p.value
    }).subscribe(tokenResult => {
      console.log(tokenResult);
      this.router.navigate(['home']);
    }, (err) => {
      console.log(err)
    })
  }

}



