import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  theme: string;

  constructor() {
    const hours = new Date().getHours()
    const isDayTime = hours >= 6 && hours <= 18;

    if (isDayTime) {
      this.theme = 'Dark';
      document.body.classList.add('light');
    } else {
      this.theme = 'Light';
      document.body.classList.add('dark');
    }
  }

  ngOnInit() {}

  changeTheme() {
    if (this.theme == 'Light') {
      this.theme = 'Dark';
      document.body.classList.remove('dark');
      document.body.classList.add('light');
    } else {
      this.theme = 'Light';
      document.body.classList.remove('light');
      document.body.classList.add('dark');
    }
  }

}
