import { Component, OnInit } from '@angular/core';
import { CookieService } from '../cookie.service';

@Component({
  selector: 'app-notify',
  templateUrl: './notify.component.html',
  styleUrls: ['./notify.component.css']
})
export class NotifyComponent implements OnInit {

  constructor(private cookieService: CookieService) { }

  ngOnInit() {
    this.cookieService.setCookie('notify', 'true', {'expires': 7});
  }

}
