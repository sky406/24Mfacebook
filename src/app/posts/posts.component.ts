import { Component, OnInit } from '@angular/core';
import { Post } from '../post';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  posts:Post[] =[
    {
      user:"testuser1",
      caption:"this is a caption",
      image:"",
      date:"12-12-12",
      userimg:"",
      isstared:false
    },
    {
      user:"the amongus user",
      caption:"sus",
      image:"https://pioneeroptimist.com/wp-content/uploads/2021/03/among-us-6008615_1920-838x900.png",
      date:"4-20-20",
      userimg:"https://play-lh.googleusercontent.com/8ddL1kuoNUB5vUvgDVjYY3_6HwQcrg1K2fd_R8soD-e2QYj8fT9cfhfh3G0hnSruLKec",
      isstared:false
    },
    {
      user:"person of the internet",
      caption:"hello internet",
      image:"",
      date:"12-12-12",
      userimg:'',
      isstared:false
    }
  ]


  constructor() { }

  ngOnInit(): void {
  }

  starcheck(post:Post)
  {
    return post.isstared
  }



}
