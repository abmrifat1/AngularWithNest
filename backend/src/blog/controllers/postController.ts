import { from, Observable } from "rxjs";
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { PostService } from '../services/postService';
import { PostEntity } from "../entities/postEntity";
import { createPostDto } from "../dtos/createPostDto";
import { PostDto } from "../dtos/postDto";

@Controller('posts')
export class PostController {
    constructor(private postService: PostService){
    }

    @Get()
    getAllPost(): Observable<PostEntity[]> {
        return this.postService.getAllPost();
    }

    @Get(':id')
    getPostById(@Param('id') id: number): Observable<PostEntity> {
        return this.postService.getPostById(id);
    }

    @Post('/create')
    createPost(@Body() postDto: createPostDto): Promise<PostDto> {
        return this.postService.createPost(postDto);
    }

    @Put(':id')
    updatePost(@Param('id') id: number, @Body() postDto: createPostDto) {
        return this.postService.updatePost(id, postDto);
    }

    @Delete(':id')
    deletePost(@Param('id') id: number) {
       return this.postService.deletePost(id);
    }

}