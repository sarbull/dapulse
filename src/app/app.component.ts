import { Component } from '@angular/core';

import { environment } from '../environments/environment';

@Component({
  selector: 'app-dapulse',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'dapulse';

  constructor() {
    console.log(environment.API_URL);
  }
}
