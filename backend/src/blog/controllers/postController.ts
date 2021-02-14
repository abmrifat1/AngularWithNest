import { from, Observable } from "rxjs";
import { Controller, Get } from '@nestjs/common';
import { PostService } from '../services/postService';
import { PostEntity } from "../entities/postEntity";

@Controller('posts')
export class PostController {
    constructor(private postService: PostService){
    }

    @Get()
    getAllPost(): Observable<PostEntity[]> {
        return this.postService.getAllPost();
    }

    @Get('/create')
    createPost() {
        this.postService.createPost();
        return 'Post create successfully!'
    }
}