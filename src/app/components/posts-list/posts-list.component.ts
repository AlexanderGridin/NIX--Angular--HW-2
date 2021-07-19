import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { JsonPlaceholderService } from '../../providers/JsonPlaceholder/json-placeholder.service';
import { Post } from '../../interfaces/post';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit {
  public getPostsSub: Subscription | undefined;
  public posts: Post[] | undefined;

  constructor(private jsonPlaceholder: JsonPlaceholderService) { }

  ngOnInit(): void {
    this.getPosts();
  }

  private getPosts(): void {
    this.getPostsSub = <Subscription>this.jsonPlaceholder.getPosts().subscribe((data: Post[]) => {
      this.posts = data;
    });
  }
}
