import { Component, OnInit } from '@angular/core';
import { PassportService } from '../passport.service';
import { CookieService } from '../cookie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(
    private passportService: PassportService,
    private cookieService: CookieService,
    private router: Router
  ) { }

  public data = {
    "name":"",
    "email":"",
    "password":""
  };

  ngOnInit() {
    if (this.cookieService.getCookie('login')) {
      this.router.navigate(['/']);
    };
  }

  onSubmit() {
    this.passportService.register(this.data).subscribe(
      user => {
        this.cookieService.setCookie('login',(user['success'].token), {});
        this.router.navigate(['/']);
      }
    );
  }

}
