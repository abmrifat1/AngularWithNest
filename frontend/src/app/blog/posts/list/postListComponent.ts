import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IPostList } from '../services/dataModel/postList';
import { PostService } from '../services/postsService';
@Component({
  selector: 'app-post-list',
  templateUrl: './postList.html'
})

export class PostListComponent implements OnInit{

  public postList: Observable<IPostList[]>;

  constructor(private postService: PostService) {
  }
  title = 'nestNg';
  ngOnInit() {
    this.postList = this.postService.getAllPost();
    console.log('all post:', this.postList)
  }
}
