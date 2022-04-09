import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes: Quote[] = [
    {id: 1, quote: 'hello', author: 'tess', name: 'njeri', upvote: 0, downvote:0},
    {id: 2, quote: 'hello', author: 'june', name: 'mary', upvote: 0, downvote:0},
    {id: 3, quote: 'hello', author: 'april', name: 'wanja', upvote: 0, downvote:0}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
