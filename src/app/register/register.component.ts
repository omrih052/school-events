import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }
  reg(e, p) {
    this.authService.register({
      "email": e.value,
      "password": p.value
    }).subscribe(res => {
      console.log(res);
    })

  }

}
