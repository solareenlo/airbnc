import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Subject } from 'rxjs';

import { Post } from './post.model';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
    // 'Authorization': 'my-auth-token'
  })
};
@Injectable({providedIn: 'root'})

export class PostsService {
  host = 'http://localhost:3000/api/houses';
  private posts: Post[] = [];
  private postsUpdated = new Subject<Post[]>();

  constructor(private http: HttpClient) {}

  getPosts() {
    this.http.get<Post[]>(this.host)
      .subscribe((postData) => {
        this.posts = postData;
        this.postsUpdated.next([...this.posts]);
      });
  }

  getPostUpdateListener() {
    return this.postsUpdated.asObservable();
  }

  addPost() {
    const name = 'test1';
    const description = 'test2';
    const fee = 10000;
    const owner = 3;
    const contract_id = 'lsajflajslkdf';
    const post: Post = {id: null, name, description, fee, owner, contract_id, updated_at: null, created_at: null};
    this.http
      .post<{message: string}>(this.host, post)
      .subscribe((resData) => {
        console.log(resData);
      });
  }
}
