import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes: Quote[]= [
    new Quote('Daisy Machoka', 'Maya Angelou', 'Do what you can until you know better. Then when you know better, do better', new Date(2015,1,5)),
    new Quote('Daisy Machoka', 'Audrey Hepburn', "Nothing is impossible. The word itself says I'm possible", new Date(2016,8,9)),
    new Quote('Daisy Machoka', 'Andre Gide', 'It is better to be hated for what you are than to be loved for what you are not.', new Date(2012,12,13)),
    new Quote('Daisy Machoka', 'Ralph Waldo Emerson', 'It is one of the beautiful compensations in this life that no one can help another without helping himself', new Date(2020,1,3)),
    new Quote('Daisy Machoka','Shrii Shrii Anandamutri', 'You are never alone or helpless. The force that guides the stars guides you too.', new Date(2014,7,18)),

  ]

  showMore(index){
    this.quotes[index].showDetails = !this.quotes[index].showDetails;
  }

  removeQuote(toDelete, index){
    if(toDelete){
      this.quotes.splice(index,1)
    }
  }
  addNewQuote(quote){
    quote.submissionDate= new Date()

    if (quote.author==""){
      alert("Name of author is required")
    }else if (quote.quotecontent==""){
      alert("please insert quote")
    }else if (quote.name==""){
      alert("Please insert your name")
    } else{
      this.quotes.push(quote)
    }

  } 

  constructor() { }

  ngOnInit(): void {
  }

}
