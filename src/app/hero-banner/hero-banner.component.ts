import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hero-banner',
  templateUrl: './hero-banner.component.html',
  styleUrls: ['./hero-banner.component.css']
})
export class HeroBannerComponent implements OnInit {

  constructor() { }

  title = "My Banner"

  ngOnInit() {
  }

}
