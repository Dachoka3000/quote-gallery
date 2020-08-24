import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes: Quote[]= [
    new Quote('Daisy Machoka', 'Maya Angelou', 'Do what you can until you know better. Then when you know better, do better'),
    new Quote('Daisy Machoka', 'Audrey Hepburn', 'Nothing is impossible. The word itself says"Im possible"'),
    new Quote('Daisy Machoka', 'Andre Gide', 'It is better to be hated for what you are than to be loved for what you are not.'),
    new Quote('Daisy Machoka', 'Ralph Waldo Emerson', 'It is one of the beautiful compensations in this life that no one can help another without helping himself'),
    new Quote('Daisy Machoka','Shrii Shrii Anandamutri', 'You are never alone or helpless. The force that guides the stars guides you too.'),

  ]

  showMore(index){
    this.quotes[index].showDetails = !this.quotes[index].showDetails;
  }

  removeQuote(toDelete, index){
    if(toDelete){
      this.quotes.splice(index,1)
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
