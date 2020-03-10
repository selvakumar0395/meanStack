import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  // posts = [
  //   {title: 'First Post', content: 'This is First Post'},
  //   {title: 'Second Post', content: 'This is Second Post'},
  //   {title: 'Third Post', content: 'This is Third Post'},
  // ];
  @Input() posts = [];

  constructor() { }

  ngOnInit() {
  }

}
