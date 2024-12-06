import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  public title: string;
  public subtitle: string;
  public email: string;

  constructor() {
  	this.title = "Guillermo Eiroa Blanco";
  	this.subtitle = "Web developer and data scientist";
  	this.email = "guilleblanco2015@gmail.com";
  }

  ngOnInit(): void {
  }

}
