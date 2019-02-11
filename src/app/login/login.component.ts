import { Component, OnInit } from '@angular/core';
import { PassportService } from '../passport.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public data = {
    "email":"",
    "password":""
  };
  
  constructor(private passportService: PassportService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.passportService.auth(this.data).subscribe(user => console.log(user));
  }

}
