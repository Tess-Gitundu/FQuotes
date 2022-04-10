import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes: Quote[] = [
   new Quote (0,'People say nothing is impossible, but I do nothing everyday.', 'A.A. Milne', 'Tess', 0, 0, new Date(2022,3,8)),
   new Quote (1, 'I try not to laugh at my own jokes, but we all know I am hilarious.', 'Love Mary', 'Angel', 0, 0, new Date(2022,3,4)),
    new Quote (2, 'I am sick of following my dreams, man. I am just going to ask where they are going and hook up with them later.', 'Mitch Hero', 'Rose Flower', 0, 0, new Date(2022,3,1))
  ];

  preNum!:number
  lastNum!:number
  counter!:number

  highestVote(){
    this.preNum = 0
    this.lastNum = 0

    for(this.counter=0 ; this.counter < this.quotes.length; this.counter++) {
      this.lastNum = this.quotes[this.counter].upvote;
      if(this.lastNum > this.preNum){this.preNum = this.lastNum}
    }
    return  this.preNum
  }

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
