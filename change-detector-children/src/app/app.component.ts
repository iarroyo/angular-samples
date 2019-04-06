import { Component } from '@angular/core';
import { Router } from '@angular/router';
const randomstring = require("random-string");

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'change-detector-children';

  constructor(private router: Router) {}

  generateRandomLink() {
    this.router.navigate(["/parent", randomstring({length: 5})]);
  }
}
