import { from, Observable, of } from "rxjs";
import { Injectable } from '@nestjs/common';
import { title } from "process";
import { MockedPosts } from "../mocks/mockedPosts";
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PostEntity } from '../entities/postEntity';

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

    public createPost() {
        this.postRepository.save(
            {
                title: 'this is title',
                subTitle: 'sub-title is on here',
                img: '',
                content: 'this is the contents of post!!!'
            },
        );
    }
}