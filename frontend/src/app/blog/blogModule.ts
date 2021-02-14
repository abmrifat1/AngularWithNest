import { NgModule } from "@angular/core";
import { HttpClientModule } from '@angular/common/http';
import { PostListModule } from "./list/postListModule";
import { PostResource } from "./services/postResource";
import { PostService } from "./services/postsService";
import { from } from "rxjs";

@NgModule({
  declarations: [],
  exports: [
    PostListModule
  ],
  imports: [
    PostListModule,
    HttpClientModule
  ],
  providers: [
      PostResource,
      PostService
  ],
  bootstrap: []
})
export class BlogModule {
  
 }  