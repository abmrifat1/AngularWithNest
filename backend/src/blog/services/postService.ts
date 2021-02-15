import { from, Observable, of } from "rxjs";
import { Injectable } from '@nestjs/common';
import { title } from "process";
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PostEntity } from '../entities/postEntity';
import { createPostDto } from "../dtos/createPostDto";
import { PostDto } from "../dtos/postDto";

@Injectable()
export class PostService {
    constructor(
        @InjectRepository(PostEntity)
        private postRepository: Repository<PostEntity>,
      ) {}
    
    public getAllPost(): Observable<PostEntity[]> {
        return from(this.postRepository.find());
    } 

    public getPostById(id: number): Observable<PostEntity> {
        return from(this.postRepository.findOne(id));
    }

    public createPost(createPostDto: createPostDto): Promise<PostDto> {
        return this.postRepository.save(createPostDto);
    }

    public updatePost(id: number, post: createPostDto): Promise<PostDto> {
        this.postRepository.update(+id, post);
        return;
    }

    public deletePost(id: number) {
        console.log('remove:', id);
      return this.postRepository.delete(id);
    }

    public getAllPostByUserId(userId: number): Observable<PostEntity[]> {
        return from(this.postRepository.find({userId: userId}));
    }
}