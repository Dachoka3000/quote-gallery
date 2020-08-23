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
    new Quote('Daisy Machoka', 'Lily Tomlin', 'Forgiveness means giving up all hope for a better past'),
    new Quote('Daisy Machoka', 'Ralph Waldo Emerson', 'It is one of the beautiful compensations in this life that no one can help another without helping himself'),
    
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
