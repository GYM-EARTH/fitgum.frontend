import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fitgum';

  // constructor() {
  //   const hours = new Date().getHours()
  //   const isDayTime = hours >= 6 && hours <= 18;
    
  //   if (isDayTime) {
  //     document.body.classList.add('light');
  //   } else {
  //     document.body.classList.add('dark');
  //   }

  // }
}
