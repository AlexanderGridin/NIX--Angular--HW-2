import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { PostsListComponent } from 'src/app/components/posts-list/posts-list.component';
import { PostComponent } from 'src/app/components/post/post.component';

import { JsonPlaceholderService } from '../../providers/JsonPlaceholder/json-placeholder.service';




@NgModule({
  declarations: [
    PostsListComponent,
    PostComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    PostsListComponent
  ],
  providers: [
    JsonPlaceholderService
  ]
})
export class PostsListModule { }
