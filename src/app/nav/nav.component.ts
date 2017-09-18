import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor() { }

  gravatar="https://s.gravatar.com/avatar/1670879794aed7c23742e5b1f759be94?s=40";

  ngOnInit() {
  }

}
