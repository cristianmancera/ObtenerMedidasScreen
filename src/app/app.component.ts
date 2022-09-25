import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  width = 0;
  height = 0;
  ngOnInit(): void {
    this.width = window.screen.width;
    this.height = window.screen.height;
  }

}
