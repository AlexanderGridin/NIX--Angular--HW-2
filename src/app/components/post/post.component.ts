import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input() id: number | undefined;
  @Input() title: string | undefined;
  @Input() body: string | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
