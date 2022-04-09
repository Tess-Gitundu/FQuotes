export class Quote {
    id: number;
    quote: string;
    author: string;
    name: string;
    upvote: number;
    downvote: number;

    showDetails: boolean;
    constructor(id:number, quote:string, author:string, name:string, upvote:number, downvote:number ) {
        this.id = id;
        this.quote = quote;
        this.author = author;
        this.name = name;
        this.upvote = upvote;
        this.downvote = downvote;
        this.showDetails=false;
    }
}
