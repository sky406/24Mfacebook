import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simplike',
  templateUrl: './simplike.component.html',
  styleUrls: ['./simplike.component.scss']
})
export class SimplikeComponent implements OnInit {

  isLiked = false
  likeTheButton = () =>this.isLiked = !this.isLiked

  constructor() { }

  ngOnInit(): void {
  }

  // this is just the same as liekbutton there is no change juts a headsup

}
