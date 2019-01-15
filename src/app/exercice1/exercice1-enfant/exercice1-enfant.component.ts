import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-exercice1-enfant',
  templateUrl: './exercice1-enfant.component.html',
  styleUrls: ['./exercice1-enfant.component.css']
})
export class Exercice1EnfantComponent implements OnInit {
	@Output() public incrementValue: EventEmitter<boolean> = new EventEmitter<boolean>();
	@Input() compteur1; 

	incrementCompteur( valeur : boolean) : void{
		this.incrementValue.emit(valeur);
	}	

  	constructor() { }

  	ngOnInit() {
  	}

}
