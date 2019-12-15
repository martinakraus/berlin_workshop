import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ],
})
export class AppComponent {
  appComponent = 'hello  book 1';

  ping(e: string) {
    console.log(e);
  }
}
