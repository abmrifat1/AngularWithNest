import { from, Observable, of } from "rxjs";
import { Injectable } from '@nestjs/common';
import { PostModel } from '../models/postModel';
import { title } from "process";
import { MockedPosts } from "../mocks/mockedPosts";

@Injectable()
export class PostService {
    public getAllPost(): Observable<PostModel[]> {
        return of(MockedPosts);
    } 
}