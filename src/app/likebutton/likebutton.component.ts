import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-likebutton',
  templateUrl: './likebutton.component.html',
  styleUrls: ['./likebutton.component.scss']
})
export class LikebuttonComponent implements OnInit {

  isLiked = false
  likeTheButton = () =>this.isLiked = !this.isLiked
  constructor() { }

  ngOnInit(): void {
  }

}
