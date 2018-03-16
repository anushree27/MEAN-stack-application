import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {

  user = {};
  invalidpass = false;

  constructor(private http: HttpClient,
     private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  login(value) {
    if ( value.user.trim() === 'admin') {
      if ( value.password.trim() === 'admin123')
      {
        this.router.navigate(['/todos']);
      }  else {
        this.invalidpass = true;
      }
    }    else {
      this.invalidpass = true;
    }
  }
}
