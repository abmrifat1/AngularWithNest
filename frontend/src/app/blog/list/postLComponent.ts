import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-post-list',
  templateUrl: './postList.html'
})

export class PostListComponent implements OnInit{
  constructor() {
  }
  title = 'nestNg';
  postList = [
    {
      title: 'title - 1',
      subTitle: 'sub-title - 1',
      img: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      content: 'this is content for post one.'
    },
    {
      title: 'title - 2',
      subTitle: 'sub-title - 2',
      img: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      content: 'this is content for post two.'
    },
    {
      title: 'title - 3',
      subTitle: 'sub-title - 3',
      img: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      content: 'this is content for post three.'
    },
    {
      title: 'title - 4',
      subTitle: 'sub-title - 4',
      img: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      content: 'this is content for post four.'
    },
    {
      title: 'title - 1',
      subTitle: 'sub-title - 1',
      img: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      content: 'this is content for post one.'
    },
    {
      title: 'title - 2',
      subTitle: 'sub-title - 2',
      img: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      content: 'this is content for post two.'
    },
    {
      title: 'title - 3',
      subTitle: 'sub-title - 3',
      img: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      content: 'this is content for post three.'
    },
    {
      title: 'title - 4',
      subTitle: 'sub-title - 4',
      img: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      content: 'this is content for post four.'
    }
  ];
  ngOnInit() {
     console.log('all post:', this.postList)
  }
}
