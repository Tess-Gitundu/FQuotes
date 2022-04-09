import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes: Quote[] = [
   new Quote (1,'hello', 'tess', 'njeri', 0, 0, new Date(2022,1,12)),
   new Quote (2, 'hello', 'june', 'mary', 0, 0, new Date(2022,1,12)),
    new Quote (3, 'hello', 'april', 'wanja', 0, 0, new Date(2022,1,12))
  ];

  addLikes(index: number) {
    this.quotes[index].upvote++;
  }
  addMeeh(index: number) {
    this.quotes[index].downvote++;
  }

  showDetails(index: number) {
    this.quotes[index].showDetails = !this.quotes[index].showDetails;
  }

  completeQuote(isComplete: any, index: number) {
    if (isComplete) {
      this.quotes.splice(index,1)
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
