import { NgModule } from "@angular/core";
import { PostListModule } from "./list/postListModule";
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
  providers: [
      PostResource,
      PostService
  ],
  bootstrap: []
})
export class BlogModule {
  
 }  