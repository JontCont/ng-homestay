import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  hrefToNews(): void {
    window.location.href = '/hotel/news';

  }
  hrefToAbout(): void {
    window.location.href = '/hotel/about';

  }

}
