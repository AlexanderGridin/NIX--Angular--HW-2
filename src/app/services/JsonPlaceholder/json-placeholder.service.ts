import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from 'src/app/interfaces/post';

@Injectable({
  providedIn: 'root'
})
export class JsonPlaceholderService {

  constructor(private http: HttpClient) { }

  readonly postsUrl: string = 'https://jsonplaceholder.typicode.com/posts';

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.postsUrl);
  }
}
