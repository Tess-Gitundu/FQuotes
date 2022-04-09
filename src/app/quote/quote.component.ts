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
   new Quote (0, 'hello', 'june', 'mary', 0, 0, new Date(2022,1,12)),
    new Quote (0, 'hello', 'april', 'wanja', 0, 0, new Date(2022,1,12))
  ];

  arr: number[] = this.quotes.map(quote=>quote.upvote)
  highest = Math.max(...this.arr)

  addNewQuote(quote: any) {
    let quoteLength = this.quotes.length;
    quote.id = quoteLength + 1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)
  }

  addLikes(index: number) {
    this.quotes[index].upvote++;
  }
  addMeeh(index: number) {
    this.quotes[index].downvote++;
  }

  showDetails(index: number) {
    this.quotes[index].showDetails = !this.quotes[index].showDetails;
  }

  deleteQuote(isComplete: any, index: number) {
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].name}?`)
      if (toDelete){
        this.quotes.splice(index,1)
      }
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
