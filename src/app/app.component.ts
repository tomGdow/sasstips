import { Component } from '@angular/core';
import * as $ from 'jquery';
import 'foundation-sites/';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Sass Tips';
  ngAfterViewInit() {
    $(document).foundation();
  }
}
