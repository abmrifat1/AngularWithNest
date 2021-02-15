import { NgModule } from "@angular/core";
import { HttpClientModule } from '@angular/common/http';
import { PostListModule } from "../posts/list/postListModule";
import { PostResource } from "./services/postResource";
import { PostService } from "./services/postsService";

@NgModule({
  declarations: [],
  exports: [
    PostListModule
  ],
  imports: [
    PostListModule
  ],
  providers: [],
  bootstrap: []
})
export class PostModule {
  
 } 