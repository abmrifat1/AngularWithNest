import { NgModule } from "@angular/core";
import { HttpClientModule } from '@angular/common/http';
import { PostModule } from "./posts/postModule";
import { PostResource } from "../services/postResource";
import { PostService } from "../services/postsService";
import { from } from "rxjs";

@NgModule({
  declarations: [],
  exports: [
    PostModule
  ],
  imports: [
    PostModule,
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