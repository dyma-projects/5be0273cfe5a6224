import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-exercice1',
  templateUrl: './exercice1.component.html',
  styleUrls: ['./exercice1.component.css']
})
export class Exercice1Component implements OnInit {
  public compteur: number = 0;

  incrementation(valeur: boolean): void{
  	if (valeur == true) {
  		this.compteur++;
  	}else if(valeur == false) {
  		this.compteur--;
  	};
  } 

  constructor() { }

  ngOnInit() {

  }

}
