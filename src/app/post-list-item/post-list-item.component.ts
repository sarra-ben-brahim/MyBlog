import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {
  
  //loveIts: number = 0;

  @Input() title : string;
  @Input() content : string;
  @Input() loveIts : number;
  @Input() created_at : Date;

  constructor() { }

  ngOnInit() {
  }

  increment(loveIts : number){
    this.loveIts = this.loveIts + 1;
    console.log(this.loveIts);
    return this.loveIts;
  }

  decrement(loveIts : number){
    this.loveIts = this.loveIts - 1;
    console.log(this.loveIts);
    return this.loveIts;
  }

}
