import { from, Observable } from "rxjs";
import {Injectable} from '@angular/core';
import { PostResource } from './postResource';
import {IPostList} from '../dataModel/postList';

@Injectable()
export class PostService {
    constructor(private postResource: PostResource) {
    }

    public getAllPost(): Observable<IPostList[]> {
        return this.postResource.getAllPost();
    }
}
