import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
	public widthSlider: number;
	public anchuraToSlider: any;
	public captions: boolean;
	public autor: any;

	@ViewChild('textos', {static: true}) textos;

  constructor() {
  	this.captions = true;
  }

  ngOnInit(){
  	var opcion_clasica = document.querySelector('#texto').innerHTML; 
  	console.log(opcion_clasica);
  	//alert(this.textos.nativeElement.textContent);
  }

  cargarSlider(){
  	this.anchuraToSlider = this.widthSlider;
  }

  resetearSlider(){
  	this.anchuraToSlider = false;
  }

  getAutor(event){
  	this.autor = event;
  }

}
