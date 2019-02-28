import { Component, OnInit } from '@angular/core';
import { CookieService } from '../cookie.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public auth: Boolean = false;

  constructor(private cookieService: CookieService) {}

  ngOnInit() {
    if (this.cookieService.getCookie('login')) {
      this.auth = true;
    }
  }
}
