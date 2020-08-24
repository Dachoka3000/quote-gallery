import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-votes',
  templateUrl: './votes.component.html',
  styleUrls: ['./votes.component.css']
})
export class VotesComponent implements OnInit {
  voteUp: number=0;
  voteDown: number =0;

  upvote($index){
    return this.voteUp +=1
  }
  downvote($index){
    return this.voteDown +=1
  }

  constructor() { }

  ngOnInit(): void {
  }

}
