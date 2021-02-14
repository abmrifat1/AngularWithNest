import { from, Observable } from "rxjs";
import { Controller, Get } from '@nestjs/common';
import { PostService } from '../services/postService';
import { PostModel } from "../models/postModel";

@Controller('posts')
export class PostController {
    constructor(private postService: PostService){
    }

    @Get()
    getAllPost(): Observable<PostModel[]> {
        return this.postService.getAllPost();
    }
}