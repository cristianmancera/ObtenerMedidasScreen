import { Component, OnInit } from '@angular/core';

declare var jQuery: any;
declare var $: any;
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
    $.AutumnLeafStart({
      leavesfolder: "../assets/AutumnLeaves/",
      howmanyimgsare: 8,
      initialleaves: 20,
      maxyposition: -10,
      multiplyclick: true,
      multiplynumber: 3,
      infinite: true,
      fallingsequence: 4000
    })
  }

}
