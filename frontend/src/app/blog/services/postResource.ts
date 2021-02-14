
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import { AppConfig } from "../appConfig";
import { from, Observable } from 'rxjs';
import { IPostList } from '../dataModel/postList';

@Injectable()
export class PostResource {
    private readonly URL = AppConfig.url + 'posts';
    constructor(private httpClient: HttpClient) {
    }

    public getAllPost(): Observable<IPostList[]> {
        return this.httpClient.get(this.URL) as Observable<IPostList[]>;
    }
}
