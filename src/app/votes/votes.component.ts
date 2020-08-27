import { Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-votes',
  templateUrl: './votes.component.html',
  styleUrls: ['./votes.component.css']
})
export class VotesComponent implements OnInit {

  @Output() isComplete= new EventEmitter<boolean>();

  voteup=0;
  votedown=0;

  upvote(){
    this.voteup= this.voteup +1;
  }
  downvote(){
    this.votedown= this.votedown+1;
  }
  mostVotes(){
  //  likes= [];
    // this.likes.push(this.voteup);


  }

  constructor() { }

  ngOnInit(): void {
  }

}
