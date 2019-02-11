import { Component } from '@angular/core';
import { CookieService } from './cookie.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fitgum';

  constructor(private cookieService: CookieService) {
    this.cookieService.isCookie();
  }
}
