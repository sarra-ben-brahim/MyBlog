import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {



  posts = [
    {
      title : "first post",
      content : "this is my first post. Do you love It? <3",
      loveIts: 5,
      created_at: "01/01/2019"
    },
    {
      title : "second post",
      content : "this is my second post. Do you love It? <3",
      loveIts: -1,
      created_at: "03/01/2019"
    }
    ,
    {
      title : "third post",
      content : "this is my third post. Do you love It? <3",
      loveIts: -2,
      created_at: "05/01/2019"
    }
    ,
    {
      title : "fourth post",
      content : "this is my fourth post. Do you love It? <3",
      loveIts: 0,
      created_at: "08/01/2019"
    }
  ];
}
